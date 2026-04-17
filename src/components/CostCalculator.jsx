import { useState, useMemo } from "react";

export default function CostCalculator() {
  const [size, setSize] = useState(120);
  const [standard, setStandard] = useState("medium");
  const [type, setType] = useState("house");
  const [floors, setFloors] = useState(1);
  const [garage, setGarage] = useState(false);

  const basePrice = {
    house: 5500,
    apartment: 4500,
    commercial: 7000,
  };

  const standardMultiplier = {
    basic: 0.85,
    medium: 1,
    premium: 1.4,
  };

  const total = useMemo(() => {
    let price = size * basePrice[type] * standardMultiplier[standard];

    if (floors > 1) price *= 1.1;
    if (garage) price += 40000;

    return Math.round(price);
  }, [size, standard, type, floors, garage]);

  return (
    <section id="calculator" className="bg-black text-white py-32 border-t border-white/10">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT — ROZBUDOWANY TEKST */}
        <div>
          <p className="text-green-400 text-xs tracking-[0.3em] uppercase mb-6">
            Estimate
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Plan your investment<br />
            <span className="text-green-400">with confidence</span>
          </h2>

          <div className="mt-8 space-y-6 text-gray-400 leading-relaxed">

            <p>
              Building a house or commercial space is one of the most important
              investments you will ever make. Understanding the potential costs
              early allows you to make smarter decisions and avoid unexpected surprises.
            </p>

            <p>
              Our estimator is designed to give you a realistic starting point.
              By adjusting a few key parameters such as size, standard and project type,
              you can quickly explore different scenarios and understand how each factor
              impacts the final cost.
            </p>

            

           

          </div>
        </div>

        {/* RIGHT — CALCULATOR */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-8">

          {/* TYPE */}
          <div>
            <label className="text-sm text-gray-400">Project Type</label>
            <div className="flex gap-3 mt-2">
              {["house", "apartment", "commercial"].map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`px-4 py-2 rounded-md border text-sm transition ${
                    type === t
                      ? "bg-green-500 text-white border-green-500"
                      : "border-white/20 text-gray-400 hover:border-green-400"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div>
            <label className="text-sm text-gray-400">
              Size: <span className="text-white">{size} m²</span>
            </label>
            <input
              type="range"
              min="40"
              max="400"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full mt-2 accent-green-500"
            />
          </div>

          {/* STANDARD */}
          <div>
            <label className="text-sm text-gray-400">Standard</label>
            <div className="flex gap-3 mt-2">
              {["basic", "medium", "premium"].map((s) => (
                <button
                  key={s}
                  onClick={() => setStandard(s)}
                  className={`px-4 py-2 rounded-md border text-sm transition ${
                    standard === s
                      ? "bg-green-500 text-white border-green-500"
                      : "border-white/20 text-gray-400 hover:border-green-400"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* FLOORS */}
          <div>
            <label className="text-sm text-gray-400">Floors</label>
            <div className="flex gap-3 mt-2">
              {[1, 2].map((f) => (
                <button
                  key={f}
                  onClick={() => setFloors(f)}
                  className={`px-4 py-2 rounded-md border text-sm transition ${
                    floors === f
                      ? "bg-green-500 text-white border-green-500"
                      : "border-white/20 text-gray-400 hover:border-green-400"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* GARAGE */}
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-400">Garage</label>

            <button
              onClick={() => setGarage(!garage)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                garage ? "bg-green-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transition ${
                  garage ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>

          {/* RESULT */}
          <div className="pt-6 border-t border-white/10">

            <p className="text-gray-400 text-sm mb-2">
              Estimated cost
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-green-400">
              {total.toLocaleString()} PLN
            </h3>

            <p className="text-gray-500 text-xs mt-2">
              *Final price depends on materials, location and project complexity.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}