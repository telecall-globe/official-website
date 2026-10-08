import React from "react";
import { CTASection } from "@/components/CTASection";
import { TeamSection } from "@/components/about/TeamSection";

const page = () => {
  return (
    <div>
      <div>About us page</div>
      <TeamSection />
      <CTASection
        title={<>Let&apos;s Build Better Connection</>}
        description="Whether you are looking to establish interconnectivity, access Nigerian operator networks or explore telecommunications connectivity solutions, our team is ready to discuss your requirements."
        buttonText="Talk to Telecall"
        buttonLink="/contact"
      />
    </div>
  );
};

export default page;
