import { useState } from "react";
import { FaPhoneAlt, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden">

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
        alt="construction"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">

        <p className="text-green-400 text-xs tracking-[0.3em] uppercase mb-6">
          Contact
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
          Ready to start your<br />
          <span className="text-green-400">next project?</span>
        </h2>

        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          We deliver high-quality construction solutions tailored to your vision.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-6">

          {!open ? (
            <button
              onClick={() => setOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md transition shadow-xl shadow-green-500/20"
            >
              Get in Touch
            </button>
          ) : (
            <>
              {/* Social icons */}
              <div className="flex gap-6 animate-fade-in">

                <a
                  href="#"
                  className="bg-white/10 hover:bg-green-500 p-4 rounded-full transition backdrop-blur-md"
                >
                  <FaInstagram className="text-white text-lg" />
                </a>

                <a
                  href="#"
                  className="bg-white/10 hover:bg-green-500 p-4 rounded-full transition backdrop-blur-md"
                >
                  <FaFacebookF className="text-white text-lg" />
                </a>

              </div>

              {/* Phone block */}
              <div className="flex items-center gap-4 bg-green-500/90 px-6 py-3 rounded-full animate-fade-in shadow-lg shadow-green-500/20">

                <FaPhoneAlt className="text-white text-sm" />

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