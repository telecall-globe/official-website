"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Eye, Target, Plus } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// --- Core Values Data (icons removed) ---
const coreValues = [
  {
    title: "Integrity & Transparency",
    description:
      "We clear what we carry. Every minute is accounted for, every settlement is verifiable. No hidden traffic, no disputed minutes.",
  },
  {
    title: "Reliability & Resilient",
    description:
      "With redundant POI's in Lagos, and Kano linked, Asaba and Portharcourt, linked by a fibre ring, we guarantee quality uptime. A call must never fail because of us.",
  },
  {
    title: "Quality of Service",
    description:
      "Superior voice quality, low latency, anti-fraud and anti-spam filtering on every route.",
  },
  {
    title: "Innovation and Compliance",
    description:
      "Fully NCC compliant, ISO-aligned in quality, security and business continuity.",
  },
  {
    title: "Partnership",
    description:
      "Our success is measured by the profitability and growth of the networks we interconnect.",
  },
  {
    title: "Neutrality",
    description:
      "We are carrier neutral. We don't compete with the MNO's, we serve all equally. Be it the MNO's, small operators and the international carriers.",
  },
];

// --- Reusable Accordion Item (No Icons) ---
function AccordionItem({
  value,
  isOpen,
  onToggle,
}: {
  value: (typeof coreValues)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`group bg-white border rounded-2xl overflow-hidden transition-colors duration-300 ${
        isOpen
          ? "border-[#556795]/30 shadow-sm"
          : "border-slate-100 hover:border-slate-200"
      }`}
    >
      <button
        onClick={onToggle}
        className="cursor-pointer w-full flex items-center justify-between p-5 text-left gap-4"
      >
        <div className="flex items-center gap-4">
          {/* Small brand color square indicator instead of an icon */}
          <div
            className={`w-1 h-6 rounded-full transition-all duration-300 ${
              isOpen
                ? "bg-[#4d808c]"
                : "bg-slate-200 group-hover:bg-[#556795]/40"
            }`}
          />
          <span
            className={`font-bold text-base sm:text-lg transition-colors duration-300 ${
              isOpen ? "text-[#556795]" : "text-slate-900"
            }`}
          >
            {value.title}
          </span>
        </div>

        <div
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <Plus
            className={`w-5 h-5 transition-colors duration-300 ${
              isOpen ? "text-[#556795]" : "text-slate-400"
            }`}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0 pl-10">
              <p className="text-slate-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// --- Main Section Component ---
export function VisionMissionValues() {
  const [openValue, setOpenValue] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <div className="flex justify-center mb-16">
            <span className="inline-block bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              Vision, Mission
            </span>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            {/* Vision Card */}
            <motion.div
              variants={fadeUp}
              className="relative bg-gradient-to-br from-[#F4FFFC] to-white p-8 rounded-2xl border border-[#556795]/10 overflow-hidden"
            >
              {/* Large decorative quote mark */}
              <span className="absolute top-4 right-6 text-[120px] leading-none font-serif text-[#556795]/5 select-none pointer-events-none">
                &rdquo;
              </span>

              <div className="relative z-10">
                <div className="p-2.5 bg-[#556795] text-white rounded-lg w-fit mb-6">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Vision Statement
                </h3>
                <p className="text-slate-600 italic leading-relaxed text-sm sm:text-base">
                  &ldquo;To be Nigeria&apos;s most trusted and resilient
                  interconnect backbone, enabling seamless, secure, and
                  profitable interconnection for every network,
                  everywhere.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              variants={fadeUp}
              className="relative bg-gradient-to-br from-[#F4FFFC] to-white p-8 rounded-2xl border border-[#556795]/10 overflow-hidden"
            >
              <span className="absolute top-4 right-6 text-[120px] leading-none font-serif text-[#556795]/5 select-none pointer-events-none">
                &rdquo;
              </span>

              <div className="relative z-10">
                <div className="p-2.5 bg-[#556795] text-white rounded-lg w-fit mb-6">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Mission Statement
                </h3>
                <p className="text-slate-600 italic leading-relaxed text-sm sm:text-base">
                  &ldquo;To provide world-class interconnect exchange services
                  through a robust, fibre-linked national network of points of
                  interconnect, delivering efficient call routing, transparent
                  billing and settlement, and carrier-grade quality for local
                  and international traffic. We simplify interconnection so
                  operators can grow, subscribers stay connected, and
                  Nigeria&apos;s telecom economy thrives.&rdquo;
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values Accordion */}
        <div>
          <div className="flex justify-center mb-16">
            <span className="inline-block bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              Core Values
            </span>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto flex flex-col gap-4"
          >
            {coreValues.map((value, index) => (
              <AccordionItem
                key={index}
                value={value}
                isOpen={openValue === index}
                onToggle={() =>
                  setOpenValue(openValue === index ? null : index)
                }
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
