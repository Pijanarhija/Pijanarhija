"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function LenisProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		// Initialize Lenis
		const lenis = new Lenis({
			duration: 1.2, // Animation duration in seconds
			easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)), // Custom easing function
			smoothWheel: true, // Enable smooth scrolling for mouse wheel
			touchMultiplier: 2, // Touch scroll sensitivity (optional)
		});

		// Animation frame function
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		// Start the animation loop
		requestAnimationFrame(raf);

		// Cleanup function
		return () => {
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}
