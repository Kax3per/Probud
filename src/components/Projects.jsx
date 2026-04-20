import { Link } from "react-router-dom";

/**
 * Projects Component (Portfolio / Showcase Section)
 * --------------------------------------------------
 * Section responsible for:
 * - Presenting completed projects (visual portfolio)
 * - Building credibility and trust
 * - Allowing navigation to detailed project pages
 *
 * Responsibilities:
 * - Render project grid (responsive 2-column layout)
 * - Provide navigation to individual project pages
 * - Display project category + title on hover
 *
 * UX Concept:
 * - Image-driven layout (strong visual impact)
 * - Hover reveal interaction (category + motion)
 * - Subtle zoom effect to increase engagement
 * - Clean grid for easy browsing
 */
export default function Projects() {

  /**
   * PROJECT DATA
   * --------------
   * Each project includes:
   * - id (routing)
   * - title (display)
   * - category (context)
   * - image (visual representation)
   */
  const projects = [
    {
      id: "house",
      title: "Modern Family House",
      category: "Residential",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      id: "villa",
      title: "Luxury Villa",
      category: "Architecture",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },
    {
      id: "office",
      title: "Office Building",
      category: "Commercial",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    },
    {
      id: "interior",
      title: "Modern Interior",
      category: "Interior Design",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    },
  ];

  return (

    /* ================= PROJECTS SECTION ================= */
    <section id="projects" className="
      bg-black text-white

      /* SPACING */
      py-28
    ">

      {/* ================= GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">

        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}

            className="
              group relative
              overflow-hidden
              rounded-xl
              block
            "
          >

            {/* ================= IMAGE ================= */}
            <img
              src={project.img}
              alt={project.title}
              className="
                w-full h-87.5 object-cover

                transition duration-500
                group-hover:scale-110
              "
            />

            {/* ================= OVERLAY ================= */}
            <div className="
              absolute inset-0
              bg-black/40
              group-hover:bg-black/60
              transition
            "></div>

            {/* ================= TEXT CONTENT ================= */}
            <div className="
              absolute bottom-0 left-0
              p-6

              /* ANIMATION */
              translate-y-6
              group-hover:translate-y-0
              transition
            ">

              {/* CATEGORY (HIDDEN UNTIL HOVER) */}
              <p className="
                text-green-400 text-xs tracking-widest uppercase mb-2

                opacity-0
                group-hover:opacity-100
                transition
              ">
                {project.category}
              </p>

              {/* TITLE */}
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}