export default function Process() {
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
    <section id="process" className="bg-black text-white py-32 border-t border-white/10">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-2xl mb-20">
          <p className="text-green-400 text-xs tracking-[0.3em] uppercase mb-6">
            Process
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            How we work<br />
            <span className="text-green-400">from start to finish</span>
          </h2>

          <p className="mt-6 text-gray-400">
            A clear and structured process ensures that every project is delivered
            efficiently, on time and without unnecessary stress.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, i) => (
            <div key={i} className="group">

              {/* Number */}
              <div className="text-green-400 text-2xl font-semibold mb-4">
                0{i + 1}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Line */}
              <div className="mt-6 w-8 h-[2px] bg-green-400 group-hover:w-16 transition-all"></div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}