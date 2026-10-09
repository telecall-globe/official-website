"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const candidateTraits = [
  {
    title: "Problem Solvers",
    description:
      "People who approach challenges thoughtfully and look for practical solutions.",
  },
  {
    title: "Learners",
    description:
      "People who are willing to develop their knowledge and keep up with changing technology and industry requirements.",
  },
  {
    title: "Team Players",
    description:
      "People who communicate clearly, collaborate effectively and contribute to shared goals.",
  },
  {
    title: "Professionals",
    description:
      "People who take ownership of their responsibilities and maintain high standards in their work.",
  },
];

export function JoinTheTeamSection() {
  return (
    <>
       <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="flex flex-col items-center text-center mb-16">
              <motion.span
                variants={fadeUp}
                className="inline-block bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6"
              >
                Join the Team
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 max-w-2xl"
              >
                People Who Are Ready to Make an Impact
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-slate-600 max-w-2xl text-base leading-relaxed"
              >
                We are looking for people who bring strong skills, curiosity and
                a willingness to solve problems in a fast-moving
                telecommunications environment.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {candidateTraits.map((trait, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="group relative bg-[#556795] rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-3 h-3 rounded-full bg-white/60 mb-6 transition-all duration-300 group-hover:bg-white group-hover:scale-110" />

                  <h3 className="text-white font-bold text-lg mb-3">
                    {trait.title}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    {trait.description}
                  </p>

                  <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

       <section className="relative w-full bg-gradient-to-br from-[#4d808c] to-[#556795] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="relative w-16 h-16 mx-auto mb-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75" />
              <div className="relative w-8 h-8 rounded-full bg-white/40 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              No Open Positions Right Now
            </h3>
            <p className="text-white/85 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              We don&apos;t have any open positions at the moment, but
              we&apos;re always interested in meeting talented people. Send us
              your CV and we&apos;ll keep your details in mind for future
              opportunities.
            </p>

            <Link
              href="/contact"
              className="cursor-pointer group inline-flex items-center gap-2 bg-white text-[#556795] px-6 py-3 rounded-md font-bold text-sm hover:bg-gray-50 transition-all duration-300"
            >
              Submit Your CV
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
