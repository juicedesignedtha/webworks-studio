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

This was a VERY chanlanging one for me. I struggled with the systems and evrything but eventaullty got something up and running. I used an accordion build for the bottom, and a category selector for the top.

## Alpine Decision

**User/client need:**  
they needed an easy way to find makers at Mission City Makers Market based on their interests or a specific maker's name. 

**Alpine directives used:**  
x-data, x-model, @click, x, x-text, x-show.

**Why Alpine was appropriate:**  
It provides simple, reactive interactions directly into the HTML without requiring a large JavaScript framework. It makes the maker directory interactive while still keeping the code relatively lightweight and easier to maintain.

## Preline Decision

**Preline component selected:**  
The accordion component was selected for the FAQ section.

**Problem it solves:**  
Visitors can't find answers to common questions about the market quickly.

**How you adapted it:**  
The accordion organizes information into expandable sections, allowing visitors to open the questions they want answered without having every answer displayed at once.

## Accessibility Notes

1. I used semantic HTML elements, labeled form controls, and real buttons so users can navigate and interact with the maker filters and FAQ accordion using a keyboard.
2. I used readable text, clear interface labels, and visible feedback, including an updated result count and a message when no makers match the search.

## Testing Notes

**Narrow viewport:** The layout is designed to fit mobile screens, with readable text and controls that allow users to search and filter makers without horizontal overflow.  
**Medium viewport:** The maker cards and FAQ section should remain readable and organized as the available screen width increases. 
**Wide viewport:** The page should use the available space effectively while keeping the maker listings and FAQ section organized and easy to navigate.  
**Keyboard testing:** The search field, craft category selector, clear filters button, and FAQ buttons should be reachable using the Tab key. The controls should be usable with the keyboard, and focus should remain visible during navigation.  
**Browser console:** Check the browser console for JavaScript errors, failed resource requests, or Alpine.js and Preline initialization issues. No console errors have been confirmed yet.

## Dependencies

**Alpine.js — how used:** Used to create a reactive maker directory with a search field, craft category filter, dynamically displayed maker cards, an updated result count, and a clear filters button.
**Preline UI — how used:** Used to implement an accordion component for the FAQ section, allowing visitors to expand and collapse answers to common market questions.  
**Tailwind CSS — how used:** Used to style the maker directory and FAQ accordion with utility classes for spacing, typography, borders, layout, and responsive behavior across mobile, tablet, and desktop screens.

## Official Documentation Used

- Alpine.js: https://alpinejs.dev/start-here
- Preline UI: Accordion: https://preline.co/plugins/html/accordion.html

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
