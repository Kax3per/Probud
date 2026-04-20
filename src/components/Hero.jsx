/**
 * Hero Component (Construction Landing Page)
 * -------------------------------------------
 * Main above-the-fold section responsible for:
 * - First visual impression (background image + overlay)
 * - Communicating brand positioning (premium construction)
 * - Driving user actions (scroll to sections)
 *
 * Responsibilities:
 * - Handle navigation via scroll (process & contact)
 * - Present strong headline + supporting description
 * - Create visual depth using overlays and gradients
 *
 * UX Concept:
 * - Fullscreen immersive hero
 * - High contrast text for readability
 * - Clear dual CTA (explore process / contact)
 * - Directional gradient guiding user focus (left → right)
 */
export default function Hero() {

  /**
   * SCROLL TO PROCESS SECTION
   * --------------------------
   * Smooth scroll to "process" section
   */
  const scrollToProcess = () => {
    const el = document.getElementById("process");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  /**
   * SCROLL TO CONTACT SECTION
   * --------------------------
   * Smooth scroll to "contact" section
   */
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (

    /* ================= HERO SECTION ================= */
    <section
      id="home"
      className="
        relative
        w-full h-screen

        /* OVERFLOW CONTROL */
        overflow-hidden isolate overflow-x-hidden
      "
    >

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="modern house"
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* GRADIENT OVERLAY (FOCUS LEFT SIDE) */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">

        {/* TEXT WRAPPER */}
        <div className="max-w-2xl w-full">

          {/* LABEL */}
          <p className="text-green-400 text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
            Modern Construction
          </p>

          {/* HEADLINE */}
          <h1 className="
            text-4xl sm:text-5xl md:text-7xl
            font-bold
            text-white
            leading-[1.1]
          ">
            Building the Future<br />
            <span className="text-green-400">
              with Precision & Quality
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
            We deliver high-end construction solutions tailored to your vision.
            From concept to completion — we build with excellence.
          </p>

          {/* ================= CTA BUTTONS ================= */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">

            {/* PRIMARY CTA */}
            <button
              onClick={scrollToProcess}
              className="
                bg-green-500 hover:bg-green-600
                text-white
                px-6 sm:px-8 py-3
                rounded-md
                shadow-xl shadow-green-500/20
                transition
              "
            >
              Our Process
            </button>

            {/* SECONDARY CTA */}
            <button
              onClick={scrollToContact}
              className="
                border border-white/30
                px-6 sm:px-8 py-3
                rounded-md
                text-white
                hover:bg-white hover:text-black
                transition
              "
            >
              Contact Us
            </button>

          </div>

        </div>
      </div>

    </section>
  );
}