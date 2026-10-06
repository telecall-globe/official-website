import Link from "next/link";
import { Globe } from "lucide-react";
import { SiInstagram, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#3B5B78] to-[#2B3A67] text-white">
      {/* Background Watermark */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 select-none text-[200px] font-bold text-white/5">
        Telecall
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Globe className="h-10 w-10 text-white" />
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none">
                  Telecall Globe
                </span>
                <span className="text-sm text-gray-300">
                  Communication limited
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-300">
              Connecting Nigeria to the world through reliable interconnectivity
              and data access solutions.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/board"
                  className="text-sm transition-colors hover:text-white"
                >
                  Our Board
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm transition-colors hover:text-white"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/value-added"
                  className="text-sm transition-colors hover:text-white"
                >
                  Value Added Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/interconnectivity"
                  className="text-sm transition-colors hover:text-white"
                >
                  Interconnectivity
                </Link>
              </li>
              <li>
                <Link
                  href="/services/data"
                  className="text-sm transition-colors hover:text-white"
                >
                  International Data Access
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm transition-colors hover:text-white"
                  >
                    Terms and Condition
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Connect
            </h3>
            <ul className="mb-6 space-y-3">
              <li>
                <a
                  href="mailto:info@telecall.ng"
                  className="text-sm transition-colors hover:text-white"
                >
                  info@telecall.ng
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@telecall.ng"
                  className="text-sm transition-colors hover:text-white"
                >
                  contact@telecall.ng
                </a>
              </li>
              <li>
                <a
                  href="mailto:businessdev@telecall.ng"
                  className="text-sm transition-colors hover:text-white"
                >
                  businessdev@telecall.ng
                </a>
              </li>
            </ul>

            {/* Social Icons using react-icons */}
            <div className="flex gap-4">
              <Link
                href="#"
                aria-label="Instagram"
                className="transition-colors hover:text-gray-300"
              >
                <SiInstagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter / X"
                className="transition-colors hover:text-gray-300"
              >
                <SiX className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="transition-colors hover:text-gray-300"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-gray-300">
          <p className="mb-2">
            Licensed by the Nigerian Communications Commission (NCC) to provide
            and operate Interconnect Exchange and International Data Access
            (IDA) Services in Nigeria.
          </p>
          <p>© {currentYear} Telecall Globe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
