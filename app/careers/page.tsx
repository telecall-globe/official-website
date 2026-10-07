import React from "react";
import { CTASection } from "@/components/CTASection";

const page = () => {
  return (
    <div>
      <div>
        Career Page
      </div>
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
