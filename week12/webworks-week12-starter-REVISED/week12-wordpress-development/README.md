# Week 12: Customize the Experience — WordPress Development

**Client:** Southtown Community Arts  
**Role:** Junior WordPress Developer

## Page Link
[https://susane38.sg-host.com/]

## Project Overview

Briefly summarize how you customized the existing Week 11 CMS without making routine content harder for the client to maintain.

[I used the "style" tab to do most of the client specs like; pallete, typography, and hiearchy. Then I used the "additional CSS" tab to include a nice Hover state to the header.]

---

# Customization Decisions

Document the four required decisions below.

## 1. Global Design System

**Requirement:**  
[Palette, Typograph, Interface, and Button states]

**Location:**  
[Body, Header, Buttons, and Links(Global)]

**Change:**  
[I changed the palette to better fit the brand specs, I also changed the header and body fonts. I also updated the diffirent states for the buttons.]

**Why this level:**  
[Global edits where the better solution, because not only did it easy the work load on me, but it also allows for non-coders to come add things, with out doing any extra styling.]

**QA:**  
[I tested the live site for a clean color palette, working hover/focus states, and proper flexing for diffirent viewports.]

---

## 2. Branded Reusable Pattern

**Pattern:**  
[Southtown-Program Callout.]

**Change:**  
[I added an optional image/media section for the client to easliy access and alter.]

**Reuse:**  
[I re-used this pattern on all pages besides News]

**Editor value:**  
[This gives them a pre-built template that can be pasted anywhere, and altered slightly to better fit the CTA]

---

## 3. Site-Wide Structure Customization

**Shared area:**  
[Header]

**Change:**  
[I changed the overall layout of the Header & the Navagation bar]

**Why this level:**  
[This was a design decision that was made to better represent the page, and that should be done on all pages]

**QA:**  
[I checked all pages]

---

## 4. Controlled Development-Level Modification

Complete **one** option.

**Option used:**  
[Targeted CSS]

**Location:**  
[It lives in the "additional CSS' Tab]

**Code / configuration snippet:**

```.wp-block-site-title a {
    display: inline-block;
    transition: transform 0.3s ease;
}
```

**Reason:**  
[A visable hover state was not accomplishable through the styles tab, so I used targeted CSS to make a working hover state.]

**Documentation:**  
[hovering over the title]

**QA:**  
[I made sure there was no additional style effects or features, that would contradict my added CSS]

---

# Visitor + Editor QA

## Visitor Experience

- [x] I tested narrow and wide viewport behavior.
- [x] I checked visual consistency on more than one page.
- [x] I checked text/link/button contrast.
- [x] I verified visible keyboard focus.
- [x] I tested navigation and links.
- [x] I checked that the brand system is consistent rather than page-specific.

### Visitor QA Notes
[Briefly describe one issue you found or one important verification you made.]

## Editor Experience

- [x] Routine content is still editable through WordPress.
- [x] The branded pattern is understandable to reuse/edit.
- [x] My customization did not move ordinary client content into code.
- [x] I performed one temporary routine content edit, previewed it, and restored the original content.
- [x] The site remained visually coherent after the editor test.

### Editor QA Notes
[I tested the whole page to ensure all site wide changes were pushed site wide, as well as checking to ensure all old properties like buttons still worked as normal]

---

# Evidence

Use the exact filenames below.

## Customized Home

![Customized Home page](evidence/home-customized.png)

## Customized Programs

![Customized Programs page](evidence/programs-customized.png)

## Branded Reusable Pattern

![Branded reusable pattern](evidence/branded-pattern.png)

## Responsive / Mobile View

![Responsive customized site](evidence/mobile-customized.png)

## Editor Maintainability Test

![Editor maintainability evidence](evidence/editor-maintainability.png)

---

# Maintainability Reflection

Write approximately **75–100 words** responding to:

> Give one example of a change you intentionally handled globally and one change you intentionally left as editable content. How does that separation help Southtown Community Arts maintain the site without losing design consistency?

[I handled the color palette, typography, button states, and header styling globally through WordPress Styles to keep the website consistent across all pages. I left the page text, images, and program descriptions as editable content so Southtown Community Arts can make routine updates without needing to change code. I also created a reusable Program Callout Pattern to simplify future updates. Separating global design from editable content makes the website easier to maintain while allowing the client to update information without losing the established brand identity.]

---

# Final Handoff Check

- [x] I continued the Week 11 Southtown site rather than rebuilding it.
- [x] I applied the approved palette and typography direction systematically.
- [x] I used global controls for global decisions.
- [x] I created or significantly customized one branded reusable pattern.
- [x] I made one appropriate site-wide structure customization.
- [x] I completed exactly one controlled development-level modification.
- [x] I did not add PHP, plugins, custom blocks, or a child-theme build for this assignment.
- [x] Visitor and editor QA are complete.
- [x] All five evidence screenshots display in this README.
- [x] I completed the maintainability reflection.
- [x] I committed and pushed the Week 12 handoff folder.
