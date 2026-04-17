import { useEffect, useRef, useState } from "react";

/* Counter */
function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* Section */
export default function Stats() {
  const stats = [
    { value: 10, suffix: "+", label: "Years of Experience" },
    { value: 250, suffix: "+", label: "Happy Clients" },
    { value: 320, suffix: "+", label: "Projects Completed" },
    { value: 100, suffix: "%", label: "Quality Guarantee" },
  ];

  return (
    <section className="bg-black text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {stats.map((stat, i) => (
            <div key={i} className="group">

              <h3 className="text-4xl md:text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h3>

              <p className="text-gray-400 text-sm">
                {stat.label}
              </p>

              <div className="mt-4 w-8 h-[2px] bg-green-400 mx-auto group-hover:w-16 transition-all"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}