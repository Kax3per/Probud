import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // 🔥 ACTIVE ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "projects", "contact"];

      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
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

  const links = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToCalculator = () => {
  const el = document.getElementById("calculator");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="text-xl font-semibold text-white">
            PRO<span className="text-green-400">BUILD</span>
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-10 text-sm">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative group text-white"
              >
                <span
                  className={`transition ${
                    active === link.id
                      ? "text-white"
                      : "group-hover:text-green-400"
                  }`}
                >
                  {link.name}
                </span>

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-green-400 transition-all duration-300 ${
                    active === link.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button   onClick={scrollToCalculator} className="hidden md:block bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm shadow-lg shadow-green-500/20 transition">
            Get a Quote
          </button>

          {/* Mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-black/90 backdrop-blur-md px-6 pb-6 flex flex-col gap-6 text-lg">

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

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm bg-black/40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}