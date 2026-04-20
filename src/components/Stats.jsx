import { useEffect, useRef, useState } from "react";

/**
 * Counter Component (Animated Statistic Value)
 * ---------------------------------------------
 * Small utility component responsible for:
 * - Animating numbers from 0 → target value
 * - Triggering animation only when visible in viewport
 *
 * Responsibilities:
 * - Detect visibility using IntersectionObserver
 * - Run smooth incremental animation
 * - Display formatted value with optional suffix
 *
 * UX Concept:
 * - Delayed animation (on scroll) increases engagement
 * - Smooth counting effect improves perceived performance
 */
function Counter({ end, duration = 2000, suffix = "" }) {

  /**
   * CURRENT VALUE STATE
   */
  const [count, setCount] = useState(0);

  /**
   * START FLAG (WHEN ELEMENT IS VISIBLE)
   */
  const [start, setStart] = useState(false);

  /**
   * DOM REF FOR OBSERVER
   */
  const ref = useRef();

  /**
   * INTERSECTION OBSERVER
   * ----------------------
   * Starts animation when element is at least 50% visible
   */
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

  /**
   * COUNTING ANIMATION
   * --------------------
   * Runs incremental updates until reaching target value
   */
  useEffect(() => {
    if (!start) return;

    let current = 0;

    /**
     * Frame-based increment calculation (~60fps)
     */
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

/**
 * Stats Component (Social Proof Section)
 * ---------------------------------------
 * Section responsible for:
 * - Displaying key company metrics
 * - Building credibility and trust
 * - Reinforcing experience and reliability
 *
 * Responsibilities:
 * - Present animated statistics
 * - Provide quick, scannable proof points
 * - Enhance engagement with motion
 *
 * UX Concept:
 * - Grid-based layout (clean + balanced)
 * - Animated counters for attention
 * - Minimal design with subtle hover effects
 */
export default function Stats() {

  /**
   * STATS DATA
   * ------------
   * Defines all key metrics displayed in the section
   */
  const stats = [
    { value: 10, suffix: "+", label: "Years of Experience" },
    { value: 250, suffix: "+", label: "Happy Clients" },
    { value: 320, suffix: "+", label: "Projects Completed" },
    { value: 100, suffix: "%", label: "Quality Guarantee" },
  ];

  return (

    /* ================= STATS SECTION ================= */
    <section className="
      bg-black text-white

      /* SPACING */
      py-24

      /* DIVIDER */
      border-t border-white/10
    ">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {stats.map((stat, i) => (
            <div key={i} className="group">

              {/* VALUE (ANIMATED) */}
              <h3 className="
                text-4xl md:text-5xl
                font-bold
                text-green-400
                mb-2

                transition
                group-hover:scale-110
              ">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h3>

              {/* LABEL */}
              <p className="text-gray-400 text-sm">
                {stat.label}
              </p>

              {/* HOVER LINE */}
              <div className="
                mt-4
                w-8 h-0.5
                bg-green-400
                mx-auto

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