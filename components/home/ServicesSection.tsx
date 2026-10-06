"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

// --- Placeholder Data ---
// Replace image paths with your actual assets
const servicesData = [
  {
    title: "Interconnectivity",
    description:
      "Connect to multiple telecommunications operators through a single interconnection point. Telecall provides the infrastructure and capacity required to route voice, SMS and data traffic across different networks and protocols.",
    image: "/img/services/interconnectivity.jpg",
    link: "/services/interconnectivity",
    cta: "Explore Interconnectivity",
  },
  {
    title: "International Data Access",
    description:
      "Telecall provides direct connectivity to Nigerian operators for the termination of international traffic, supporting reliable voice routes and efficient traffic billing and settlement.",
    image: "/img/services/data-access.jpg",
    link: "/services/data",
    cta: "Explore International Data Access",
  },
  {
    title: "Value Added Services (VAS)",
    description:
      "Telecall provides connectivity and aggregation capabilities that help service providers access and deliver value-added telecommunications services through operator networks.",
    image: "/img/services/vas.jpg",
    link: "/services/value-added",
    cta: "Explore VAS Aggregation",
  },
];

export function ServicesSection() {
  return (
    <section className="pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-block bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-6"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 max-w-2xl leading-tight"
          >
            Infrastructure That Keeps Networks Connected
          </motion.h2>
        </div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-[#F8FAFC] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full bg-slate-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Button Link */}
                <Link
                  href={service.link}
                  className="cursor-pointer group inline-flex items-center justify-center gap-2 border border-[#2B3A67] text-[#2B3A67] px-4 py-2.5 rounded-md text-sm font-medium hover:bg-[#2B3A67] hover:text-white transition-all duration-300 w-fit"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
