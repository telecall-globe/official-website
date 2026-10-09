"use client";

import { useEffect, useState } from "react";
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
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const containerVariants: Variants = {
  closed: {},
  open: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  closed: {
    opacity: 0,
    y: 15,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="mx-auto flex h-19.5 xl:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="relative z-60 flex items-center"
            onClick={closeMobileMenu}
          >
            <Image
              src="/img/telecall-logo.png"
              alt="Telecall Globe Communications Limited"
              width={213}
              height={65}
              className="h-auto w-50 sm:w-55 ml-0 sm:-ml-1 mb-.5"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative py-2 text-sm font-medium text-[#636363] transition-colors duration-300 hover:text-[#25447B]"
              >
                {link.name}

                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#25447B] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-lg bg-[#25447B] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#1d3765]"
            >
              Talk to Sales
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="relative z-60 flex h-10 w-10 items-center justify-center text-slate-700 md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <motion.div
              variants={containerVariants}
              initial="closed"
              animate="open"
              className="flex h-full flex-col px-6 pb-8 pt-27.5 sm:px-10"
            >
              <motion.p
                variants={itemVariants}
                className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[#25447B]"
              >
                Menu
              </motion.p>

              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={itemVariants}
                    className="border-b border-slate-100"
                  >
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="group flex items-center justify-between py-4"
                    >
                      <span className="text-2xl font-medium tracking-tight text-slate-800 transition-colors duration-300 group-hover:text-[#25447B]">
                        {link.name}
                      </span>

                      <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#25447B]" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div variants={itemVariants} className="mt-auto">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="group flex w-full items-center justify-between rounded-lg bg-[#25447B] px-5 py-4 text-white transition-colors duration-300 hover:bg-[#1d3765]"
                >
                  <span className="text-sm font-medium">Talk to Sales</span>

                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <p className="mt-5 text-xs text-slate-400">
                  Telecall Globe Communications Limited
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
