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
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export function LifeAtTelecallSection() {
  return (
    <section className="pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
         <div className="order-2 lg:order-1">
            <motion.span
              variants={fadeUp}
              className="inline-block bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6"
            >
              Life at Telecall
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8"
            >
              Be Part of the Infrastructure <br className="hidden lg:block" />
              Behind Connectivity
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed"
            >
              <p>
                Telecommunications depends on more than the networks people see
                and use every day. It also depends on the infrastructure,
                technology and people working behind the scenes to keep those
                networks connected.
              </p>
              <p>
                Working at Telecall means contributing to a business operating
                within Nigeria&apos;s telecommunications ecosystem and being
                part of the work that keeps critical connections moving.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="order-1 lg:order-2 relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 shadow-sm"
          >
            <Image
              src="/img/career.jpg" 
              alt="Telecall Globe team members collaborating on site"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
