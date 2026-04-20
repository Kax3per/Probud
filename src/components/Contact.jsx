import { useState } from "react";
import { FaPhoneAlt, FaInstagram, FaFacebookF } from "react-icons/fa";

/**
 * Contact Component (CTA / Final Conversion Section)
 * ---------------------------------------------------
 * Section focused on:
 * - Final user conversion (contact action)
 * - Strong closing message (project start)
 * - Providing quick communication channels
 *
 * Responsibilities:
 * - Handle CTA interaction (toggle contact options)
 * - Display social links (Instagram, Facebook)
 * - Show direct phone contact
 * - Deliver strong visual ending to page
 *
 * UX Concept:
 * - Minimal → expanded interaction (button → options)
 * - Strong emotional close (background + headline)
 * - Clear action path (contact immediately)
 */
export default function Contact() {

  /**
   * CONTACT STATE
   * Controls:
   * - Initial CTA button
   * - Expanded contact options (social + phone)
   */
  const [open, setOpen] = useState(false);

  return (
    /* ================= CONTACT SECTION ================= */
    <section id="contact" className="
      relative
      h-[65vh] w-full
      flex items-center justify-center
      overflow-hidden
    ">

      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
        alt="construction"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* ================= OVERLAY (contrast + readability) ================= */}
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 text-center px-6 max-w-3xl">

        {/* SECTION LABEL */}
        <p className="text-green-400 text-xs tracking-[0.3em] uppercase mb-6">
          Contact
        </p>

        {/* HEADLINE (final CTA message) */}
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
          Ready to start your<br />
          <span className="text-green-400">next project?</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          We deliver high-quality construction solutions tailored to your vision.
        </p>

        {/* ================= CTA AREA ================= */}
        <div className="mt-10 flex flex-col items-center gap-6">

          {/* INITIAL STATE (primary CTA button) */}
          {!open ? (
            <button
              onClick={() => setOpen(true)}
              className="
                bg-green-500 hover:bg-green-600
                text-white
                px-8 py-3
                rounded-md
                transition
                shadow-xl shadow-green-500/20
              "
            >
              Get in Touch
            </button>
          ) : (
            <>
              {/* ================= SOCIAL LINKS ================= */}
              <div className="flex gap-6 animate-fade-in">

                {/* INSTAGRAM */}
                <a
                  href="#"
                  className="bg-white/10 hover:bg-green-500 p-4 rounded-full transition backdrop-blur-md"
                >
                  <FaInstagram className="text-white text-lg" />
                </a>

                {/* FACEBOOK */}
                <a
                  href="#"
                  className="bg-white/10 hover:bg-green-500 p-4 rounded-full transition backdrop-blur-md"
                >
                  <FaFacebookF className="text-white text-lg" />
                </a>

              </div>

              {/* ================= PHONE CONTACT ================= */}
              <div className="
                flex items-center gap-4
                bg-green-500/90
                px-6 py-3
                rounded-full
                animate-fade-in
                shadow-lg shadow-green-500/20
              ">

                {/* PHONE ICON */}
                <FaPhoneAlt className="text-white text-sm" />

                {/* PHONE NUMBER */}
                <span className="text-white text-sm tracking-wide">
                  +48 123 456 789
                </span>

              </div>
            </>
          )}

        </div>

      </div>

    </section>
  );
}