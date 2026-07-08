## 2026-07-08 - [Synchronized Modal Focus]
**Learning:** For components with GSAP entrance animations, standard React 'autoFocus' can be unreliable or jarring. Synchronizing focus with GSAP's 'onComplete' callback ensures a smooth transition and reliable keyboard accessibility.
**Action:** Always use GSAP's 'onComplete' or similar animation hooks to trigger focus on modal inputs rather than relying on initial render auto-focus.
