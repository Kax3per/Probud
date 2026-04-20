import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import { Navbar } from "./components";

/**
 * App Component (Routing Layer)
 * --------------------------------
 * Root application component responsible for:
 * - Handling client-side routing
 * - Defining available pages
 * - Providing global layout elements (Navbar)
 *
 * Responsibilities:
 * - Configure React Router
 * - Map URL paths to components
 * - Maintain consistent layout across pages
 *
 * Routing Structure:
 * - "/" → Home (Landing page with all sections)
 * - "/project/:id" → Dynamic project details page
 *
 * UX Concept:
 * - Seamless navigation between sections and pages
 * - Persistent navigation bar for accessibility
 * - Clean separation between listing (Home) and detail view (ProjectPage)
 */
export default function App() {
  return (

    /* ================= ROUTER ================= */
    <BrowserRouter basename="/Probud">

      {/* ================= GLOBAL NAVBAR ================= */}
      <Navbar />

      {/* ================= ROUTES ================= */}
      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* PROJECT DETAILS PAGE (DYNAMIC ROUTE) */}
        <Route path="/project/:id" element={<ProjectPage />} />

      </Routes>

    </BrowserRouter>
  );
}