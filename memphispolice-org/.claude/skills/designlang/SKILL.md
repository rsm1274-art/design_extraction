---
name: designlang-tokens
description: Use when styling UI for www.memphispolice.org — references the extracted design system tokens instead of inventing colors, spacing, or typography.
---

# designlang tokens
Source: https://www.memphispolice.org/about/
Extracted by designlang v7.0.0 on 2026-08-20T16:17:54.197Z

## Semantic tokens (use these)
- color.action.primary: #fcac00
- color.surface.default: #ffffff
- color.text.body: #666666
- radius.control: 50px
- typography.body.fontFamily: Lato

## Regions
- nav

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
