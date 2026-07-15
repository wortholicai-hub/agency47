import Link from "next/link";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Websites", href: "/services" },
      { label: "Branding", href: "/services" },
      { label: "Software", href: "/services" },
      { label: "Mobile Apps", href: "/services" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Sitemap",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Imprint", href: "/imprint" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "X / Twitter", href: "#" },
      { label: "Dribbble", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span>Agency 47</span>
            </Link>
            <p className="footer-tagline">
              Digital products for ambitious brands.
            </p>
          </div>

          <div className="footer-cols">
            {footerColumns.map((col) => (
              <div key={col.title} className="footer-col">
                <div className="footer-col-title">{col.title}</div>
                <div className="footer-list">
                  {col.links.map((link) => (
                    <Link key={link.label} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} Agency 47. All rights reserved.
          </span>
          <span className="footer-place">Crafted with precision.</span>
        </div>
      </div>
    </footer>
  );
}
