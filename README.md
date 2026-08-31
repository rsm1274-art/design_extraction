# Extracted Design

Central repository for design systems pulled off live websites with the
**designlang / design-extract** tool. Each subfolder is one website's complete
extraction (color tokens, typography, spacing, motion, Tailwind/shadcn/Figma exports,
and a visual preview).

## How to run it

From **any** Claude Code conversation, invoke the global skill:

```
/design-extract https://example.com
```

or just say: *"extract the design system off https://example.com"*.

Claude will run the extraction, drop all files into a new `<site-slug>/` folder here,
summarize what it found, add a row to `INDEX.md`, and offer to preview it or apply it
to one of your files.

> The skill itself lives at `C:\Users\rober\.claude\skills\design-extract\SKILL.md`
> (global, so it works in every project). This README is the human-facing companion;
> the SKILL.md is the detailed instruction Claude follows.

## Folder layout

```
Extracted Design/
  README.md          <- you are here
  INDEX.md           <- running table of every extraction
  <site-slug>/       <- one folder per site (e.g. roberttran-com-au/)
      *-DESIGN.md          human-readable summary
      *-design-tokens.json W3C DTCG tokens
      *-preview.html       open this in a browser
      *-tailwind*.css/js   framework exports
      ...                  (full file list in the skill)
```

`<site-slug>` = the hostname, `www.` removed, dots → hyphens
(`https://www.roberttran.com.au` → `roberttran-com-au`).

## Good to know

- **First run** downloads ~150 MB of browser engine (Playwright Chromium); later runs are fast.
- The CLI sometimes prints **"✖ Extraction failed"** at the very end even when it worked —
  it's a cosmetic bug that fires *after* all files are saved. Check the folder; if the files
  are there, you're fine. (The skill handles this automatically.)
- Treat generated `tailwind.config.js` / `shadcn-theme.css` as token *mappings*, not proof
  the site is built with those frameworks.

## INDEX

See [INDEX.md](INDEX.md) for the catalog of everything extracted so far.
