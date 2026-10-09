"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export function TrustedPartnerSection() {
  return (
    <section className="relative w-full py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/img/hero-background.png')] bg-center bg-blend-overlay text-white overflow-hidden bg-cover bg-no-repeat  bg-linear-to-br from-[#3B5B78] to-[#2B3A67] z-0" />

      <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          <motion.div
            variants={fadeUp}
            className="relative w-full max-w-7xl aspect-video sm:aspect-2.5/1 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/img/team/about-us-hero-img.jpg"
                alt="Telecall Globe Team"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </motion.div>

          <div className="w-full max-w-7xl mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl md:text-3xl font-bold text-white leading-tight text-center lg:text-left"
            >
              A Trusted Partner for <br className="hidden lg:block" />
              Telecommunications Connectivity
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/90 text-base sm:text-base leading-relaxed text-center lg:text-left lg:pt-2"
            >
              Telecall Globe Communications Ltd is a wholly Nigerian-owned
              telecommunications company licensed to provide Local Interconnect
              Exchange, International Data Access (IDA) services and Value Added
              Services (VAS).
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
