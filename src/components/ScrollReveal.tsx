"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/*
 * CSS selectors that get the scroll-triggered scale+fade animation.
 * Mirrors wibify.agency's ScrollAnimations component:
 *   gsap.from(els, { scale:.85, opacity:0, duration:.5, ease:"power2.inOut",
 *     stagger:.08, scrollTrigger:{ start:"top 90%", end:"bottom 10%",
 *     toggleActions:"play reverse play reverse" } })
 */
const ANIMATED_SELECTORS = [
  /* Titles / eyebrows */
  ".section-head",
  ".works-header",
  ".tools-header",
  ".partners-content",
  ".cta-eyebrow",
  ".cta-title",
  ".about-eyebrow",
  ".about-name",
  /* Cards / items */
  ".work-item",
  ".process-card",
  ".expertise-grid",
  ".home-faq-item",
  ".faq-item",
  ".blog-card",
  ".portfolio-card",
  /* Misc sections */
  ".about-text",
  ".about-stats",
  ".cta-form-card",
  ".cta-sub",
  ".cta-meta",
  ".kontakt-hours-grid",
  ".faq-tabs",
  /* Page hero sub-elements */
  ".page-hero-eyebrow",
  ".page-hero-title",
  ".page-hero-lede",
];

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap").default.context> | null = null;
    let cancelled = false;

    const init = async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        ANIMATED_SELECTORS.forEach((selector) => {
          const els = gsap.utils.toArray<HTMLElement>(selector);
          if (!els.length) return;

          /* Grid containers use translateY instead of scale to avoid
             visual gap misalignment */
          const isGrid = selector === ".expertise-grid";
          const fromProps = isGrid
            ? { y: 40, opacity: 0 }
            : { scale: 0.85, opacity: 0 };

          if (els.length > 1) {
            gsap.from(els, {
              ...fromProps,
              duration: 0.5,
              ease: "power2.inOut",
              stagger: 0.08,
              scrollTrigger: {
                trigger: els[0],
                endTrigger: els[els.length - 1],
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse",
              },
            });
          } else {
            gsap.from(els[0], {
              ...fromProps,
              duration: 0.5,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: els[0],
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse",
              },
            });
          }
        });

        /* --- Number count-up on stats --- */
        gsap.utils
          .toArray<HTMLElement>(".hero-stat-num, .about-stat strong")
          .forEach((el) => {
            const raw = el.textContent?.trim() ?? "";
            const match = raw.match(/^([\d.,]+)/);
            if (!match) return;

            const numStr = match[1];
            const suffix = raw.slice(numStr.length);
            const decimals = (numStr.split(/[.,]/)[1] ?? "").length;
            const target = parseFloat(numStr.replace(",", "."));
            if (Number.isNaN(target)) return;

            const obj = { val: 0 };
            const fmt = (v: number) =>
              decimals === 0
                ? Math.round(v).toString()
                : v.toFixed(decimals);

            el.textContent = fmt(0) + suffix;

            gsap.to(obj, {
              val: target,
              duration: 1.8,
              ease: "expo.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reset",
              },
              onUpdate: () => {
                el.textContent = fmt(obj.val) + suffix;
              },
              onComplete: () => {
                el.textContent = raw;
              },
            });
          });

        /* --- Hero parallax --- */
        const hero = document.querySelector(".hero");
        if (hero) {
          gsap.to(".hero-bg-light", {
            yPercent: -18,
            xPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
          gsap.to(".hero-bg-light-2", {
            yPercent: -28,
            xPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
          gsap.to(".hero-content", {
            yPercent: -10,
            opacity: 0.15,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom 35%",
              scrub: 1,
            },
          });
        }
      });

      ScrollTrigger.refresh(true);
    };

    /* Small delay to let the DOM settle after navigation */
    const timer = setTimeout(init, 80);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
