/**
 * Process Component (Construction Workflow Section)
 * --------------------------------------------------
 * Section responsible for explaining:
 * - How the company operates step-by-step
 * - Building trust through transparency
 * - Reducing uncertainty for potential clients
 *
 * Responsibilities:
 * - Present clear project workflow (4 stages)
 * - Visually structure the process (grid + numbering)
 * - Reinforce professionalism and organization
 *
 * UX Concept:
 * - Linear step-by-step storytelling
 * - Strong hierarchy (number → title → description)
 * - Minimalistic design with subtle interaction (hover line)
 * - Easy to scan and understand quickly
 */
export default function Process() {

  /**
   * PROCESS STEPS DATA
   * -------------------
   * Defines each stage of the workflow
   */
  const steps = [
    {
      title: "Consultation",
      desc: "We start by understanding your needs, vision and expectations.",
    },
    {
      title: "Planning",
      desc: "We prepare a clear plan, timeline and cost structure.",
    },
    {
      title: "Execution",
      desc: "Our team delivers the project with precision and attention to detail.",
    },
    {
      title: "Delivery",
      desc: "Final touches, quality checks and handing over the finished project.",
    },
  ];

  return (

    /* ================= PROCESS SECTION ================= */
    <section id="process" className="
      bg-black text-white

      /* SPACING */
      py-32

      /* DIVIDER */
      border-t border-white/10
    ">

      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="max-w-2xl mb-20">

          {/* LABEL */}
          <p className="text-green-400 text-xs tracking-[0.3em] uppercase mb-6">
            Process
          </p>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            How we work<br />
            <span className="text-green-400">
              from start to finish
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-400">
            A clear and structured process ensures that every project is delivered
            efficiently, on time and without unnecessary stress.
          </p>

        </div>

        {/* ================= STEPS GRID ================= */}
        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, i) => (
            <div key={i} className="group">

              {/* STEP NUMBER */}
              <div className="text-green-400 text-2xl font-semibold mb-4">
                0{i + 1}
              </div>

              {/* STEP TITLE */}
              <h3 className="text-lg font-semibold mb-3">
                {step.title}
              </h3>

              {/* STEP DESCRIPTION */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* HOVER INDICATOR LINE */}
              <div className="
                mt-6
                w-8 h-0.5
                bg-green-400

                transition-all
                group-hover:w-16
              "></div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}