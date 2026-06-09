import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const distDir = join(root, "dist");
const publicDir = join(root, "public");
const srcDir = join(root, "src");

const failures = [];
const notes = [];

const walk = (dir, predicate = () => true) => {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full, predicate));
    } else if (predicate(full)) {
      files.push(full);
    }
  }
  return files;
};

const fail = (message) => failures.push(message);

if (!existsSync(distDir)) {
  fail("dist/ does not exist. Run npm run build first.");
}

if (existsSync(publicDir)) {
  const publicFiles = walk(publicDir);
  const placeholderAssets = publicFiles.filter((file) => {
    const normalized = relative(root, file).replaceAll("\\", "/").toLowerCase();
    if (!normalized.includes("/images/optimized/")) return false;
    return normalized.includes("placeholder");
  });

  for (const file of placeholderAssets) {
    fail(`Public placeholder asset is still present: ${relative(root, file).replaceAll("\\", "/")}`);
  }
}

const sourceFiles = existsSync(srcDir)
  ? walk(srcDir, (file) => /\.(astro|ts|js|mjs|css)$/.test(file))
  : [];

for (const file of sourceFiles) {
  const text = readFileSync(file, "utf8");
  for (const match of text.matchAll(/["'`]((?:\/images\/|\/_astro\/)[^"'`?#]+)["'`]/g)) {
    const assetPath = match[1];
    const absoluteAssetPath = join(publicDir, assetPath.replace(/^\//, ""));
    if (assetPath.startsWith("/images/") && !existsSync(absoluteAssetPath)) {
      fail(`Missing local asset referenced by ${relative(root, file).replaceAll("\\", "/")}: ${assetPath}`);
    }
  }
}

if (existsSync(distDir)) {
  const htmlFiles = walk(distDir, (file) => file.endsWith(".html"));
  const requiredText = [
    "Normal Wash",
    "Wash + Roof or Awning",
    "Full Exterior Detail",
    "Custom RV Detail Quote",
    "https://tally.so/r/xXvkqJ",
    "sms:+19035024242",
    "water and electricity"
  ];
  const foundRequired = Object.fromEntries(requiredText.map((item) => [item, false]));
  const missingInternalLinks = [];
  const forbiddenLiveText = [
    /Full Detail/i,
    /Wash \+ Roof & Awning/i,
    /bring our own water/i,
    /online booking/i,
    /customer account/i,
    /payment required/i,
    /licensed and insured/i
  ];
  const forbiddenMatches = [];

  const internalTargetExists = (href) => {
    const clean = href.split("#")[0].replace(/\/$/, "");
    if (!clean || clean === "/") return existsSync(join(distDir, "index.html"));
    return existsSync(join(distDir, clean, "index.html")) || existsSync(join(distDir, clean));
  };

  for (const file of htmlFiles) {
    const relativeFile = relative(distDir, file).replaceAll("\\", "/");
    const html = readFileSync(file, "utf8");

    for (const item of requiredText) {
      if (html.includes(item)) foundRequired[item] = true;
    }

    for (const pattern of forbiddenLiveText) {
      const match = html.match(pattern);
      if (match) forbiddenMatches.push(`${relativeFile}: ${match[0]}`);
    }

    if (!html.includes("<title>")) fail(`${relativeFile} is missing a title tag.`);
    if (!html.includes('name="description"')) fail(`${relativeFile} is missing a meta description.`);
    if (!html.includes('rel="canonical"')) fail(`${relativeFile} is missing a canonical URL.`);

    for (const match of html.matchAll(/href="([^"]+)"/g)) {
      const href = match[1];
      if (/^(https?:|tel:|sms:|mailto:|#)/.test(href)) continue;
      if (!href.startsWith("/")) continue;
      if (!internalTargetExists(href)) missingInternalLinks.push(`${relativeFile} -> ${href}`);
    }
  }

  for (const [item, found] of Object.entries(foundRequired)) {
    if (!found) fail(`Required launch text/link missing from built HTML: ${item}`);
  }

  for (const issue of missingInternalLinks) fail(`Broken internal link: ${issue}`);
  for (const issue of forbiddenMatches) fail(`Forbidden live text found: ${issue}`);

  if (!existsSync(join(distDir, "robots.txt"))) fail("dist/robots.txt is missing.");
  if (!existsSync(join(distDir, "sitemap.xml"))) fail("dist/sitemap.xml is missing.");

  notes.push(`${htmlFiles.length} built HTML pages audited.`);
}

const packageJson = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
if (packageJson.scripts?.build !== "astro build") {
  fail("package.json build script must remain `astro build` for Cloudflare Pages.");
}

const totalPublicSize = existsSync(publicDir)
  ? walk(publicDir).reduce((sum, file) => sum + statSync(file).size, 0)
  : 0;
notes.push(`public/ asset payload: ${(totalPublicSize / 1024 / 1024).toFixed(2)} MB.`);

if (failures.length > 0) {
  console.error("Production audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Production audit passed.");
for (const note of notes) console.log(`- ${note}`);
