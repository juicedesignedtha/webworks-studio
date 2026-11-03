# Week 10: Meet React — Component-Based Web Development

## Project Overview

**Role:** Junior Front-End Developer  
**Project:** Community Connect React Service Directory

I refactored the repeated service-card markup into one reusable `ServiceCard` component. The service information is passed into that component through props, and the cards are generated from the supplied service array. I also added category filtering with React state while keeping the supplied interface and styling intact.

---

# React Decisions

## Decision 1

**React Concept:** Components and props

**Used For:**  
I completed `src/components/ServiceCard.jsx` as a reusable component. It receives `categoryLabel`, `title`, `description`, and `detail` as props from `App.jsx`.

**Why It Helps:**  
One card structure can display every service without repeating the same JSX. If the card layout needs to change later, it can be updated in one component.

## Decision 2

**React Concept:** List rendering and stable keys

**Used For:**  
I used `filteredServices.map()` in `App.jsx` to render a `ServiceCard` for each service object. Each card uses the supplied `service.id` as its React `key`.

**Why It Helps:**  
The interface is generated directly from the service data, so adding or updating a service does not require manually duplicating card markup. Stable IDs help React track each item in the rendered list.

## Decision 3

**React Concept:** State and event handling

**Used For:**  
I used `useState()` to store the selected category. Each native filter button updates that state with an `onClick` handler. The selected category determines which services are included, and `aria-pressed` communicates the active button state.

**Why It Helps:**  
React updates the displayed cards when the selected category changes. The same state also keeps the visual and programmatic selected states synchronized.

---

# React Reflection

React made the service directory more organized because I could create one reusable component and pass it different information instead of writing the same card markup repeatedly. Using state also made filtering easier because React updates the displayed services when a button is selected. The more complex part is learning how components, props, state, and JSX work together, along with keeping track of keys and accessibility. I can see component and state thinking being useful on professional websites with repeated content and interactive filters.

---

# Testing Notes

- [ ] `npm install` completed successfully
- [ ] `npm run dev` runs the project
- [x] ServiceCard is reusable
- [x] Services render from the supplied array
- [x] Every rendered service uses a stable key
- [x] All filter is implemented
- [x] Health filter is implemented
- [x] Housing filter is implemented
- [x] Community filter is implemented
- [x] Active filter has a visual state through the supplied CSS
- [x] Active filter uses `aria-pressed`
- [ ] Keyboard interaction tested in the browser
- [ ] Browser console checked for unresolved warnings/errors
- [ ] `npm run build` completes successfully

---

# Final Handoff Check

- [x] My project folder is named `week10-react`
- [x] I used the supplied React/Vite project
- [x] `ServiceCard.jsx` exists
- [x] I used props
- [x] I used `map()`
- [x] I used stable keys
- [x] I used `useState()`
- [x] I used React event handling
- [x] I used native buttons for filters
- [x] `node_modules` is excluded by `.gitignore`
- [x] My README is complete
- [ ] I committed and pushed the completed project
