"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  }),
};

const testimonialsData = [
  {
    quote:
      "Telecall has helped us simplify our interconnect operations and maintain reliable traffic routes across our network.",
    name: "Michael Adeyemi",
    role: "HOD Network Operations, ApexTel",
  },
  {
    quote:
      "Their centralized billing and settlement process has drastically reduced our reconciliation time. A truly reliable partner.",
    name: "Chioma Okafor",
    role: "Finance Director, ConnectWave",
  },
  {
    quote:
      "We needed a seamless interconnection point to expand our VAS offerings, and Telecall delivered beyond our expectations.",
    name: "Ibrahim Musa",
    role: "CEO, GlobalCom Solutions",
  },
  {
    quote:
      "The flexibility in their interconnection services allows us to route both voice and data traffic without any hitches.",
    name: "Funke Akindele",
    role: "CTO, LinkUp Telecom",
  },
  {
    quote:
      "Their technical team is incredibly responsive. Dispute resolution that used to take weeks now happens in days.",
    name: "David Okon",
    role: "Operations Manager, SwiftNet",
  },
  {
    quote:
      "Telecall's infrastructure has provided the stability we needed for international data termination. Highly recommended.",
    name: "Aisha Bello",
    role: "Head of Wholesale, NextGen Telecom",
  },
];

export function TestimonialSection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => {
      let newPage = prevPage + newDirection;
      if (newPage < 0) newPage = testimonialsData.length - 1;
      if (newPage >= testimonialsData.length) newPage = 0;
      return [newPage, newDirection];
    });
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 6000);

    return () => clearInterval(timer);
  }, [page, isAutoPlaying]);

  const currentTestimonial = testimonialsData[page];

  return (
    <section className="w-full py-24 bg-[#4A7C82] text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="inline-block bg-white text-[#4A7C82] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-8"
        >
          What our Clients say
        </motion.span>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex justify-center gap-2 mb-10"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          ))}
        </motion.div>

        <div
          className="relative w-full min-h-75 sm:min-h-62.5 flex items-center justify-center"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <Quote className="w-8 h-8 mx-auto mb-6 opacity-30 text-white" />

              <blockquote className="text-2xl md:text-3xl font-medium leading-snug mb-8 max-w-3xl">
                &quot;{currentTestimonial.quote}&quot;
              </blockquote>

              <div>
                <div className="font-bold text-lg">
                  {currentTestimonial.name}
                </div>
                <div className="text-white/70 text-sm mt-1">
                  {currentTestimonial.role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-6 mt-12">
          <button
            onClick={() => paginate(-1)}
            className="cursor-pointer p-3 rounded-full border border-white/30 hover:bg-white hover:text-[#4A7C82] transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
          </button>

          <div className="flex gap-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setPage([index, index > page ? 1 : -1])}
                className={`cursor-pointer transition-all duration-300 rounded-full ${
                  index === page
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="cursor-pointer p-3 rounded-full border border-white/30 hover:bg-white hover:text-[#4A7C82] transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
