import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* LOGO + DESC */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            PRO<span className="text-green-400">BUILD</span>
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed">
            We deliver modern construction solutions focused on quality,
            precision and long-term value.
          </p>
        </div>

        {/* NAV */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Navigation
          </h4>

          <ul className="space-y-2 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-green-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Projects</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Contact
          </h4>

          <ul className="space-y-2 text-gray-500 text-sm">
            <li>Kraków, Poland</li>
            <li>+48 123 456 789</li>
            <li>contact@probuild.com</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Social
          </h4>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-green-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-green-500 transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} PROBUILD. All rights reserved.
      </div>

    </footer>
  );
}