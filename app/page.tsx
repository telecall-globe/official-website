import { HeroSection } from "@/components/home/HeroSection";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhoWeServeSection } from "@/components/home/WhoWeServeSection";
import { WhyTelecallSection } from "@/components/home/WhyTelecallSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white">
      <HeroSection />
      <WhoWeAreSection />
      <ServicesSection />
      <WhoWeServeSection />
      <WhyTelecallSection />
      <TestimonialSection />
      <PartnersSection />
      <CTASection
        title={
          <>
            Looking for a Reliable <br className="hidden sm:block" />{" "}
            Interconnection Partner?
          </>
        }
        description="Whether you need operator access, interconnectivity, or international traffic solutions, our team can help you find the right fit for your business."
        buttonText="Talk to Telecall"
        buttonLink="/contact"
      />
    </div>
  );
}
