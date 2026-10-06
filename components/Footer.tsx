import Link from "next/link";
import { SiInstagram, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-linear-to-br from-[#3B5B78] to-[#2B3A67] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 sm:-bottom-20 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[120px] font-bold tracking-tight text-white/[0.025] sm:text-[160px] lg:text-[200px]"
      >
        Telecall Globe
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          <div>
            <Link href="/" className="inline-flex">
              <Image
                src="/svg/telecall-logo-footer.svg"
                alt="Telecall Globe Logo"
                width={200}
                height={200}
                className="h-auto w-45"
              />
            </Link>

            {/* <p className="mt-5 max-w-xs text-sm leading-6 text-gray-300">
              Connecting Nigeria to the world through reliable interconnectivity
              and data access solutions.
            </p> */}
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-gray-300">
              Company
            </h3>

            <ul className="space-y-3.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-200 transition-colors duration-300 hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/about#team"
                  className="text-sm text-gray-200 transition-colors duration-300 hover:text-white"
                >
                  Our Team
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="text-sm text-gray-200 transition-colors duration-300 hover:text-white"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-gray-300">
              Services
            </h3>

            <ul className="space-y-3.5">
              <li>
                <Link
                  href="/services#value-added-services"
                  className="text-sm text-gray-200 transition-colors duration-300 hover:text-white"
                >
                  Value Added Services
                </Link>
              </li>

              <li>
                <Link
                  href="/services#interconnectivity"
                  className="text-sm text-gray-200 transition-colors duration-300 hover:text-white"
                >
                  Interconnectivity
                </Link>
              </li>

              <li>
                <Link
                  href="/services#international-data-access"
                  className="text-sm text-gray-200 transition-colors duration-300 hover:text-white"
                >
                  International Data Access
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-gray-300">
              Legal
            </h3>

            <ul className="space-y-3.5">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-200 transition-colors duration-300 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-conditions"
                  className="text-sm text-gray-200 transition-colors duration-300 hover:text-white"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mt-0">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gray-300">
                Connect
              </h3>

              <div className="space-y-2">
                <a
                  href="mailto:info@telecall.ng"
                  className="block text-sm text-gray-200 transition-colors duration-300 hover:text-white"
                >
                  info@telecall.ng
                </a>

                <a
                  href="mailto:contact@telecall.ng"
                  className="block text-sm text-gray-200 transition-colors duration-300 hover:text-white"
                >
                  contact@telecall.ng
                </a>
                <a
                  href="tel:+2348030000000"
                  className="block text-sm text-gray-200 transition-colors duration-300 hover:text-white"
                >
                  +234 803 000 0000
                </a>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <SiInstagram className="h-4 w-4" />
                </Link>

                <Link
                  href="#"
                  aria-label="Twitter / X"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <SiX className="h-4 w-4" />
                </Link>

                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <FaLinkedinIn className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-7 text-center">
          <p className="mx-auto max-w-4xl text-xs leading-5 text-gray-400">
            Licensed by the Nigerian Communications Commission (NCC) to provide
            and operate Interconnect Exchange and International Data Access
            (IDA) Services in Nigeria.
          </p>

          <p className="mt-3 text-xs text-gray-400">
            © {currentYear} Telecall Globe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
