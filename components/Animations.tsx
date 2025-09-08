"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

interface AnimationsProps {
	children: React.ReactNode;
	animateOnScroll?: boolean;
	delay?: number;
}

const Animations = ({
	children,
	animateOnScroll = true,
	delay = 0,
}: AnimationsProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isReady, setIsReady] = useState(false);

	// Hide content initially with CSS
	useLayoutEffect(() => {
		if (containerRef.current) {
			gsap.set(containerRef.current, { visibility: "hidden" });
		}
	}, []);

	useGSAP(
		() => {
			if (!containerRef.current) return;

			// Set initial state and make visible
			gsap.set(containerRef.current, {
				opacity: 0,
				y: 50,
				visibility: "visible",
			});
			setIsReady(true);

			const animationProps = {
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power4.out",
				delay: delay,
			};

			if (animateOnScroll) {
				gsap.to(containerRef.current, {
					...animationProps,
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top 90%",
						once: true,
					},
				});
			} else {
				gsap.to(containerRef.current, animationProps);
			}
		},
		{ scope: containerRef, dependencies: [animateOnScroll, delay] },
	);

	if (React.Children.count(children) === 1 && React.isValidElement(children)) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return React.cloneElement(children as any, {
			ref: containerRef,
			style: { visibility: isReady ? "visible" : "hidden" },
		});
	}

	return (
		<div
			ref={containerRef}
			data-copy-wrapper="true"
			style={{ visibility: isReady ? "visible" : "hidden" }}
		>
			{children}
		</div>
	);
};

export default Animations;
