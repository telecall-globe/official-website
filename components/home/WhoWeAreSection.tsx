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

export function WhoWeAreSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-16">
          <span className="inline-block bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
            Who are we
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="order-1 lg:order-1"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight"
            >
              A Reliable Link Between Telecommunications Networks
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="space-y-6 text-slate-600 text-base leading-relaxed mb-8"
            >
              <p>
                Telecall Globe Communications Limited is a limited liability
                company registered in Nigeria, with its head office in Lagos.
              </p>
              <p>
                We are a Carrier&apos;s Carrier. We do not compete for
                subscribers with MTN, Airtel, Glo, or 9mobile. Our clients are
                the operators. We provide wholesale infrastructure and services
                that make their business more profitable and efficient.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link
                href="/about"
                className="cursor-pointer group inline-flex items-center gap-2 bg-[#25447B] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1f2b4c] transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-2 relative flex justify-center items-center h-[400px] sm:h-[500px] w-full"
          >
            <Image
              src="/img/who-we-are.png"
              alt="Who We Are Graphic"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
