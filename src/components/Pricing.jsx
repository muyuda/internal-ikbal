import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

const plans = [
  {
    tag: "Basic Design",
    title: "Web Design",
    price: "$29.00",
  },
  {
    tag: "Standard Design",
    title: "Web Development",
    price: "$89.00",
  },
  {
    tag: "Pro Design",
    title: "Design & Develop",
    price: "$199.00",
  },
];

const features = [
  "Carefully crafted components",
  "Amazing page examples",
  "Super friendly support team",
  "Awesome Support",
];

export default function Pricing() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % plans.length);
  const prev = () => setIndex((i) => (i - 1 + plans.length) % plans.length);

  return (
    <section id="pricing" className="py-28 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Pricing Plan
            </h2>
            <p className="text-slate-500 leading-relaxed max-w-xl">
              Stop wasting time and money designing and managing a website
              that doesn’t get results. Happiness guaranteed.
            </p>

            {/* arrows */}
            <div className="flex gap-4 mt-10">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:shadow-md transition"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:shadow-md transition"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT SLIDER CARD */}
          <div className="relative h-[480px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={plans[index].title}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.35 }}
                className="absolute w-full"
              >
                <div className="bg-white rounded-2xl shadow-md p-10 text-center">
                  <p className="text-slate-500 mb-2">
                    {plans[index].tag}
                  </p>

                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    {plans[index].title}
                  </h3>

                  <div className="text-4xl font-extrabold text-blue-600 mb-8">
                    {plans[index].price}
                  </div>

                  <ul className="space-y-3 text-slate-500 text-sm mb-8">
                    {features.map((f) => (
                      <li key={f} className="flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-medium transition">
                    Get Started
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
