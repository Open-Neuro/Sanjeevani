## 2025-05-14 - Focus Synchronization with GSAP Entrance Animations
**Learning:** For components with GSAP entrance animations, using `useEffect` for auto-focus can be unreliable if the element is still animating or has its visibility/opacity toggled by GSAP. Synchronizing focus within the `onComplete` callback ensures the element is ready for interaction.
**Action:** Always use GSAP's `onComplete` to trigger `.focus()` on the primary interactive element of an animated modal or panel.

## 2025-05-14 - Simulated Network Delay for UX Perception
**Learning:** Instant form transitions to success states can be jarring and lead users to wonder if the submission actually happened. A small simulated delay (e.g., 800ms) provides enough time for the user to perceive the 'loading' state, increasing confidence in the system's action.
**Action:** Implement a `isSubmitting` state with a brief timeout and visual feedback (spinner/disabled button) even for fast API endpoints to improve user trust.
