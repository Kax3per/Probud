import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

/**
 * Navbar Component (Construction Landing Navigation)
 * ---------------------------------------------------
 * Fixed top navigation responsible for:
 * - Section navigation (scroll-based)
 * - Active link highlighting (scroll spy)
 * - Mobile menu handling
 * - CTA access (valuation / calculator)
 *
 * Responsibilities:
 * - Track scroll position and update active section
 * - Lock body scroll when mobile menu is open
 * - Provide smooth navigation between sections
 * - Maintain responsive behavior (desktop vs mobile)
 *
 * UX Concept:
 * - Transparent blurred navbar (modern aesthetic)
 * - Active link indicator (underline + color)
 * - Mobile-first overlay navigation
 * - Persistent CTA for conversion (Get valuation)
 */
export default function Navbar() {

  /**
   * MOBILE MENU STATE
   * Controls whether mobile menu is open
   */
  const [open, setOpen] = useState(false);

  /**
   * ACTIVE LINK STATE
   * Tracks currently visible section
   */
  const [active, setActive] = useState("home");

  /**
   * BODY SCROLL LOCK
   * Prevent scrolling when mobile menu is open
   */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  /**
   * SCROLL SPY (ACTIVE LINK DETECTION)
   * ------------------------------------
   * Updates active link based on scroll position
   */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "projects", "contact"];

      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {

          /**
           * Offset to trigger active state earlier
           */
          const top = el.offsetTop - 120;

          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * NAVIGATION LINKS
   */
  const links = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  /**
   * SCROLL TO CALCULATOR
   * ----------------------
   * CTA action for pricing estimation
   */
  const scrollToCalculator = () => {
    const el = document.getElementById("calculator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="
        fixed top-0 left-0 w-full z-50

        /* STYLE */
        bg-black/30 backdrop-blur-md
        border-b border-white/10
      ">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <a href="#home" className="text-xl font-semibold text-white">
            PRO<span className="text-green-400">BUD</span>
          </a>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-10 text-sm">

            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative group text-white"
              >

                {/* LINK TEXT */}
                <span
                  className={`transition ${
                    active === link.id
                      ? "text-white"
                      : "group-hover:text-green-400"
                  }`}
                >
                  {link.name}
                </span>

                {/* UNDERLINE INDICATOR */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-green-400 transition-all duration-300 ${
                    active === link.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />

              </a>
            ))}

          </nav>

          {/* ================= CTA (DESKTOP) ================= */}
          <button
            onClick={scrollToCalculator}
            className="
              hidden md:block

              bg-green-500 hover:bg-green-600
              text-white
              px-5 py-2
              rounded-md
              text-sm

              shadow-lg shadow-green-500/20
              transition
            "
          >
            Get a valuation
          </button>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <div className="
            md:hidden
            bg-black/90 backdrop-blur-md
            px-6 pb-6
            flex flex-col gap-6
            text-lg
          ">

            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`border-b border-white/10 pb-2 ${
                  active === link.id
                    ? "text-white border-green-400"
                    : "text-white hover:text-green-400"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* MOBILE CTA */}
            <button
              onClick={() => {
                setOpen(false);
                scrollToCalculator();
              }}
              className="bg-green-500 py-3 rounded-md mt-4"
            >
              Get a Quote
            </button>

          </div>
        )}

      </header>

      {/* ================= BACKDROP ================= */}
      {open && (
        <div
          className="
            fixed inset-0 z-40
            backdrop-blur-sm bg-black/40
          "
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}