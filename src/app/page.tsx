import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import GitHubRepos from "@/components/GitHubRepos";
import Testimonials from "@/components/Testimonials";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Resume />
        <Portfolio />
        <GitHubRepos />
        <Testimonials />
        <Marquee />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
