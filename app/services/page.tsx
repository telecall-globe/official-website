import React from "react";
import { CTASection } from "@/components/CTASection";

const page = () => {
  return (
    <div>
      {" "}
      <CTASection
        title={<>Ready to connect?</>}
        description="Whether you need interconnectivity, international data access or VAS aggregation solutions, our team is ready to discuss your requirements."
        buttonText="Talk to Telecall"
        buttonLink="/contact"
      />
    </div>
  );
};

export default page;
