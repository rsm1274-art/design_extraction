# Agent instructions — design system

This project follows the design system extracted from https://ishikawa.co/en/.
Any coding agent working here must use the tokens below and avoid inventing new ones.
Source: https://ishikawa.co/en/
Extracted by designlang v7.0.0 on 2026-08-20T19:22:37.497Z

## Semantic tokens (use these)
- color.action.primary: #dcf6f2
- color.surface.default: #ffffff
- color.text.body: #000000
- radius.control: 1px
- typography.body.fontFamily: Avenir Next

## Regions
- nav
- content
- content
- hero
- nav
- sidebar
- nav
- content
- sidebar
- nav
- content
- content
- content
- content
- content
- footer
- nav

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
