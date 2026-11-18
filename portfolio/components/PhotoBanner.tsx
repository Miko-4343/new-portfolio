import Link from "next/link";
import { photography, site } from "@/lib/content";

export default function PhotoBanner() {
  return (
    <section className="photo">
      <div className="wrap">
        <h2 className="cmd">
          <span className="ps">$</span>open photography
        </h2>
        <p className="muted" style={{ maxWidth: 560 }}>
          {photography.body}
        </p>
        <Link href={site.photographyUrl} className="btn">
          [ {photography.cta.toLowerCase()} → ]
        </Link>
      </div>
    </section>
  );
}
