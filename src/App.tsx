import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { AboutUs } from "./components/AboutUs";
import { CurrentStatus } from "./components/CurrentStatus";
import { FutureProjects } from "./components/FutureProjects";
import { YouTubeSection } from "./components/YouTube";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <AboutUs />
      <CurrentStatus />
      <FutureProjects />
      <YouTubeSection />
      <Gallery />
      <Footer />
      <BackToTop />
    </div>
  );
}