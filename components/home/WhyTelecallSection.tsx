"use client";

import { motion, Variants } from "framer-motion";
import {
  Wifi,
  Layers,
  Radio,
  FileCheck,
  Headphones,
  Antenna,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const featuresData = [
  {
    icon: <Wifi className="w-8 h-8 text-[#3B5B78]" strokeWidth={1.5} />,
    title: "One Connection, Multiple Networks",
    description:
      "Connect to multiple operators through a single interconnection point, reducing the complexity of maintaining separate connections.",
  },
  {
    icon: <Layers className="w-8 h-8 text-[#3B5B78]" strokeWidth={1.5} />,
    title: "Simplified Operations",
    description:
      "Maintain and monitor a single connection instead of managing multiple operator connections independently.",
  },
  {
    icon: <Radio className="w-8 h-8 text-[#3B5B78]" strokeWidth={1.5} />,
    title: "Flexible Interconnection",
    description:
      "Support a wide range of interconnection services and protocols, enabling seamless connectivity across voice, SMS, and data traffic.",
  },
  {
    icon: <FileCheck className="w-8 h-8 text-[#3B5B78]" strokeWidth={1.5} />,
    title: "Centralized Billing & Settlement",
    description:
      "Simplify payment and billing reconciliation through a single interconnection partner.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-[#3B5B78]" strokeWidth={1.5} />,
    title: "Efficient Dispute Resolution",
    description:
      "Streamline the resolution of billing and transaction disputes through a centralized relationship.",
  },
  {
    icon: <Antenna className="w-8 h-8 text-[#3B5B78]" strokeWidth={1.5} />,
    title: "Reliable Connectivity",
    description:
      "Infrastructure designed to support dependable interconnection and efficient traffic exchange.",
  },
];

export function WhyTelecallSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-block bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6"
          >
            Why Telecall?
          </motion.span>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-slate-900 max-w-3xl leading-tight"
          >
            One Connection. Multiple Possibilities.
          </motion.h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="p-8 rounded-xl bg-[#F0F9F6] transition-all duration-300 hover:bg-[#E6F4EE] hover:-translate-y-1 hover:shadow-sm"
            >
              <div className="mb-6">{feature.icon}</div>

              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
