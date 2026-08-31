# Agent instructions — design system

This project follows the design system extracted from https://www.roberttran.com.au.
Any coding agent working here must use the tokens below and avoid inventing new ones.
Source: https://www.roberttran.com.au
Extracted by designlang v7.0.0 on 2026-08-05T17:06:13.383Z

## Semantic tokens (use these)
- color.action.primary: #16140f
- color.surface.default: #f4f1e9
- color.text.body: #000000
- radius.control: 7px
- typography.body.fontFamily: caslonText

## Regions
- nav
- nav
- content
- pricing
- content
- content
- pricing
- footer

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
