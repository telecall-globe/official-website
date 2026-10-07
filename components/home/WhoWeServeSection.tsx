"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

// --- Animation Variants ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const audienceData = [
  {
    title: "Telecommunications Operators",
    description:
      "Supporting connectivity between local telecommunications networks and enabling efficient exchange of voice, SMS and data traffic.",
    image: "/img/serve/telecom-operators.png",
  },
  {
    title: "International data access",
    description:
      "Providing connectivity into Nigerian operator networks for international traffic termination and related telecommunications services.",
    image: "/img/serve/international-data.png",
  },
  {
    title: "Content & VAS Providers",
    description:
      "Supporting connectivity and routing requirements for providers delivering value-added telecommunications services.",
    image: "/img/serve/vas-providers.png",
  },
];

export function WhoWeServeSection() {
  return (
    <section className="w-full py-24 bg-[#556795] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-1"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6"
            >
              Who we serve
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold leading-tight"
            >
              Built for the Telecommunications Ecosystem
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-2 flex items-end-safe h-full pt-2 lg:pt-16"
          >
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Telecall Globe works with telecommunications operators and service
              providers that require reliable connectivity, traffic routing and
              interconnection infrastructure.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {audienceData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex flex-col group"
            >
              <div className="relative h-56 w-full rounded-lg overflow-hidden mb-6 bg-black/20">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
