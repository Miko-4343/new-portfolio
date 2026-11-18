import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { groupByLocation, photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "M. Kos | Photography",
  description: "Photographs, grouped by location.",
};

export default function PhotographyPage() {
  const groups = groupByLocation(photos);

  return (
    <>
      <Nav />
      <main className="wrap-wide gallery-page">
        <h1 className="cmd" style={{ fontSize: 22 }}>
          <span className="ps">$</span>ls ~/photography
        </h1>
        <p className="muted" style={{ maxWidth: 560, marginBottom: 32 }}>
          Low light, long lenses, and everything that isn&apos;t code — grouped
          by where I took them. Click a photo to enlarge it; use the arrow keys
          (or swipe) to move through them.
        </p>
        <Gallery groups={groups} />
      </main>
      <Footer />
    </>
  );
}
