"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import Image from "next/image";

// --- Animation Variants ---
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

// --- Data Structure ---
interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string; // The brief bio shown in the popup
  enablePopup?: boolean; // The flag you requested
}

const managementData: TeamMember[] = [
  {
    name: "Ali Musa",
    role: "General Manager",
    image: "/img/team/ali-musa.jpg",
    bio: "Ali brings over 15 years of experience in telecommunications infrastructure and interconnect operations. He oversees Telecall's strategic direction and daily operations.",
    enablePopup: true, // Set to true to enable the popup
  },
  {
    name: "Helena-Isaac Ededho",
    role: "Business Development Manager",
    image: "/img/team/helena-isaac.jpg",
    bio: "Helena leads our business development initiatives, forging strategic partnerships with operators and service providers across Nigeria to expand our network reach.",
    enablePopup: true,
  },
  {
    name: "Sefinat Ayegun",
    role: "Billing Manager",
    image: "/img/team/sefinat-ayegun.jpg",
    bio: "Sefinat manages the centralized billing and settlement systems, ensuring accuracy, efficiency, and timely resolution of all interconnect billing transactions.",
    enablePopup: true,
  },
  {
    name: "Nonso Uzoukwu",
    role: "Engineering Manager",
    image: "/img/team/nonso-uzoukwu.jpg",
    bio: "Nonso heads our engineering team, ensuring our infrastructure remains robust, secure, and capable of handling high-volume traffic exchanges seamlessly.",
    enablePopup: true,
  },
];

const teamData: TeamMember[] = [
  {
    name: "Dare Akinwumi",
    role: "Accountant (Finance Department)",
    image: "/img/team/dare-akinwumi.jpg",
    bio: "Dare oversees financial reporting, reconciliations, and internal controls, ensuring Telecall's financial operations remain compliant and transparent.",
    enablePopup: true,
  },
  {
    name: "Chidi Nweke",
    role: "Analyst (Billing Department)",
    image: "/img/team/chidi-nweke.jpg",
    bio: "Chidi analyzes billing data and traffic records, identifying discrepancies and ensuring accurate reconciliation for our operator partners.",
    enablePopup: true,
  },
  {
    name: "Geaser Anyabosi",
    role: "Legal and Regulatory",
    image: "/img/team/geaser-anyabosi.jpg",
    bio: "Geaser ensures Telecall's operations comply with Nigerian telecommunications laws, NDPA regulations, and all applicable regulatory frameworks.",
    enablePopup: true,
  },
];

// --- Reusable Member Card Component ---
function TeamMemberCard({ member }: { member: TeamMember }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        variants={fadeUp}
        className="group flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
      >
        {/* Image Container */}
        <div className="relative w-full aspect-[4/5] bg-slate-100 overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info Container */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
          <p className="text-sm text-slate-500 mb-6">{member.role}</p>

          {/* Conditional Button based on the flag */}
          {member.enablePopup && (
            <button
              onClick={() => setIsOpen(true)}
              className="cursor-pointer mt-auto self-start inline-flex items-center gap-2 text-sm font-semibold text-[#2B3A67] group-hover:text-[#3B5B78] transition-colors"
            >
              Read More
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          )}
        </div>
      </motion.div>

      {/* --- Modal Popup --- */}
      <AnimatePresence>
        {isOpen && member.enablePopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur rounded-full text-slate-500 hover:text-slate-900 hover:bg-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row">
                {/* Modal Image */}
                <div className="relative w-full sm:w-2/5 aspect-square sm:aspect-auto sm:h-auto bg-slate-100 shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Modal Text */}
                <div className="p-8 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-[#3B5B78] mb-6">
                    {member.role}
                  </p>
                  <div className="text-slate-600 leading-relaxed text-sm">
                    {member.bio}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

// --- Main Section Component ---
export function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Management Block --- */}
        <div className="mb-24">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="inline-block bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6">
              Our Management
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Experienced Leadership. Clear Direction.
            </h2>
            <p className="text-slate-600 max-w-2xl text-base leading-relaxed">
              Telecall is guided by a leadership team committed to building
              reliable telecommunications infrastructure and delivering
              efficient connectivity solutions.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {managementData.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </motion.div>
        </div>

        {/* --- Team Block --- */}
        <div>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="inline-block bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The People Behind the Network.
            </h2>
            <p className="text-slate-600 max-w-2xl text-base leading-relaxed">
              Our dedicated team of professionals works tirelessly to ensure our
              infrastructure remains reliable, secure, and efficient for all our
              partners.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {teamData.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
