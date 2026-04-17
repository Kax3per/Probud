import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero, Services, Stats, Projects, Testimonials, CostCalculator, Process, Contact, Footer } from "../components";

export default function Home() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.state?.goToProjects) {
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ block: "start" });
      }
    }
  }, [location]);

  return (
    <div>
      <Hero />
      <Services />
      <Stats />
      <Projects />
      <Testimonials />
      <Process />
      <CostCalculator />
      <Contact />
      <Footer />
    </div>
  );
}