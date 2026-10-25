# Start Here — Week 10

## Your Job

This project is already configured as a small React/Vite application.

Your Week 10 task is to focus on:

1. React components
2. Props
3. List rendering
4. Stable keys
5. Events
6. One small piece of state

Do **not** redesign the interface or replace the supplied project setup.

---

## Before You Begin: Node Requirement

This starter uses Vite 8.

You need a modern Node.js installation that satisfies the project requirement:

```text
Node.js 20.19+ (or a newer supported Node release)
```

If `npm install` reports that your Node version is too old, update Node before continuing.

---

## Setup

1. Place this entire `week10-react` folder inside your existing public `webworks-studio` repository.
2. Open the `week10-react` folder in Visual Studio Code.
3. Open the VS Code terminal.
4. Confirm the terminal is inside the Week 10 folder.
5. Run:

```text
npm install
```

6. Then run:

```text
npm run dev
```

7. Open the local URL shown by Vite.
8. Confirm the starter site loads before editing.

---

## Files You Will Use Most

```text
src/App.jsx
src/components/ServiceCard.jsx
src/styles.css
README.md
```

Most of your work belongs in `App.jsx` and `ServiceCard.jsx`.

---

## Follow the TODOs

### In `App.jsx`

You will:

- create selected-category state;
- create filtered service data;
- connect filter buttons with React events;
- communicate the selected filter with `aria-pressed`;
- replace repeated card JSX with `map()`.

### In `ServiceCard.jsx`

You will:

- create one reusable functional component;
- receive service information through props;
- render semantic service-card markup.

---

## Important Git Rule

The `.gitignore` file already excludes:

```text
node_modules
dist
```

Do not remove those lines.

`node_modules` can contain thousands of generated dependency files and does not belong in your course repository.

---

## Before You Submit

Run:

```text
npm run build
```

The build must complete without errors.

Then complete `README.md`, commit, push, and submit the direct Week 10 GitHub folder link in Canvas.

Refer to the Week 10 Canvas assignment for complete requirements.


## Working in GitHub Codespaces (alternative setup)

If you cannot install software on your computer, follow the separate **Module 10: GitHub Codespaces Alternative Setup** page in Canvas. This starter includes `.devcontainer/devcontainer.json` to select a Node.js 22 development environment and forward Vite port 5173. Node.js and npm run inside Codespaces, not on your school computer.

From the folder containing `package.json`, run `node -v`, `npm -v`, `npm install`, and `npm run dev -- --host 0.0.0.0`. Open the forwarded port 5173 in the Ports tab. The assignment TODOs and grading criteria are identical for local VS Code and Codespaces.
