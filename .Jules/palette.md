## 2025-06-09 - [Modal Accessibility & Focus Management]
**Learning:** For immersive React apps using GSAP for modal transitions, accessibility (ARIA roles) and focus management must be handled explicitly. Standard HTML `autofocus` often fails due to the modal being animated in or initially hidden.
**Action:** Always implement `role="dialog"`, `aria-modal="true"`, and use a `useRef` with a timed focus (or GSAP `onComplete`) to ensure screen readers and keyboard users are properly directed when a modal opens.

## 2025-06-09 - [Architecture Consistency]
**Learning:** In a sticky-header architecture, ensure that section components don't hold onto legacy props (like `onMenuClick`) if the Navbar has been hoisted to a global layout level.
**Action:** Regularly audit prop-drilling paths when moving layout components to higher levels to avoid "dead" props and maintain code cleanliness.
