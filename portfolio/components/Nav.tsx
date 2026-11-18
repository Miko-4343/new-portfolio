import Link from "next/link";
import { nav, site } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap-wide nav-inner">
        <Link href="/" className="prompt">
          <span className="at">~/</span>
          {site.name
            .toLowerCase()
            .replace(/[^a-z]+/g, "-")
            .replace(/^-|-$/g, "")}
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label.toLowerCase()}
            </Link>
          ))}
          <Link className="hide-sm" href={site.photographyUrl}>
            photography
          </Link>
          <Link className="hide-sm" href={site.exchangeUrl}>
            korea-exchange
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
