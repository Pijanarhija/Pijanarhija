/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ImageAnimationsProps {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  trigger?: string;
  start?: string;
}

const ImageAnimations = ({
  children,
  animateOnScroll = true,
  delay = 0,
  trigger,
  start = "top 90%",
}: ImageAnimationsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageElements = useRef<HTMLElement[]>([]);
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    if (containerRef.current) {
      gsap.set(containerRef.current, { visibility: "hidden" });
    }
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      imageElements.current = [];

      const images = containerRef.current.querySelectorAll(
        'img, [style*="background-image"], .image-element'
      );

      images.forEach((img) => {
        imageElements.current.push(img as HTMLElement);
      });

      if (imageElements.current.length === 0 && containerRef.current) {
        imageElements.current = [containerRef.current];
      }

      gsap.set(imageElements.current, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
      });

      gsap.set(containerRef.current, { visibility: "visible" });
      setIsReady(true);

      const animationProps = {
        clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1.5,
        stagger: 0.15,
        ease: "power4.out",
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(imageElements.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: trigger || containerRef.current,
            start: start,
            once: true,
          },
        });
      } else {
        gsap.to(imageElements.current, animationProps);
      }

      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (
            st.trigger ===
            (trigger ? document.querySelector(trigger) : containerRef.current)
          ) {
            st.kill();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, trigger, start],
    }
  );

  if (React.Children.count(children) === 1 && React.isValidElement(children)) {
    return React.cloneElement(children as any, {
      ref: containerRef,
      style: {
        visibility: isReady ? "visible" : "hidden",
        ...((children as any).props?.style || {}),
      },
    });
  }

  return (
    <div
      ref={containerRef}
      data-image-wrapper="true"
      style={{ visibility: isReady ? "visible" : "hidden" }}
    >
      {children}
    </div>
  );
};

export default ImageAnimations;
