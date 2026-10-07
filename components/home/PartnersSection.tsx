"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

// --- Animation Variants ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const row1Logos = [
  { name: "MTN", src: "/img/partners/MTN-Logo.svg" },
  { name: "Glo", src: "/img/partners/Globacom-Limited-Logo.svg" },
  { name: "Airtel", src: "/img/partners/Airtel-Nigeria-Logo.svg" },
  {
    name: "T2",
    src: "/img/partners/T2 MOBILE EMERGING MARKETS TELECOMMUNICATIONS SERVICES LTD (FORMERLY 9MOBILE).png",
  },
  {
    name: "Ultranet",
    src: "/img/partners/ultranet-logo1.png",
  },
  {
    name: "Realife",
    src: "/img/partners/REALIFE TELECOMMUNICATIONS LIMITED.png",
  },
  { name: "Ratel", src: "/img/partners/RATEL PLUS NIGERIA LTD.png" },
  { name: "Bigpicture", src: "/img/partners/BIGPICTURE NIGERIA LIMITED .png" },
];

const row2Logos = [
  {
    name: "Broadbased",
    src: "/img/partners/BROADBASEDCOMMUNICATIONSLIMITED .png",
  },
  {
    name: "BrowsePoint",
    src: "/img/partners/BROWSEPOINT TELECOM NIGERIA LIMITED.png",
  },
  { name: "Cyberspace", src: "/img/partners/Cyberspace Network Limited.png" },
  {
    name: "Routecall",
    src: "/img/partners/ROUTECALL COMMUNICATIONS LIMITED .jpeg",
  },
  { name: "Interra Networks", src: "/img/partners/INTERRANETWORKSLTD.svg" },
  { name: "Tizeti", src: "/img/partners/TIZETI NETWORK LIMITED.png" },
  { name: "Emcatel", src: "/img/partners/EMCATEL NETWORKS LIMITED.webp" },
  { name: "ITsky", src: "/img/partners/ITSKY SOLUTIONS LTD.png" },
];

const row3Logos = [
  { name: "ipNX", src: "/img/partners/ipNX NIGERIA LIMITED.png" },
  { name: "Vezeti", src: "/img/partners/VEZETI.png" },
  {
    name: "Myd Telecoms",
    src: "/img/partners/MYD TELECOMMUNICATION LIMITED.jpeg",
  },
  { name: "Cedarview", src: "/img/partners/CEDARVIEW COMMUNICATIONS LTD .png" },
  {
    name: "Nationwaves",
    src: "/img/partners/NATIONWAVES TELCOM NIGERIA LTD .png",
  },
  { name: "IntarVAS", src: "/img/partners/INTARVASCOMMUNICATIONS.svg" },

  { name: "Swift", src: "/img/partners/SWIFT TELEPHONE NETWORK LIMITED .png" },
  { name: "Briclinks", src: "/img/partners/BRICLINKSAFRICAPLC.png" },
];

// --- Reusable Marquee Row Component ---
const MarqueeRow = ({
  logos,
  direction = "left",
  duration = 40,
}: {
  logos: {
    name: string;
    src: string;
  }[];
  direction?: "left" | "right";
  duration?: number;
}) => {
  // We duplicate the logos (3 times) to ensure there is enough content to fill ultra-wide screens without gaps
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="flex overflow-hidden w-full relative py-4">
      <motion.div
        className="flex whitespace-nowrap items-center gap-16 sm:gap-24 px-8"
        animate={{
          // Animate x to -33.33% because we have 3 copies. This creates a perfect seamless loop.
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear", // Linear is crucial for a non-stop smooth ticker
          duration: duration,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            // Fixed width ensures logos are never squeezed.
            // shrink-0 prevents them from collapsing.
            className="shrink-0 flex items-center justify-center w-[120px] sm:w-[160px] h-12 sm:h-16"
          >
            <Image
              src={logo.src}
              alt={`${logo.name} Logo`}
              width={160}
              height={80}
              // object-contain ensures the logo keeps its aspect ratio
              // grayscale and opacity make the wall look uniform and clean
              className="w-full h-full object-contain transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export function PartnersSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
        >
          Trusted by Industry Participants
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-slate-600 max-w-2xl mx-auto text-lg"
        >
          Our growing network of clients reflects our role within Nigeria&apos;s
          telecommunications ecosystem.
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex flex-col gap-4 sm:gap-8 w-full max-w-[100vw]">
        {/* 
          Self-Fading Mask: This uses a CSS mask to fade the entire row at the edges.
          This makes the logos themselves fade out smoothly instead of being cut off.
        */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        />

        {/* Row 1: Scrolls Left */}
        <MarqueeRow logos={row1Logos} direction="left" duration={100} />

        {/* Row 2: Scrolls Right */}
        <MarqueeRow logos={row2Logos} direction="right" duration={90} />

        {/* Row 3: Scrolls Left */}
        <MarqueeRow logos={row3Logos} direction="left" duration={100} />
      </div>
    </section>
  );
}
