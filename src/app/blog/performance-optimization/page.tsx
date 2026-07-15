import Link from "next/link";

export default function PerformanceOptimizationPost() {
  return (
    <main>
      <section className="post-hero">
        <div className="post-hero-cover">
          <div className="post-hero-cover-fade" />
        </div>
        <div className="post-hero-inner">
          <Link href="/blog" className="post-back">&larr; Back to blog</Link>
          <div className="post-hero-meta">
            <span className="post-hero-cat">Performance</span>
            <span className="post-hero-divider" />
            <span>Apr 10, 2026</span>
            <span className="post-hero-divider" />
            <span>10 min read</span>
          </div>
          <h1 className="post-hero-title">Performance Optimization: From 4s to 0.8s in 5 Steps</h1>
          <p className="post-hero-lede">
            Last quarter we took a client site from a painful 4-second load to sub-second
            performance without a full rebuild. Here are the exact steps, in order of impact.
          </p>
          <div className="post-hero-author">
            <span className="post-hero-author-avatar">A</span>
            <div>
              <div className="post-hero-author-name">Agency 47 Team</div>
              <div className="post-hero-author-role">Engineering</div>
            </div>
          </div>
        </div>
      </section>

      <section className="post-content">
        <div className="post-content-inner">
          <div className="article-body">
            <p className="article-p">
              Performance optimization is the highest-ROI work we do for clients. Every second
              of load time correlates directly with conversion rates, bounce rates, and user
              satisfaction. Here&apos;s our exact playbook from a recent project.
            </p>

            <h2 className="article-h2">Step 1: Image Optimization (saved 1.2s)</h2>
            <p className="article-p">
              The single biggest win. We converted all images to WebP/AVIF with proper
              srcset attributes, added lazy loading below the fold, and implemented blur
              placeholders. Total image payload dropped from 4.2MB to 380KB.
            </p>
            <ul className="article-ul">
              <li>Replaced all PNG/JPEG with next-gen formats</li>
              <li>Added width/height attributes to prevent layout shift</li>
              <li>Implemented a CDN with automatic format negotiation</li>
              <li>Set up proper cache headers for static assets</li>
            </ul>

            <h2 className="article-h2">Step 2: JavaScript Audit (saved 0.9s)</h2>
            <p className="article-p">
              The site loaded 1.8MB of JavaScript on every page. After auditing, we found
              that 60% was unused — analytics scripts loaded too early, libraries included
              for one feature, and polyfills for browsers no one uses anymore.
            </p>
            <p className="article-p">
              We deferred non-critical scripts, removed dead code, code-split by route,
              and replaced heavy libraries with lighter alternatives.
            </p>

            <h2 className="article-h2">Step 3: Critical CSS Extraction (saved 0.5s)</h2>
            <p className="article-p">
              A single 280KB CSS file was render-blocking the entire page. We extracted
              critical above-the-fold styles into an inline block and deferred the rest.
              First Contentful Paint improved dramatically.
            </p>

            <h2 className="article-h2">Step 4: Server-Side Improvements (saved 0.4s)</h2>
            <p className="article-p">
              TTFB was 800ms — unacceptable. We implemented edge caching, moved static
              pages to CDN, added stale-while-revalidate headers for dynamic content,
              and optimized database queries that were running on every request.
            </p>

            <h2 className="article-h2">Step 5: Font Loading Strategy (saved 0.2s)</h2>
            <p className="article-p">
              Custom fonts were blocking rendering. We switched to font-display: swap,
              preloaded the primary font, subset the character set to reduce file size,
              and used system font fallbacks that closely match the custom font metrics.
            </p>

            <div className="article-callout">
              <div className="article-callout-title">Key Takeaway</div>
              <p className="article-callout-text">
                Each optimization alone seems modest. Combined, they transformed the experience.
                The site now loads in 0.8s, scores 97 on Lighthouse, and conversion rate
                increased 23% in the month after these changes shipped. Performance isn&apos;t
                just a technical metric — it&apos;s a business lever.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="post-author-card">
        <div className="post-author-card-inner">
          <span className="post-author-card-avatar">47</span>
          <div>
            <div className="post-author-card-name">Agency 47 Team</div>
            <div className="post-author-card-role">Digital Design Studio</div>
            <p className="post-author-card-text">
              We build websites, branding, software and mobile apps for ambitious brands.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
