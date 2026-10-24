# WebWorks Studio — Module 9
## Mission City Makers Market

This project combines three interaction layers on the supplied client page: an Alpine.js maker finder, a Splide.js maker carousel, and a Preline UI FAQ accordion. The original market content, visual direction, and image assets are retained.

## Start the Project

Open this folder in Visual Studio Code. In the terminal, run:

```bash
npm install
npm run dev
```

Keep the development command running. It copies Preline's runtime into `js/vendor/preline.js` and rebuilds Tailwind CSS as you edit. Preview `index.html` with VS Code Live Server.

Before committing or publishing, run:

```bash
npm run build
```

Commit the generated `css/output.css` and `js/vendor/preline.js`. Do not commit `node_modules/`.

## Project Summary

The page includes a maker exploration tool that filters makers by craft category and searches names, descriptions, and booth numbers. Matching maker cards appear in a responsive Splide carousel with previous/next arrows and pagination. The Visitor Questions section uses a Preline accordion so guests can open the answer they need without scanning every answer at once.

## Alpine Decision

**User/client need:** Visitors need to narrow four featured makers to the type of craft or keyword they are interested in.

**Alpine directives and state used:**
- `x-data` stores the maker data, selected category, search term, and computed filtered list.
- `x-model` keeps the category selector and search input synchronized with reactive state.
- `x-for` renders the matching maker cards from the supplied client content.
- `x-text` updates the result count and maker content.
- `x-show` displays the no-results message only when no makers match.
- `:src` and `:alt` bind each maker image and its text alternative.
- `@click` clears both filters using a semantic button.

**Why Alpine was appropriate:** This is a small, page-specific filtering interaction. Alpine provides reactive updates without adding a full application framework or recreating the FAQ component. It works alongside Splide, which handles carousel navigation and layout.

## Preline Decision

**Component selected:** Preline UI accordion.

**Problem it solves:** Visitors can expand the answer to one FAQ at a time and quickly locate information about children, pets, online purchases, and whether the event is indoors.

**How it was adapted:** The accordion uses the documented `hs-accordion`, `hs-accordion-toggle`, and `hs-accordion-content` structure. Tailwind utility classes match the page's deep teal, warm neutral, and white palette. Each button has an accessible name, `aria-expanded`, and `aria-controls`; each answer region is labelled by its corresponding toggle button. The first answer is open initially. The maker carousel is separately styled with Tailwind utilities and responsive Splide options.

## Accessibility Notes

1. The maker category selector and search input have visible, programmatically associated labels. The filter reset is a real button, and the result count updates inside an `aria-live="polite"` region.
2. Maker images retain meaningful alt text. When no makers match, an understandable status message appears instead of leaving the results area blank.
3. FAQ questions use semantic buttons with `aria-expanded` and `aria-controls`. Visible focus styling is retained for the interactive controls.
4. The layout uses responsive Tailwind grid utilities and does not rely on color alone to communicate the result.

## Testing Notes

**Narrow viewport:** Verify the category selector, search field, one-maker-at-a-time carousel, navigation arrows, pagination, and FAQ accordion fit without horizontal overflow.

**Medium viewport:** Verify the maker carousel displays two cards at a time, its arrows and pagination work, and the FAQ questions remain easy to activate.

**Wide viewport:** Verify the maker carousel displays up to three cards at a time, spacing remains consistent, and all four makers can be reached using the arrows or pagination.

**Keyboard testing:** Use Tab and Shift+Tab to reach the category selector, search field, clear-filters button, and FAQ toggles. Use the keyboard to change the selector and activate accordion buttons. Confirm the focus indicator remains visible.

**Browser console:** After `npm run build`, open the page and confirm there are no unresolved JavaScript, Alpine, Splide, Preline, or missing-asset errors.

**Verification status:** The code has been prepared, but the responsive browser and keyboard checks above must be run locally before submission. Record any fixes you make here.

## Dependencies

- **Alpine.js 3.17.1:** Loaded from the approved CDN in `index.html`; powers the custom maker filtering interaction.
- **Splide.js 4.1.4:** CSS and JavaScript loaded from jsDelivr in `index.html`; provides the responsive maker carousel, arrows, pagination, keyboard navigation, and breakpoints. `js/script.js` initializes Splide and refreshes it when Alpine filters change the slide list.
- **Preline UI 4.2.0:** Installed through npm; supplies the reusable FAQ accordion behavior. `npm run dev` or `npm run build` copies its browser runtime to `js/vendor/preline.js`.
- **Tailwind CSS 4.3.3:** Supplies utility-based page and component styling. `css/input.css` is the source stylesheet; `css/output.css` is generated by the Tailwind CLI.
- **Tailwind Forms 0.5.11:** Styles the native form controls used by the category selector and search field.

