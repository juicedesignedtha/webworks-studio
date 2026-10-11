# Week 8 — JavaScript Interaction Handoff
## Hill Country Trail Guide

**Primary User:** Maya Torres

## Required Behaviors
1. Accessible trail-difficulty disclosure
2. Hike-planning form validation/submission feedback

---

## JavaScript Decisions

### Decision 1 — DOM Selection
What elements did your script need to select, and why?

[<div id="difficulty-panel" class="difficulty-panel" hidden> was selected, because it Is the hidden form that shows the information need.
    <div class="field"> was selected, because it allowed the JavaScript to govern all of the planner sections at once.]

### Decision 2 — Event Handling
What events did you listen for? Why were those events appropriate?

[The two events java is listening for is "Click" and "Change".]

### Decision 3 — State / DOM Update
How did the interface change after user action?

[upon click of the button, the difficulty information is Shown, and upon re-click the information is hidden.
Upon change when the plan review button is clicked; if the form is complete, you recieve completion feedback. However, if the form is incomplete you will be lead to complete, incomplete fields.]

### Decision 4 — Accessibility
How did you preserve or improve keyboard/accessibility behavior?

[To ensure that I presevered keyboard behavior, I made sure to stay away from all in-line style]

---

## Testing Notes

### Difficulty Disclosure
- Mouse: The mouse is useful for button clicking.
- Keyboard: The keyboard is both useful for scrolling, selection, and clicking buttons.
- `aria-expanded`: They closed and opened very smoothly.
- Console errors: I did not encounter any issues.

### Planning Form
- Empty/invalid submission: It only tells you to complete one field at a time, however it does clearly display incompletion.
- Valid submission: The feedback is very explanitory.
- Keyboard: The keyboard is useful to selection and selection navigation.
- Console errors: I did not encounter any.

---

## Live Site
[(https://juicedesignedtha.github.io/webworks-studio/)]
