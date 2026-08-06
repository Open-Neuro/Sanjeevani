## 2025-05-14 - [GSAP Focus Management]
**Learning:** For components with GSAP entrance animations, standard React `useEffect` focus management can trigger before the element is visually stable or even visible, leading to a jarring user experience or focus being lost.
**Action:** Use GSAP's `onComplete` callback to trigger focus on the first interactive element. This ensures the user is ready to interact exactly when the animation finishes.

## 2025-05-14 - [Redundant Prop Cleanup]
**Learning:** When moving navigation logic (like a sticky Navbar) to a higher-level layout component, section-level props (like `onMenuClick` or `onBookDemo`) often become redundant and should be cleaned up to prevent linting errors and maintain a clean API.
**Action:** Always audit child components for unused event handlers after lifting state or moving layout components.
