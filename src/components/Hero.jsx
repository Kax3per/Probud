export default function Hero() {
  const scrollToProcess = () => {
    const el = document.getElementById("process");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden isolate overflow-x-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="modern house"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="max-w-2xl w-full">

          <p className="text-green-400 text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
            Modern Construction
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1]">
            Building the Future<br />
            <span className="text-green-400">
              with Precision & Quality
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
            We deliver high-end construction solutions tailored to your vision.
            From concept to completion — we build with excellence.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">

            <button
              onClick={scrollToProcess}
              className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 rounded-md shadow-xl shadow-green-500/20 transition"
            >
              Our Process
            </button>

            <button
              onClick={scrollToContact}
              className="border border-white/30 px-6 sm:px-8 py-3 rounded-md text-white hover:bg-white hover:text-black transition"
            >
              Contact Us
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}