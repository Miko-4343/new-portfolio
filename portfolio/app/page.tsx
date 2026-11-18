import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OffTheClock from "@/components/OffTheClock";
import About from "@/components/About";
import Contact from "@/components/Contact";
import PhotoBanner from "@/components/PhotoBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <OffTheClock />
        <About />
        <Contact />
      </main>
      <PhotoBanner />
      <Footer />
    </>
  );
}
