import { useParams, Link } from "react-router-dom";
import { useLayoutEffect } from "react";

/**
 * ProjectPage Component (Dynamic Project View)
 * ---------------------------------------------
 * Responsible for:
 * - Rendering detailed project content based on URL param (id)
 * - Handling scroll reset on page load
 * - Displaying full project story (intro, visuals, gallery)
 *
 * Responsibilities:
 * - Read route params and match project data
 * - Provide fallback if project does not exist
 * - Ensure proper UX when navigating between pages
 *
 * UX Concept:
 * - Deep dive into a single project
 * - Strong visual storytelling (hero + gallery)
 * - Smooth navigation back to projects section
 */
export default function ProjectPage() {

  /**
   * ROUTE PARAM
   * Used to determine which project to render
   */
  const { id } = useParams();

  /**
   * SCROLL RESET
   * ----------------
   * Ensures page starts from top when opened
   */
  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  /**
   * PROJECT DATA SOURCE
   * ---------------------
   * Static object storing all project content
   */
  const projects = {
    house: {
      title: "Modern Family House",
      intro:
        "This project represents a complete approach to modern residential architecture, combining functionality, aesthetics, and long-term durability. Designed for a growing family, the house focuses on open living spaces, natural lighting, and seamless transitions between indoor and outdoor environments.",
      description:
        "From the very beginning, the goal was to create a home that feels both luxurious and practical. The layout was carefully planned to maximize space efficiency while maintaining a sense of openness. Large panoramic windows allow natural light to flood the interiors throughout the day, reducing the need for artificial lighting and creating a warm, welcoming atmosphere.\n\nMaterials were selected with both durability and design in mind. High-quality concrete, wood, and glass were combined to achieve a balanced, modern aesthetic. Every construction detail — from structural elements to finishing touches — was executed with precision.\n\nThe project also incorporates energy-efficient solutions, including advanced insulation systems and optimized ventilation. As a result, the building not only looks modern but also performs efficiently over time.\n\nThis house is a perfect example of how thoughtful design and expert construction can come together to create a living space that truly enhances everyday life.",
      heroImg:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      gallery: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      ],
    },

    villa: {
      title: "Luxury Villa",
      intro:
        "An exclusive high-end residential project designed to deliver maximum comfort, elegance, and privacy. The villa reflects a premium lifestyle combined with cutting-edge architectural solutions.",
      description:
        "This villa project was designed with a strong focus on luxury and spatial experience. Every room has been carefully positioned to maximize views, natural light, and privacy. The use of floor-to-ceiling glass panels creates a continuous connection between the interior and the surrounding landscape.\n\nPremium materials such as natural stone, high-end wood finishes, and custom-designed elements elevate the overall aesthetic. The design language is minimal yet sophisticated, avoiding unnecessary complexity while maintaining a strong visual identity.\n\nSpecial attention was given to outdoor areas, including terraces, relaxation zones, and landscaped surroundings. These elements extend the living space beyond the building itself, creating a holistic environment.\n\nThe result is a property that not only meets but exceeds expectations in terms of both design and functionality.",
      heroImg:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      ],
    },

    office: {
      title: "Office Building",
      intro:
        "A modern commercial development designed to support productivity, collaboration, and long-term business growth.",
      description:
        "The office building was developed with flexibility and scalability in mind. Open-plan workspaces allow teams to collaborate effectively, while dedicated areas provide privacy when needed.\n\nThe structure integrates modern infrastructure, including advanced electrical systems, efficient lighting, and optimized climate control. These elements ensure a comfortable working environment throughout the year.\n\nThe design emphasizes clean lines, neutral tones, and functional layouts, creating a professional yet inviting atmosphere.\n\nThis project demonstrates how thoughtful commercial architecture can directly influence productivity and user experience.",
      heroImg:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        "https://images.unsplash.com/photo-1556761175-b413da4baf72",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      ],
    },

    interior: {
      title: "Modern Interior",
      intro:
        "A carefully designed interior project focused on simplicity, comfort, and timeless aesthetics.",
      description:
        "The interior design follows a minimal approach, where every element has a purpose. Neutral colors, natural textures, and carefully selected furniture create a calm and balanced environment.\n\nLighting plays a key role in shaping the atmosphere, with layered solutions that adapt to different needs throughout the day.\n\nAttention to detail is visible in every corner — from material selection to layout decisions.\n\nThis project highlights how well-designed interiors can significantly improve quality of life.",
      heroImg:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
      gallery: [
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      ],
    },
  };

  /**
   * SELECT CURRENT PROJECT
   */
  const project = projects[id];

  /**
   * FALLBACK UI
   */
  if (!project) {
    return (
      <div className="text-white p-10">
        Project not found
      </div>
    );
  }

  return (

    /* ================= PROJECT PAGE ================= */
    <section className="bg-black text-white min-h-screen py-24">

      <div className="max-w-5xl mx-auto px-6">

        {/* ================= BACK NAVIGATION ================= */}
        <Link
          to="/"
          state={{ goToProjects: true }}
          className="text-green-400 mb-10 inline-block"
        >
          ← Back to Projects
        </Link>

        {/* ================= TITLE ================= */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {project.title}
        </h1>

        {/* ================= INTRO ================= */}
        <p className="text-gray-300 text-lg mb-12 leading-relaxed whitespace-pre-line">
          {project.intro}
        </p>

        {/* ================= HERO IMAGE ================= */}
        <img
          src={project.heroImg}
          alt=""
          className="w-full h-125 object-cover rounded-xl mb-12"
        />

        {/* ================= DESCRIPTION ================= */}
        <p className="text-gray-400 mb-16 leading-relaxed text-lg whitespace-pre-line">
          {project.description}
        </p>

        {/* ================= GALLERY ================= */}
        <div className="grid md:grid-cols-2 gap-6">

          {project.gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="w-full h-75 object-cover rounded-xl hover:scale-105 transition"
            />
          ))}

        </div>

      </div>

    </section>
  );
}