Versions are retained from the supplied starter's `package.json`.

## Integration Decisions

1. **Decision:** Use Alpine state to filter makers by both category and keyword.  
   **Documentation used:** [Alpine.js — Start Here](https://alpinejs.dev/start-here) and [Alpine.js — `x-model`](https://alpinejs.dev/directives/model).  
   **Reason:** The filtering state is local to this page and needs immediate feedback without a framework.

2. **Decision:** Render maker cards from a single Alpine data collection.  
   **Documentation used:** [Alpine.js — `x-for`](https://alpinejs.dev/directives/for) and [Alpine.js — `x-show`](https://alpinejs.dev/directives/show).  
   **Reason:** The card markup stays consistent and the interface can show a clear empty state when a search has no matches.

3. **Decision:** Use Splide.js to turn the maker collection into a responsive carousel rather than writing custom carousel navigation.  
   **Documentation used:** [Splide — Getting Started](https://splidejs.com/guides/getting-started/) and [Splide — Options](https://splidejs.com/guides/options/).  
   **Reason:** Splide provides tested carousel mechanics, keyboard navigation, arrows, pagination, and responsive breakpoints. A `MutationObserver` refreshes the carousel after Alpine filters the collection.

4. **Decision:** Use Preline's accordion structure for FAQs instead of building a custom accordion with Alpine.  
   **Documentation used:** [Preline UI documentation](https://preline.co/docs/) and [Preline UI components](https://preline.co/docs/components.html).  
   **Reason:** This demonstrates the difference between a small custom interaction and adapting a reusable component.

## Official Documentation Used

- [Alpine.js — Start Here](https://alpinejs.dev/start-here)
- [Alpine.js — Directives](https://alpinejs.dev/directives/)
- [Alpine.js — `x-model`](https://alpinejs.dev/directives/model)
- [Alpine.js — `x-for`](https://alpinejs.dev/directives/for)
- [Splide — Getting Started](https://splidejs.com/guides/getting-started/)
- [Splide — Options](https://splidejs.com/guides/options/)
- [Splide — Accessibility](https://splidejs.com/guides/accessibility/)
- [Preline UI — Documentation](https://preline.co/docs/)
- [Preline UI — Components](https://preline.co/docs/components.html)
- [Preline UI — Accessibility](https://preline.co/docs/accessibility.html)

## Splide Integration Notes

The supplied rubric's Splide requirements are addressed by the featured-maker carousel:

- Splide 4.1.4 CSS and JavaScript are loaded from jsDelivr.
- The maker collection uses Splide's `.splide`, `.splide__track`, `.splide__list`, and `.splide__slide` structure.
- `js/script.js` initializes Splide with responsive breakpoints, previous/next arrows, pagination, and focused keyboard navigation.
- Alpine still owns search and category filtering. A `MutationObserver` refreshes the Splide instance when the list changes and destroys it when there are no matching slides.
- Maker names, descriptions, images, and booth numbers remain in the carousel.

Because Splide is loaded from a CDN, an internet connection is required for its CSS and JavaScript. Test the live page after `npm install` and `npm run dev` to confirm the CDN files load and no console errors appear.

## Final Checklist

- [ ] `npm install` completes.
- [ ] `npm run build` completes.
- [ ] Maker category filtering and keyword search work.
- [ ] Clear filters resets the controls and results.
- [ ] Splide carousel mounts without console errors.
- [ ] Previous/next arrows and pagination work.
- [ ] Alpine filtering updates the carousel correctly, including the no-results state.
- [ ] FAQ accordion opens and closes with mouse and keyboard.
- [ ] Narrow, medium, and wide layouts have been checked.
- [ ] Browser console has no unresolved errors.
- [ ] `css/output.css` and `js/vendor/preline.js` contain generated code.
- [ ] Splide CDN CSS and JavaScript load successfully in the browser.
- [ ] `node_modules/` is not committed.
- [ ] README testing notes reflect the tests actually performed.
- [ ] Project is committed and published as required by the instructor.
