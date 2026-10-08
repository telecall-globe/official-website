import React from "react";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ServiceFeatureSection } from "@/components/service/ServiceFeatureSection";
import {
  Wifi,
  Layers,
  Radio,
  FileCheck,
  Headphones,
  Antenna,
} from "lucide-react";

function InfoCard({
  title,
  description,
  icon,
  color = "#000000",
  background = "#F2F5FA",
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
  background?: string;
}) {
  return (
    <div
      style={{ backgroundColor: background }}
      className="p-6 rounded-xl h-full transition-all duration-300 hover:shadow-md"
    >
      {icon && (
        <div style={{ color: color }} className="mb-4">
          {" "}
          {icon}
        </div>
      )}
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHero
        title="Infrastructure That Keeps Telecommunications Connected"
        subtitle="From local network interconnection to international traffic access, we provide the infrastructure, technology and processes required to support reliable telecommunications connectivity."
      />

      <main className="flex-1 w-full bg-white">
        {/* 2. Section 01: Interconnectivity */}
        <ServiceFeatureSection
          id="interconnectivity"
          label="01. Interconnectivity"
          title="One Connection to Multiple Networks"
          description={
            <>
              <p>
                Telecall provides interconnection infrastructure that enables
                telecommunications operators and service providers to exchange
                voice, SMS and data traffic across multiple networks.
              </p>
              <p>
                Our interconnect exchange is designed to accommodate different
                types of interconnect links, including circuit switching and
                packet switching, allowing connected parties to manage diverse
                connectivity requirements through a centralized infrastructure.
              </p>
            </>
          }
          imageSrc="/img/services/mainservice-interconnectivity.avif"
          imageAlt="Network switch with cables"
        >
          {/* Grid Cards for Interconnectivity */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              title="Reliable Voice Interconnection"
              description="Support voice traffic exchange between connected telecommunications networks through Telecall's interconnect infrastructure."
            />
            <InfoCard
              title="SMS Connectivity"
              description="Enable SMS traffic exchange across connected networks and support short-code routing and management."
            />
            <InfoCard
              title="Data Interconnection"
              description="Support data traffic exchange across connected networks and interconnection environments."
            />
          </div>
        </ServiceFeatureSection>

        {/* 3. Benefits of Interconnectivity Section (The 6-card grid) */}
        <section className="pt-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-16">
              <span className="inline-block bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                Benefit of Interconnectivity
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <InfoCard
                icon={<Wifi className="w-8 h-8" strokeWidth={1.5} />}
                title="One Connection, Multiple Networks"
                description="Connect to multiple operators through a single interconnection point, reducing the complexity of maintaining separate connections."
                color="#3E9DB3"
                background="#F4FFFC"
              />
              <InfoCard
                icon={<Layers className="w-8 h-8" strokeWidth={1.5} />}
                title="Simplified Operations"
                description="Maintain and monitor a single connection instead of managing multiple operator connections independently."
                color="#3E9DB3"
                background="#F4FFFC"
              />
              <InfoCard
                icon={<Radio className="w-8 h-8" strokeWidth={1.5} />}
                title="Flexible Interconnection"
                description="Support a wide range of interconnection services and protocols, enabling seamless connectivity across voice, SMS, and data traffic."
                color="#3E9DB3"
                background="#F4FFFC"
              />
              <InfoCard
                icon={<FileCheck className="w-8 h-8" strokeWidth={1.5} />}
                title="Centralized Billing & Settlement"
                description="Simplify payment and billing reconciliation through a single interconnection partner."
                color="#3E9DB3"
                background="#F4FFFC"
              />
              <InfoCard
                icon={<Headphones className="w-8 h-8" strokeWidth={1.5} />}
                title="Efficient Dispute Resolution"
                description="Streamline the resolution of billing and transaction disputes through a centralized relationship."
                color="#3E9DB3"
                background="#F4FFFC"
              />
              <InfoCard
                icon={<Antenna className="w-8 h-8" strokeWidth={1.5} />}
                title="Reliable Connectivity"
                description="Infrastructure designed to support dependable interconnection and efficient traffic exchange."
                color="#3E9DB3"
                background="#F4FFFC"
              />
            </div>
          </div>
        </section>

        {/* 4. Section 02: International Data Access */}
        <ServiceFeatureSection
          id="international-data-access"
          label="02. International Data Access"
          title="Direct Connectivity to Nigerian Operator Networks"
          description={
            <>
              <p>
                Telecall provides International Data Access services that enable
                direct connectivity to Nigerian telecommunications operators for
                the termination of international traffic.
              </p>
              <p>
                Through direct connectivity to Nigerian operators, Telecall
                supports international traffic termination with a focus on voice
                route quality, CLI traffic and the efficient resolution and
                settlement of traffic transactions.
              </p>
            </>
          }
          imageSrc="/img/services/mainservice-ida.jpeg"
          imageAlt="ICN VAS Service Architecture Diagram"
          reverse={true} // This flips the layout: Image Left, Text Right
        >
          {/* Grid Cards for Data Access */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard
              title="Direct Operator Connectivity"
              description="Establish direct connectivity to Nigerian telecommunications operators through Telecall."
            />
            <InfoCard
              title="International Traffic Termination"
              description="Support the termination of international traffic on Nigerian operator networks."
            />
            <InfoCard
              title="Pure CLI Traffic"
              description="100% pure CLI traffic as a feature of Telecall's direct connectivity offering."
            />
            <InfoCard
              title="Quality Voice Routes"
              description="Access voice routes positioned around the quality requirements of international traffic termination."
            />
            <InfoCard
              title="Billing Resolution"
              description="Support appropriate billing resolution for traffic transactions."
            />
            <InfoCard
              title="Traffic Settlement"
              description="Support the settlement of international traffic transactions."
            />
          </div>
        </ServiceFeatureSection>

        {/* 5. Section 03: VAS */}
        <ServiceFeatureSection
          id="value-added-services"
          label="03. VAS"
          title="Value Added Serve (VAS)"
          description={
            <>
              <p>
                Telecall&apos;s VAS Aggregation offering is positioned to
                support connectivity between value-added service providers and
                telecommunications operator networks.
              </p>
              <p>
                Through its telecommunications connectivity infrastructure,
                Telecall can serve as an aggregation layer for services that
                require access to operator networks.
              </p>
            </>
          }
          imageSrc="/img/services/mainservice-vas.jpg"
          imageAlt="Telecommunications tower in the sky"
        />
      </main>

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
