import Link from "next/link";
import { footer, nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-row">
          <span>{footer.legal}</span>
          <nav aria-label="Footer" style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {nav.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label.toLowerCase()}
              </Link>
            ))}
            <Link href={site.photographyUrl}>photography</Link>
            <a href={`mailto:${site.email}`}>email</a>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              github
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
          </nav>
        </div>
        <p style={{ marginTop: 16 }}>{footer.right}</p>
      </div>
    </footer>
  );
}
