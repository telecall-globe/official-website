import { HeroSection } from "@/components/home/HeroSection";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhoWeServeSection } from "@/components/home/WhoWeServeSection";
import { WhyTelecallSection } from "@/components/home/WhyTelecallSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans">
      <HeroSection />
      <WhoWeAreSection />
      <ServicesSection />
      <WhoWeServeSection />
      <WhyTelecallSection />
    </div>
  );
}
