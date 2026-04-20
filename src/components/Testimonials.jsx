/**
 * Testimonials Component (Social Proof Section)
 * ----------------------------------------------
 * Section responsible for:
 * - Showcasing client feedback
 * - Building trust and credibility
 * - Reinforcing brand reliability through real opinions
 *
 * Responsibilities:
 * - Display testimonials in a structured grid
 * - Highlight client experiences and satisfaction
 * - Support conversion by reducing user hesitation
 *
 * UX Concept:
 * - Clean card-based layout
 * - Focus on readability (text-first design)
 * - Subtle hover interaction for depth
 * - Consistent spacing and typography hierarchy
 */
export default function Testimonials() {

  /**
   * TESTIMONIALS DATA
   * -------------------
   * Each item includes:
   * - name (client identity)
   * - text (feedback content)
   */
  const testimonials = [
    {
      name: "Adam Kowalski",
      text: "The entire process was handled with professionalism and attention to detail. The final result exceeded our expectations.",
    },
    {
      name: "Marta Nowak",
      text: "Clear communication, solid execution and great quality. I would definitely recommend working with this team.",
    },
    {
      name: "Piotr Zieliński",
      text: "From planning to completion — everything was smooth and well organized. A reliable partner for any project.",
    },
  ];

  return (

    /* ================= TESTIMONIALS SECTION ================= */
    <section className="
      bg-black text-white

      /* SPACING */
      py-32

      /* DIVIDER */
      border-t border-white/10
    ">

      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="max-w-2xl mb-16">

          {/* LABEL */}
          <p className="text-green-400 text-xs tracking-[0.3em] uppercase mb-6">
            Testimonials
          </p>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            What our clients<br />
            <span className="text-green-400">
              say about us
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-400">
            We focus on long-term quality and transparent collaboration.
            Here’s what our clients think about working with us.
          </p>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                bg-white/5
                border border-white/10
                rounded-xl
                p-8

                /* INTERACTION */
                hover:bg-white/10
                transition
              "
            >

              {/* TESTIMONIAL TEXT */}
              <p className="text-gray-300 leading-relaxed mb-6">
                “{t.text}”
              </p>

              {/* AUTHOR */}
              <div className="text-sm text-gray-500">
                — {t.name}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}