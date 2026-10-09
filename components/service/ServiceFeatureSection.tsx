"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

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

interface ServiceFeatureProps {
  id: string;
  label: string;
  title: string;
  description: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
  children?: React.ReactNode;
}

export function ServiceFeatureSection({
  id,
  label,
  title,
  description,
  imageSrc,
  imageAlt = "Service Image",
  reverse = false,
  children,
}: ServiceFeatureProps) {
  return (
    <section id={id} className="pt-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16`}
        >
          <div
            className={`flex flex-col ${reverse ? "lg:order-2" : "lg:order-1"}`}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-xs font-semibold tracking-wide mb-6 self-start"
            >
              {label}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight"
            >
              {title}
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="space-y-4 text-slate-600 text-base leading-relaxed"
            >
              {description}
            </motion.div>
          </div>

          {imageSrc && (
            <motion.div
              variants={fadeUp}
              className={`relative h-75 lg:h-112.5 w-full rounded-2xl overflow-hidden shadow-sm ${reverse ? "lg:order-1" : "lg:order-2"}`}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                loading = "eager"
              />
            </motion.div>
          )}
        </motion.div>

        {children && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-16"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
