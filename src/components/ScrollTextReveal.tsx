"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function splitTextToChars(el: Element) {
  const fragment = document.createDocumentFragment();

  el.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.className = "str-char";
        fragment.appendChild(span);
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const clone = node.cloneNode(false) as Element;
      splitInner(node as Element, clone);
      fragment.appendChild(clone);
    }
  });

  el.innerHTML = "";
  el.appendChild(fragment);
}

function splitInner(source: Element, target: Element) {
  source.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.className = "str-char";
        target.appendChild(span);
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const clone = node.cloneNode(false) as Element;
      splitInner(node as Element, clone);
      target.appendChild(clone);
    }
  });
}

interface Props {
  selectors: string[];
  containerSelector?: string;
}

export default function ScrollTextReveal({ selectors, containerSelector }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to ensure DOM is rendered after route change
    const timer = setTimeout(() => {
      const root = containerSelector
        ? document.querySelector(containerSelector)
        : document.body;
      if (!root) return;

      const elements = root.querySelectorAll(selectors.join(","));
      const triggers: ScrollTrigger[] = [];

      elements.forEach((el) => {
        if (el.querySelector(".str-char")) return;

        const computedColor = getComputedStyle(el).color;

        splitTextToChars(el);

        const chars = el.querySelectorAll(".str-char");

        const tween = gsap.fromTo(
          chars,
          { color: computedColor },
          {
            color: "#ffffff",
            stagger: 0.5,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "bottom 30%",
              scrub: true,
            },
          }
        );

        if (tween.scrollTrigger) {
          triggers.push(tween.scrollTrigger);
        }
      });

      return () => {
        triggers.forEach((st) => st.kill());
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, selectors, containerSelector]);

  return null;
}
