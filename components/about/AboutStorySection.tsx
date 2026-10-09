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
    transition: { staggerChildren: 0.12 },
  },
};

export function AboutStorySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div className="order-2 lg:order-1 space-y-8">
            <motion.p
              variants={fadeUp}
              className="text-slate-700 text-base sm:text-lg leading-relaxed"
            >
              We were established to solve the two biggest challenges in the
              Nigerian telecom industry: inefficient local interconnection and
              expensive, low-quality international transit.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-slate-700 text-base sm:text-lg leading-relaxed"
            >
              As an Interconnect Clearinghouse, we provide the neutral platform
              where all licensed operators - Mobile Network Operators (MNOs),
              Fixed Operators, ISPs, VAS providers and LTE operators - can
              interconnect and exchange traffic efficiently, with 100%
              transparent billing and prompt settlement.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-slate-700 text-base sm:text-lg leading-relaxed"
            >
              As an International Carrier, we operate as Nigeria&apos;s gateway
              to the world. We terminate high-quality inbound international
              traffic into Nigeria and provide competitive, direct A-Z outbound
              termination from Nigeria to over 240 destinations globally.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="order-1 lg:order-2 relative w-full 
                       aspect-4/3 
                       lg:aspect-3/2 
                       rounded-2xl overflow-hidden 
                       bg-slate-100 shadow-sm"
          >
            <Image
              src="/img/team/team-collaboration.jpg"
              alt="Telecall Globe team collaborating"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
