import React from "react";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { LifeAtTelecallSection } from "@/components/careers/LifeAtTelecallSection";
import { JoinTheTeamSection } from "@/components/careers/JoinTheTeamSection";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHero
        title="Careers at Telecall"
        subtitle="Join Telecall Globe and help build the interconnection platform that keeps Nigeria's telecommunications networks, and the businesses that rely on them running smoothly"
      />
      <LifeAtTelecallSection />
      <JoinTheTeamSection />
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
};

export default page;
