import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero, Services, Stats, Projects, Testimonials, CostCalculator, Process, Contact, Footer } from "../components";

/**
 * Home Component (Main Page Composition)
 * ---------------------------------------
 * Root page responsible for:
 * - Composing all landing sections
 * - Handling navigation-based scroll behavior
 * - Structuring overall page flow
 *
 * Responsibilities:
 * - Render all sections in correct order
 * - Handle conditional scroll (e.g. redirect to projects)
 * - Maintain smooth UX between routes
 *
 * UX Concept:
 * - Linear storytelling (top → bottom flow)
 * - Section-based architecture
 * - Smooth navigation between pages and anchors
 */
export default function Home() {

  /**
   * LOCATION HOOK
   * Used to detect navigation state (e.g. redirect with scroll intent)
   */
  const location = useLocation();

  /**
   * CONDITIONAL SCROLL HANDLER
   * ---------------------------
   * If navigation includes "goToProjects",
   * scroll automatically to projects section
   */
  useLayoutEffect(() => {
    if (location.state?.goToProjects) {

      const el = document.getElementById("projects");

      if (el) {
        el.scrollIntoView({ block: "start" });
      }

    }
  }, [location]);

  return (

    /* ================= MAIN PAGE ================= */
    <div>

      {/* HERO (FIRST IMPRESSION) */}
      <Hero />

      {/* SERVICES (WHAT WE OFFER) */}
      <Services />

      {/* STATS (SOCIAL PROOF) */}
      <Stats />

      {/* PROJECTS (PORTFOLIO) */}
      <Projects />

      {/* TESTIMONIALS (TRUST) */}
      <Testimonials />

      {/* PROCESS (HOW IT WORKS) */}
      <Process />

      {/* CALCULATOR (CONVERSION TOOL) */}
      <CostCalculator />

      {/* CONTACT (LEAD CAPTURE) */}
      <Contact />

      {/* FOOTER (CLOSURE) */}
      <Footer />

    </div>
  );
}