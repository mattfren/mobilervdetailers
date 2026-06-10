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
const siteSource = existsSync(join(srcDir, "data", "site.ts"))
  ? readFileSync(join(srcDir, "data", "site.ts"), "utf8")
  : "";
const pricesApproved = /pricesApproved:\s*true/.test(siteSource);
const careClubApproved = /careClubApproved:\s*true/.test(siteSource);
const reviewsApproved = /reviewsApproved:\s*true/.test(siteSource);
const licensedInsuredApproved = /licensedInsuredApproved:\s*true/.test(siteSource);

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
    /Canton,TX/i,
    /wax soap hand drying/i,
    /lorem ipsum/i,
    /localhost/i,
    /127\.0\.0\.1/i,
    /#todo/i,
    /Full Detail/i,
    /Wash \+ Roof & Awning/i,
    /bring our own water/i,
    /online booking/i,
    /customer account/i,
    /payment required/i
  ];
  if (!pricesApproved) forbiddenLiveText.push(/\$[0-9]/);
  if (!careClubApproved) {
    forbiddenLiveText.push(
      /RV Care Club/i,
      /member discount/i,
      /service credits/i,
      /locked-in/i,
      /locked in/i,
      /annual inspection/i,
      /storm damage inspection/i
    );
  }
  if (!reviewsApproved) {
    forbiddenLiveText.push(
      /100% recommend/i,
      /Facebook recommendation/i,
      /View all 5 reviews/i,
      /Read full review/i,
      /shared by real customers/i
    );
  }
  if (!licensedInsuredApproved) forbiddenLiveText.push(/licensed and insured/i);
  const forbiddenMatches = [];
  const pageTitles = new Map();

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
    if (!html.includes('property="og:title"')) fail(`${relativeFile} is missing Open Graph title.`);
    if (!html.includes('property="og:description"')) fail(`${relativeFile} is missing Open Graph description.`);
    if (!html.includes('property="og:image"')) fail(`${relativeFile} is missing Open Graph image.`);
    if (!html.includes('type="application/ld+json"')) fail(`${relativeFile} is missing JSON-LD.`);

    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    if (titleMatch) {
      const pageTitle = titleMatch[1];
      const existing = pageTitles.get(pageTitle);
      if (existing) fail(`Duplicate page title: ${existing} and ${relativeFile} both use "${pageTitle}".`);
      pageTitles.set(pageTitle, relativeFile);
    }

    for (const match of html.matchAll(/<img\b([^>]*)>/g)) {
      if (!/\salt=/.test(match[1])) fail(`${relativeFile} has an image without alt text.`);
    }

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
if (packageJson.engines?.node !== ">=22.12.0") {
  fail("package.json must pin engines.node to >=22.12.0 for Astro/Cloudflare Pages builds.");
}

for (const versionFile of [".node-version", ".nvmrc"]) {
  const versionPath = join(root, versionFile);
  if (!existsSync(versionPath)) {
    fail(`${versionFile} is missing; Cloudflare Pages needs an explicit Node version.`);
  } else if (readFileSync(versionPath, "utf8").trim() !== "22.16.0") {
    fail(`${versionFile} must contain 22.16.0.`);
  }
}

const wranglerPath = join(root, "wrangler.jsonc");
if (!existsSync(wranglerPath)) {
  fail("wrangler.jsonc is missing.");
} else {
  const wranglerText = readFileSync(wranglerPath, "utf8");
  for (const required of [
    '"pages_build_output_dir": "dist"'
  ]) {
    if (!wranglerText.includes(required)) fail(`wrangler.jsonc missing ${required}.`);
  }
  if (wranglerText.includes('"observability"')) {
    fail("wrangler.jsonc must not include observability; Cloudflare Pages rejects that field.");
  }
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
