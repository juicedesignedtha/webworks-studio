# Week 12: Customize the Experience — WordPress Development

**Client:** Southtown Community Arts  
**Role:** Junior WordPress Developer

## Project Overview

Briefly summarize how you customized the existing Week 11 CMS without making routine content harder for the client to maintain.

[Write 2–3 sentences here.]

---

# Customization Decisions

Document the four required decisions below.

## 1. Global Design System

**Requirement:**  
[Which Southtown brand requirements were site-wide?]

**Location:**  
[Global Styles / theme-level controls]

**Change:**  
[What did you change?]

**Why this level:**  
[Why was a global solution better than editing pages individually?]

**QA:**  
[What did you test after the global change?]

---

## 2. Branded Reusable Pattern

**Pattern:**  
[Name the pattern.]

**Change:**  
[What visual/system changes did you make?]

**Reuse:**  
[Where did you reuse or verify the pattern?]

**Editor value:**  
[How does this help a future editor update content without rebuilding the design?]

---

## 3. Site-Wide Structure Customization

**Shared area:**  
[Header, footer, navigation, or other shared structure.]

**Change:**  
[What did you customize?]

**Why this level:**  
[Why did the change belong in shared site structure rather than on one Page?]

**QA:**  
[Which pages did you check afterward?]

---

## 4. Controlled Development-Level Modification

Complete **one** option.

**Option used:**  
[theme.json OR targeted CSS]

**Location:**  
[Where the modification lives in the supplied environment.]

**Code / configuration snippet:**

```text
Paste only the small relevant snippet here.
```

**Reason:**  
[What legitimate requirement could not be solved cleanly through the available editor/global controls?]

**Documentation:**  
[Which official WordPress reference helped you understand the change?]

**QA:**  
[How did you verify the change worked without creating new problems?]

---

# Visitor + Editor QA

## Visitor Experience

- [ ] I tested narrow and wide viewport behavior.
- [ ] I checked visual consistency on more than one page.
- [ ] I checked text/link/button contrast.
- [ ] I verified visible keyboard focus.
- [ ] I tested navigation and links.
- [ ] I checked that the brand system is consistent rather than page-specific.

### Visitor QA Notes
[Briefly describe one issue you found or one important verification you made.]

## Editor Experience

- [ ] Routine content is still editable through WordPress.
- [ ] The branded pattern is understandable to reuse/edit.
- [ ] My customization did not move ordinary client content into code.
- [ ] I performed one temporary routine content edit, previewed it, and restored the original content.
- [ ] The site remained visually coherent after the editor test.

### Editor QA Notes
[Briefly describe the update you tested and what you verified.]

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

[Write your response here.]

---

# Final Handoff Check

- [ ] I continued the Week 11 Southtown site rather than rebuilding it.
- [ ] I applied the approved palette and typography direction systematically.
- [ ] I used global controls for global decisions.
- [ ] I created or significantly customized one branded reusable pattern.
- [ ] I made one appropriate site-wide structure customization.
- [ ] I completed exactly one controlled development-level modification.
- [ ] I did not add PHP, plugins, custom blocks, or a child-theme build for this assignment.
- [ ] Visitor and editor QA are complete.
- [ ] All five evidence screenshots display in this README.
- [ ] I completed the maintainability reflection.
- [ ] I committed and pushed the Week 12 handoff folder.
