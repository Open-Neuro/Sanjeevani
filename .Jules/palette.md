# Palette Journal - Sanjeevani Care

## 2025-02-18 - GSAP Focus Synchronization
**Learning:** For components with GSAP entrance animations (like `DemoModal`), calling `.focus()` on interactive elements immediately or using arbitrary timeouts can lead to incorrect focus placement or layout thrashing. Since GSAP controls the render position and visual appearance dynamically, focus must be strictly synchronized with the animation's conclusion to ensure the screen reader and browser correctly register active element location.
**Action:** Always favor GSAP's built-in `onComplete` callback over inline timeouts or simple `useEffect` dependencies for triggering `.focus()` on animated elements.

## 2025-02-18 - High-Fidelity Form Simulation Delays
**Learning:** High-fidelity transition overlays and modal submission components often resolve too fast for human users to register their "loading" or "submitting" states. A submission that resolves instantly can feel jarring or leave the user uncertain if the form was actually processed or if it was a frontend-only glitch. Adding a simulated network delay (e.g., 800ms) with a disabled state and text feedback helps users perceive state changes and feel confident in the interaction.
**Action:** Implement a brief simulated delay (e.g., 800ms) in forms where animations govern transition to a success state to provide visual validation and prevent duplicate submissions.

## 2025-02-18 - Dialog Accessibility and Form Associations
**Learning:** Modal components need to explicitly declare their role as `dialog` and link their visual title using `aria-labelledby` to make them perceivable to screen reader users. Additionally, explicit ID-based associations between labels and fields (`htmlFor` -> `id`) and explicit `aria-required="true"` properties for mandatory fields are essential to bypass strict mode locator violations in Playwright and support modern accessibility guidelines.
**Action:** Ensure all modals have `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and fully-associated form fields to prevent testing and accessibility regressions.
