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
    transition: { staggerChildren: 0.15 },
  },
};

interface CTASectionProps {
  title: React.ReactNode; 
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc?: string; 
}

export function CTASection({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc = "/img/globe.png", 
}: CTASectionProps) {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative max-w-6xl bg-linear-to-r from-[#556795] to-[#49A1B6] rounded-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="p-8 sm:p-12 lg:p-16 relative z-10 flex-1 max-w-2xl text-center lg:text-left">
            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/80 text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex justify-center lg:justify-start"
            >
              <Link
                href={buttonLink}
                className="cursor-pointer group inline-flex items-center gap-2 bg-white text-[#2B3A67] px-6 py-3 rounded-md font-bold text-sm hover:bg-gray-100 transition-all duration-300"
              >
                {buttonText}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative w-full max-w-50 sm:max-w-70 lg:max-w-87.5 aspect-square shrink-0"
          >
            <Image
              src={imageSrc}
              alt="CTA Graphic"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>

         <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/5 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
