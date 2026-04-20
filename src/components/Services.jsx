import { Building2, Hammer, Wrench } from "lucide-react";

/**
 * Services Component (Construction Offer Section)
 * ------------------------------------------------
 * Section responsible for:
 * - Presenting core service offerings
 * - Communicating company capabilities
 * - Building trust through clear value propositions
 *
 * Responsibilities:
 * - Display service categories (3 main pillars)
 * - Provide quick understanding of what the company delivers
 * - Enhance visual hierarchy using icons + cards
 *
 * UX Concept:
 * - Card-based layout for easy scanning
 * - Subtle hover interactions (lift + highlight)
 * - Icon-driven communication for faster recognition
 * - Consistent spacing and minimal design
 */
export default function Services() {

  /**
   * SERVICES DATA
   * ----------------
   * Each service includes:
   * - icon (visual identifier)
   * - title (service name)
   * - description (value explanation)
   */
  const services = [
    {
      icon: <Building2 size={28} />,
      title: "Residential Construction",
      desc: "Modern homes built with precision and attention to detail.",
    },
    {
      icon: <Hammer size={28} />,
      title: "Renovations",
      desc: "Transforming interiors into functional and elegant spaces.",
    },
    {
      icon: <Wrench size={28} />,
      title: "Turnkey Projects",
      desc: "Complete project delivery from concept to execution.",
    },
  ];

  return (

    /* ================= SERVICES SECTION ================= */
    <section id="services" className="
      relative
      bg-black text-white

      /* SPACING */
      py-28

      /* STACKING */
      z-10
    ">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="max-w-2xl mb-16">

          {/* LABEL */}
          <p className="text-green-400 text-sm tracking-[0.25em] uppercase mb-4">
            Our Services
          </p>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold">
            What We <span className="text-green-400">Build</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-400">
            We provide full-scale construction services designed for modern living.
          </p>

        </div>

        {/* ================= CARDS GRID ================= */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, i) => (
            <div
              key={i}
              className="
                group

                /* CARD STYLE */
                bg-white/5
                border border-white/10
                p-8
                rounded-xl

                /* INTERACTIONS */
                transition duration-300
                hover:bg-white/10
                hover:border-green-400/40
                hover:-translate-y-1
              "
            >

              {/* ICON */}
              <div className="
                text-green-400 mb-6
                transition
                group-hover:scale-110
              ">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* HOVER LINE */}
              <div className="
                mt-6
                w-0 h-0.5
                bg-green-400

                transition-all
                group-hover:w-full
              "></div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}