# WebWorks Studio — Module 9 Student Starter
## Mission City Makers Market

You are the **Junior Front-End Developer** assigned to improve a fictional client page using two different professional tools:

1. **Alpine.js** — create one lightweight custom interaction.
2. **Preline UI** — choose and adapt one reusable component.

The goal is not to add as many effects as possible. The goal is to choose the right tool for the right job.

## Start Here

Open this entire folder in Visual Studio Code.

In the VS Code terminal, run:

```bash
npm install
npm run dev
```

Keep `npm run dev` running while you work.

The `dev` command:

- copies Preline's browser JavaScript to `js/vendor/preline.js`;
- starts Tailwind watch mode;
- rebuilds `css/output.css` when your HTML changes.

Preview `index.html` with Live Server.

## What Is Already Set Up?

- Tailwind CSS 4
- Preline UI
- Tailwind Forms
- Alpine.js through the approved CDN
- responsive client page
- accessible baseline HTML
- client content and starter images
- clearly marked Alpine and Preline work areas
- Mac/Windows-friendly npm scripts

### Versions

- Tailwind CSS 4.3.3
- Tailwind CLI 4.3.3
- Preline UI 4.2.0
- Tailwind Forms 0.5.11
- Alpine.js CDN 3.17.1

Do not change versions unless your instructor tells you to.

# Requirement 1 — Alpine-Powered Exploration Tool

Use Alpine to help a visitor explore, narrow, compare, select, or better understand the supplied maker content.

Required:

- `x-data`
- at least one user event
- at least one additional reactive directive
- visible, understandable interface response
- semantic, keyboard-accessible controls

Search `index.html` for:

`TODO: REQUIRED ALPINE INTERACTION`

Do not copy the classroom Alpine playground unchanged.

# Requirement 2 — Adapted Preline Component

Choose one Preline component that improves the supplied client page.

Possible choices:

- accordion
- tabs
- modal
- dropdown
- alert
- another instructor-approved component

Required:

- solve a real client/user need
- use official Preline structure
- retain meaningful client content
- adapt styling with Tailwind utilities
- remain keyboard usable
- preserve accessibility behavior
- work at narrow, medium, and wide widths

Search `index.html` for:

`TODO: REQUIRED PRELINE COMPONENT`

# Scope Rule

Your Alpine interaction and Preline component must solve **different problems**.

# Why `js/vendor/preline.js` Exists

`node_modules` should not be committed or relied on by GitHub Pages.

Running:

```bash
npm run dev
```

or:

```bash
npm run build
```

copies Preline from:

```text
node_modules/preline/dist/preline.js
```

to:

```text
js/vendor/preline.js
```

Commit the copied runtime with your finished project.

# Before Pushing to GitHub

Run:

```bash
npm run build
```

Then confirm these contain real generated code:

```text
css/output.css
js/vendor/preline.js
```

Commit both files.

Do not commit `node_modules/`.

# Required README Documentation

Replace each TODO before submitting.

## Project Summary

TODO

## Alpine Decision

**User/client need:**  
TODO

**Alpine directives used:**  
TODO

**Why Alpine was appropriate:**  
TODO

## Preline Decision

**Preline component selected:**  
TODO

**Problem it solves:**  
TODO

**How you adapted it:**  
TODO

## Accessibility Notes

1. TODO
2. TODO

## Testing Notes

**Narrow viewport:** TODO  
**Medium viewport:** TODO  
**Wide viewport:** TODO  
**Keyboard testing:** TODO  
**Browser console:** TODO

## Dependencies

**Alpine.js — how used:** TODO  
**Preline UI — how used:** TODO  
**Tailwind CSS — how used:** TODO

## Official Documentation Used

- Alpine.js: TODO
- Preline UI: TODO

# Official References

- https://alpinejs.dev/start-here
- https://alpinejs.dev/directives/
- https://preline.co/docs/
- https://preline.co/docs/components.html
- https://preline.co/docs/accessibility.html

# Final Check

- [ ] `npm run build` completes.
- [ ] Tailwind styles load.
- [ ] Alpine interaction works.
- [ ] Preline component works.
- [ ] They solve different needs.
- [ ] Keyboard testing works.
- [ ] Responsive testing is complete.
- [ ] Console has no unresolved errors.
- [ ] README is complete.
- [ ] `css/output.css` is committed.
- [ ] `js/vendor/preline.js` is committed.
- [ ] `node_modules` is not committed.
- [ ] Work is pushed to GitHub.
