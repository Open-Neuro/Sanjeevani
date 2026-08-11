# Palette Journal 🎨

## 2025-02-24 - GSAP Modal Focus Management
**Learning:** For modals that use GSAP entrance animations, triggering auto-focus too early (e.g. synchronously in `useEffect`) can conflict with the scale/opacity transitions, causing focus loss or breaking screen reader announcements. Syncing focus specifically with GSAP's `onComplete` callback ensures the element is visible, positioned, and interactive before being focused.
**Action:** Always utilize the GSAP `onComplete` hook of the final entrance animation step to programmatically focus the first interactive element.

## 2025-02-24 - Dynamic Key Modals for Clean State Reset
**Learning:** Closing and reopening a form modal often leaves previous input values, validation errors, and submission success states behind. Using stateful resets in `useEffect` can lead to stale state updates or trigger ESLint rules against synchronous updates.
**Action:** Pass a dynamic `key` prop (e.g., `key={isOpen ? "open" : "closed"}`) to the modal component from the parent. This forces React to mount a fresh component instance each time the modal opens, guaranteeing a clean state.
