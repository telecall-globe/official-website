"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const containerVariants: Variants = {
  closed: {},
  open: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  closed: {
    opacity: 0,
    y: 30,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="relative z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-[60] flex items-center"
            onClick={closeMobileMenu}
          >
            <Image
              src="/img/telecall-logo.png"
              alt="Telecall Globe Communications Limited"
              width={213}
              height={65}
              className="h-auto w-[300px] sm:w-[195px]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative py-2 text-sm font-medium text-[#636363] transition-colors duration-300 hover:text-[#25447B]"
              >
                {link.name}

                {/* <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#25447B] transition-all duration-300 group-hover:w-full" /> */}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-lg bg-[#25447B] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d3765] hover:shadow-lg hover:shadow-[#25447B]/20"
            >
              Talk to Sales
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:border-[#25447B] hover:text-[#25447B] md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 flex min-h-screen flex-col bg-white md:hidden"
          >
            {/* Decorative background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#25447B]/5 blur-3xl" />
              <div className="absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
            </div>

            {/* Menu Content */}
            <motion.div
              variants={containerVariants}
              initial="closed"
              animate="open"
              className="relative flex flex-1 flex-col px-6 pb-8 pt-28 sm:px-10"
            >
              {/* Small heading */}
              <motion.div
                variants={itemVariants}
                className="mb-8 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-[#25447B]" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#25447B]">
                  Navigation
                </span>
              </motion.div>

              {/* Navigation Links */}
              <nav className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    variants={itemVariants}
                    className="border-b border-slate-100"
                  >
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="group flex items-center justify-between py-5"
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-xs font-medium text-slate-400">
                          0{index + 1}
                        </span>

                        <span className="text-3xl font-medium tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-[#25447B] sm:text-4xl">
                          {link.name}
                        </span>
                      </span>

                      <ArrowUpRight className="h-6 w-6 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#25447B]" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTA */}
              <motion.div variants={itemVariants} className="mt-auto pt-8">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="group flex w-full items-center justify-between rounded-xl bg-[#25447B] px-6 py-5 text-white transition-all duration-300 hover:bg-[#1d3765]"
                >
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                      Ready to connect?
                    </p>

                    <p className="mt-1 text-lg font-semibold">Talk to Sales</p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </Link>
              </motion.div>

              {/* Footer text */}
              <motion.div
                variants={itemVariants}
                className="mt-6 flex items-center justify-between text-xs text-slate-400"
              >
                <span>Telecall Globe Communications Limited</span>
                <span>© {new Date().getFullYear()}</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
