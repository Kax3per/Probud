import { Building2, Hammer, Wrench } from "lucide-react";

export default function Services() {
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
    <section id="services" className="relative bg-black text-white py-28 z-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <p className="text-green-400 text-sm tracking-[0.25em] uppercase mb-4">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            What We <span className="text-green-400">Build</span>
          </h2>

          <p className="mt-6 text-gray-400">
            We provide full-scale construction services designed for modern living.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 hover:border-green-400/40 transition duration-300 hover:-translate-y-1"
            >
              <div className="text-green-400 mb-6 group-hover:scale-110 transition">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              <div className="mt-6 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}