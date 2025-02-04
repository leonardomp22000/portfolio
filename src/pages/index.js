import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <AboutMe />
        <Services />
        <Projects />
      </main>
    </>
  );
}
