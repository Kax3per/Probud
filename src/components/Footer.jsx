import { FaInstagram, FaFacebookF } from "react-icons/fa";

/**
 * Footer Component (Brand Closure & Navigation Hub)
 * --------------------------------------------------
 * Final section of the page responsible for:
 * - Brand reinforcement
 * - Secondary navigation
 * - Contact information
 * - Social media access
 *
 * Responsibilities:
 * - Provide quick navigation links
 * - Display company identity and description
 * - Offer contact details (location, phone, email)
 * - Enable social media interaction
 *
 * UX Concept:
 * - Clean and structured layout
 * - Clear separation of content (grid columns)
 * - Low visual noise, high readability
 * - Subtle interactivity (hover states)
 */
export default function Footer() {
  return (
    /* ================= FOOTER ================= */
    <footer className="bg-black text-white border-t border-white/10">

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* ================= BRAND ================= */}
        <div>

          {/* LOGO */}
          <h3 className="text-xl font-semibold mb-4">
            PRO<span className="text-green-400">BUILD</span>
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-500 text-sm leading-relaxed">
            We deliver modern construction solutions focused on quality,
            precision and long-term value.
          </p>
        </div>

        {/* ================= NAVIGATION ================= */}
        <div>

          {/* TITLE */}
          <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Navigation
          </h4>

          {/* LINKS */}
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>

          {/* TITLE */}
          <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Contact
          </h4>

          {/* INFO */}
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>Kraków, Poland</li>
            <li>+48 123 456 789</li>
            <li>contact@probuild.com</li>
          </ul>
        </div>

        {/* ================= SOCIAL ================= */}
        <div>

          {/* TITLE */}
          <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Social
          </h4>

          {/* ICONS */}
          <div className="flex gap-4">

            {/* INSTAGRAM */}
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-green-500 transition"
            >
              <FaInstagram />
            </a>

            {/* FACEBOOK */}
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-green-500 transition"
            >
              <FaFacebookF />
            </a>

          </div>
        </div>

      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10 py-6 text-center text-gray-600 text-sm">

        {/* COPYRIGHT */}
        © {new Date().getFullYear()} PROBUILD. All rights reserved.

      </div>

    </footer>
  );
}