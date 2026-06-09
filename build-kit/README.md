# Mobile RV Detailers - Codex Website Build Kit

This kit is designed to help you build a premium, low-cost website for Mobile RV Detailers using Codex.

## Files

1. `01_REQUIREMENTS_FILL_IN.md`  
   Fill this out first. This is the source-of-truth requirements document for Codex.

2. `02_CODEX_MASTER_BUILD_PROMPT.md`  
   Copy/paste this into Codex after you add the requirements file and assets to the project.

3. `03_STEP_BY_STEP_EXECUTION.md`  
   Follow this in order from project setup through deployment.

4. `04_CODEX_PROMPT_PLAN.md`  
   Follow-up prompts for design polish, mobile optimization, SEO, assets, QA, and emergency corrections.

5. `AGENTS.md`  
   Place this in the root of the website repository. Codex will treat this as project-level build guidance.

6. `asset_manifest_template.csv`  
   Use this to inventory every logo/photo/image before Codex builds the gallery and service sections.

7. `Mobile_RV_Detailers_Website_Build_Requirements.docx`  
   Editable Word version of the requirements template.

## Recommended flow

1. Fill out `01_REQUIREMENTS_FILL_IN.md`.
2. Put all selected images/logos in `public/images/originals/`.
3. Complete `asset_manifest_template.csv`.
4. Create or initialize the Astro project.
5. Put `AGENTS.md` and the filled requirements file at the repository root.
6. Paste the prompt from `02_CODEX_MASTER_BUILD_PROMPT.md` into Codex.
7. Review the local preview.
8. Use the follow-up prompts in `04_CODEX_PROMPT_PLAN.md` for refinement, QA, and deployment.
