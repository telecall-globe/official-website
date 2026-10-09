"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

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
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const roleImages = [
  {
    src: "/img/team/role1.png",
    alt: "Network technician working on equipment",
  },
  {
     src: "/img/team/role2.png",
    alt: "Engineer installing hardware components",
  },
  {
     src: "/img/team/role3.png",
    alt: "Fibre optic cable infrastructure",
  },
];

export function OurRoleSection() {
  return (
    <section className="relative w-full py-24 bg-[#556795] overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 mb-16">
            <div className="w-full lg:w-1/2">
              <motion.span
                variants={fadeUp}
                className="inline-block bg-white text-[#556795] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-8"
              >
                Our Role
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-bold text-white leading-tight"
              >
                Making Network-to-Network Connectivity More Efficient
              </motion.h2>
            </div>

            <motion.div
              variants={fadeUp}
              className="w-full lg:w-1/2 lg:pt-16 space-y-4"
            >
              <p className="text-white/90 text-base leading-relaxed">
                Telecommunications networks need reliable ways to exchange
                voice, SMS and data traffic with other networks and service
                providers. As the number of connections, agreements and
                transactions increases, managing these relationships can become
                complex.
              </p>
              <p className="text-white/90 text-base leading-relaxed">
                Telecall provides an interconnection platform that helps
                simplify this complexity.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roleImages.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
