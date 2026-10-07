import type { Metadata } from "next";
import localFont from "next/font/local";
import { Questrial, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const centuryGothic = localFont({
  src: [
    {
      path: "./fonts/centurygothic.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/centurygothic_bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-century-gothic",
});

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Telecall Globe Communications Limited - Official Website",
  description:
    "Nigerian-owned telecommunications company licensed to provide Local Interconnect Exchange and International Data Access (IDA) services.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${centuryGothic.className} ${questrial.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
