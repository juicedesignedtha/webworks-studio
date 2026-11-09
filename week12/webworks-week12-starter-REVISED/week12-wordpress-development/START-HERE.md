# Start Here — Week 12
## Customize the Experience: WordPress Development

**Client:** Southtown Community Arts  
**Role:** Junior WordPress Developer  
**Professional question:** How do we make a CMS-driven site feel custom without making it difficult to maintain?

Week 12 continues the **existing Southtown Community Arts WordPress site from Week 11**.

Do **not** rebuild the content architecture. The Pages, News Post, navigation, and client-editable content from Week 11 remain the foundation.

This week you are customizing the **system around that content**.

---

## Week 12 Workflow

**Audit → Decide where it belongs → Customize globally → Reuse structure → Add one targeted development-level modification only if needed → Test visitor → Test editor → Document → Handoff**

Before changing anything, ask:

> Is this requirement local, global, reusable, site-wide, or something the current WordPress controls cannot reasonably solve?

---

## Included in This Starter

```text
week12-wordpress-development/
├── START-HERE.md
├── BRAND-SPEC.md
├── README.md
├── planning/
│   └── CUSTOMIZATION-AUDIT.md
└── evidence/
    └── .gitkeep
```

There is intentionally **no child-theme starter, no functions.php task, and no parent-theme editing requirement**.

Your actual customization work happens in the instructor-supplied WordPress environment.

---

## Required Production Work

### 1. Global Design System
Translate the supplied Southtown brand direction into appropriate **Global Styles / theme-level controls** in the course environment.

Your global work should address:
- the assigned color palette;
- heading/body typography direction;
- button or link treatment where supported;
- one appropriate spacing, layout, or content-width decision.

Do not manually restyle individual pages when the decision is site-wide.

### 2. Branded Reusable Pattern
Use the existing Week 11 reusable content as your starting point.

Create or significantly customize one reusable branded pattern so that:
- the structure remains reusable;
- the visual treatment reflects Southtown's brand;
- content can be replaced without rebuilding the layout;
- the pattern remains understandable to a future editor.

### 3. One Site-Wide Structure Customization
Make **one** appropriate shared-structure change using the Site Editor.

Examples may include a header, footer, navigation placement, or another repeated site-wide structural area.

Choose a change that genuinely belongs at the shared level.

### 4. One Controlled Development-Level Modification
Complete **one — not two** — controlled development-level modification.

Depending on the WordPress environment, use either:
- a small `theme.json` adjustment; **OR**
- one small targeted CSS rule.

Do not add PHP, plugins, custom blocks, or a child-theme build just to make the project feel more advanced.

Document:
- what you changed;
- where it lives;
- why the editor/global controls were not enough;
- how you tested it.

### 5. Visitor + Editor QA
Test both experiences.

**Visitor checks**
- responsive behavior;
- visual consistency;
- contrast and readability;
- visible focus;
- navigation and links;
- brand presentation.

**Editor checks**
- routine content remains editable;
- the branded pattern remains understandable;
- a simple content update does not require code;
- site-wide customization does not interfere with normal editing.

Perform one temporary routine content edit, preview it, verify the design remains intact, and restore the original content.

---

## Before You Begin

1. Open your Week 11 Southtown Community Arts WordPress site.
2. Confirm Home, Programs, About, the News Post, navigation, and reusable pattern still exist.
3. Read `BRAND-SPEC.md`.
4. Complete the planning questions in `planning/CUSTOMIZATION-AUDIT.md`.
5. Make global/system decisions before styling individual blocks.
6. Use official WordPress documentation when you need current implementation details.
7. Keep the scope controlled.

---

## GitHub Handoff

Your WordPress site remains in the instructor-supplied CMS environment.

GitHub is your **professional handoff record**.

Complete `README.md`, add the required evidence screenshots, commit the Week 12 folder, push it to your public `webworks-studio` repository, and submit the direct Week 12 folder link in Canvas.

Do not upload a ZIP to Canvas.
