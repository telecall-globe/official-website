"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

const partnerLogos = [
  { name: "Airtel", src: "/img/partners/white/airtel-logo.png" },
  { name: "MTN", src: "/img/partners/white/mtn_group_logo.png" },
  { name: "Glo", src: "/img/partners/white/glo-white.png" },
  { name: "T2", src: "/img/partners/white/t2mobile-white.png" },
  { name: "Big Picture", src: "/img/partners/white/bigpicture-white.png" },
  { name: "Cedarview", src: "/img/partners/white/cedarview-white.png" },
];

export function HeroSection() {
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="relative w-full bg-linear-to-br from-[#3B5B78] to-[#2B3A67] bg-[url('/img/hero-background.png')] bg-cover bg-center bg-blend-overlay text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 lg:pt-8 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
          >
            Connecting Networks. <br />
            Enabling Seamless Communication.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-200 mb-8 max-w-lg"
          >
            Reliable connectivity and international data solutions for seamless
            voice, SMS, and data traffic across borders.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="cursor-pointer group bg-white text-[#2B3A67] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="cursor-pointer border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
            >
              Talk to our Team
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-75 lg:h-125 flex items-center justify-center"
        >
          <Image
            alt="Global Network Connectivity Map"
            src="/svg/hero-img.svg"
            width={600}
            height={400}
            className="w-full h-auto object-contain max-w-md lg:max-w-full"
            priority
          />
        </motion.div>

        <div className="col-span-full mt-12 lg:mt-16 relative w-full overflow-hidden">
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            }}
          />

          <motion.div
            className="flex gap-16 sm:gap-24 items-center w-max"
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="shrink-0 flex items-center justify-center h-6 sm:h-8 min-w-25"
              >
                <Image
                  alt={`${logo.name} Logo`}
                  src={logo.src}
                  width={100}
                  height={50}
                  className="h-full w-auto object-contain opacity-100 hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
