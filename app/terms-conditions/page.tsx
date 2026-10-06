import { PageHero } from "@/components/PageHero";

const termsData = [
  {
    id: "1",
    title: "1. SCOPE AND ACCEPTANCE",
    content: [
      "1.1 These Terms and Conditions (“Terms”) govern access to and use of the website, online portals, platforms, systems and other digital services (“Platform”) operated by Telecall Globe Communications Limited (“Telecall Globe” or “the Company”) in connection with its interconnect clearing house and related telecommunications services.",
      "1.2 By accessing or using the Platform, an authorized user, telecommunications operator, service provider or other user (“User”) agrees to be bound by these Terms and any applicable service agreement, interconnection agreement, operating procedure or other agreement governing the relevant service.",
      "1.3 Where there is a conflict between these Terms and a specific written agreement governing a service, the specific agreement shall prevail to the extent of the conflict.",
    ],
  },
  {
    id: "2",
    title: "2. ACCESS AND AUTHORISED USE",
    content: [
      "2.1 Telecall Globe may grant authorized Users access to its Platform subject to these Terms and applicable contractual arrangements.",
      "2.2 Users shall:",
      "• use the Platform only for authorized and lawful purposes;",
      "• maintain the confidentiality of usernames, passwords, authentication credentials and other access information;",
      "• ensure that only authorized personnel access their accounts;",
      "• be responsible for activities carried out using their access credentials; and",
      "• immediately notify Telecall Globe of any suspected unauthorised access, compromise or misuse.",
      "2.3 Users shall not use the Platform for fraudulent, unlawful or unauthorised purposes or attempt to interfere with its operation, security or availability.",
      "2.4 Telecall Globe may suspend or restrict access where reasonably necessary for security, maintenance, regulatory compliance, suspected misuse or breach of these Terms.",
    ],
  },
  {
    id: "3",
    title: "3. INTERCONNECT AND CLEARING HOUSE SERVICES",
    content: [
      "3.1 Telecall Globe may provide services including interconnect traffic management, traffic data processing, billing and reconciliation, clearing and settlement support, reporting, dispute management and other related telecommunications services.",
      "3.2 Information made available through the Platform may include traffic, billing, reconciliation, settlement and other operational information exchanged between participating operators.",
      "3.3 Users are responsible for reviewing information made available to them and promptly notifying Telecall Globe of any identified error, discrepancy or unauthorized transaction in accordance with the applicable service or interconnection agreement.",
      "3.4 Specific service levels, operational procedures, settlement arrangements, dispute processes and applicable charges shall be governed by the relevant agreement or operating procedure.",
    ],
  },
  {
    id: "4",
    title: "4. INFORMATION SECURITY AND CONFIDENTIALITY",
    content: [
      "4.1 Telecall Globe shall take reasonable technical and organizational measures to protect information processed through its systems.",
      "4.2 Users shall maintain the confidentiality of all non-public information accessed through the Platform, including traffic records, billing information, settlement information, credentials, technical information and commercially sensitive information.",
      "4.3 A User shall not disclose, copy, distribute or use such information except as authorised or required for the performance of its telecommunications or contractual obligations.",
      "4.4 These confidentiality obligations shall survive termination of a User's access to the Platform, subject to applicable law and contractual arrangements.",
    ],
  },
  {
    id: "5",
    title: "5. DATA PROTECTION",
    content: [
      "5.1 Telecall Globe shall process Personal Data in accordance with the Nigeria Data Protection Act, 2023 (“NDPA”) and other applicable data protection laws and regulations.",
      "5.2 Where the Platform processes traffic or operational information containing Personal Data, such information shall be accessed and processed only for legitimate and authorised purposes, including interconnect operations, billing, reconciliation, settlement, dispute resolution, security and regulatory compliance.",
      "5.3 Users shall also comply with their applicable data protection obligations in respect of information accessed, supplied or processed through the Platform.",
    ],
  },
  {
    id: "6",
    title: "6. SYSTEM AVAILABILITY AND MAINTENANCE",
    content: [
      "6.1 Telecall Globe shall use reasonable efforts to maintain the availability and functionality of its Platform.",
      "6.2 However, access may be temporarily unavailable or restricted due to maintenance, upgrades, security incidents, telecommunications failures, third-party dependencies, regulatory requirements or circumstances beyond the Company's reasonable control.",
      "6.3 Telecall Globe shall not be liable for interruptions arising from causes beyond its reasonable control, subject to any obligations expressly contained in an applicable service agreement.",
    ],
  },
  {
    id: "7",
    title: "7. INFORMATION AND REPORTS",
    content: [
      "7.1 Telecall Globe shall use reasonable efforts to ensure that information and reports made available through the Platform are accurate and reliable.",
      "7.2 However, Users shall remain responsible for reviewing and validating information relevant to their accounts, traffic, billing, reconciliation and settlement obligations.",
      "7.3 Nothing on the Platform shall override an applicable interconnection agreement, regulatory directive, settlement agreement or other binding contractual arrangement.",
    ],
  },
  {
    id: "8",
    title: "8. INTELLECTUAL PROPERTY",
    content: [
      "8.1 All intellectual property rights in the Platform, software, systems, designs, trademarks, reports, documentation and other materials provided by Telecall Globe remain the property of Telecall Globe or its relevant licensors, unless otherwise stated.",
      "8.2 Users are granted only the rights necessary to access and use the Platform for authorized purposes.",
      "8.3 Users shall not reproduce, modify, reverse engineer, distribute, commercially exploit or otherwise use Telecall Globe's intellectual property without prior written authorization, except where permitted by law.",
    ],
  },
  {
    id: "9",
    title: "9. PROHIBITED ACTIVITIES",
    content: [
      "9.1 Users shall not:",
      "• attempt to obtain unauthorized access to the Platform or its systems;",
      "• introduce malware, malicious code or other harmful material;",
      "• interfere with the security, integrity or performance of the Platform;",
      "• access or use another User's account without authorisation;",
      "• manipulate, falsify or unlawfully alter traffic, billing, reconciliation or settlement information; or",
      "• use information obtained through the Platform for an unauthorised or unlawful purpose.",
      "9.2 Telecall Globe may suspend access and take appropriate legal or contractual action where prohibited activities are identified.",
    ],
  },
  {
    id: "10",
    title: "10. LIABILITY",
    content: [
      "10.1 To the extent permitted by law and subject to any liability expressly assumed under an applicable service agreement, Telecall Globe shall not be liable for loss arising from:",
      "• temporary unavailability of the Platform caused by circumstances beyond its reasonable control;",
      "• reliance on information that a User has failed to verify;",
      "• unauthorized use of a User's credentials where the User failed to maintain appropriate security;",
      "• third-party systems or telecommunications networks outside Telecall Globe's control; or",
      "• events constituting force majeure.",
      "10.2 Nothing in these Terms shall exclude or limit liability that cannot lawfully be excluded or limited.",
    ],
  },
  {
    id: "11",
    title: "11. THIRD-PARTY LINKS AND SYSTEMS",
    content: [
      "11.1 The Platform may contain links to third-party websites, systems or services. Such links are provided for convenience or operational purposes and do not constitute an endorsement by Telecall Globe.",
      "11.2 Telecall Globe is not responsible for the content, security or availability of third-party systems except to the extent expressly provided under an applicable agreement.",
    ],
  },
  {
    id: "12",
    title: "12. REGULATORY COMPLIANCE",
    content: [
      "12.1 Telecall Globe and Users shall comply with applicable Nigerian laws, regulations, licenses, regulatory directives and applicable telecommunications requirements.",
      "12.2 Telecall Globe may modify its services, Platform or these Terms where reasonably necessary to comply with changes in law, regulation, license conditions or regulatory directives.",
    ],
  },
  {
    id: "13",
    title: "13. GOVERNING LAW AND JURISDICTION",
    content: [
      "13.1 These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.",
      "13.2 Subject to any applicable dispute-resolution mechanism contained in a specific agreement, the courts of competent jurisdiction in Nigeria shall have jurisdiction over disputes arising from these Terms.",
    ],
  },
  {
    id: "14",
    title: "14. SEVERABILITY AND WAIVER",
    content: [
      "14.1 If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.",
      "14.2 Failure or delay by Telecall Globe to exercise any right under these Terms shall not constitute a waiver of that right.",
    ],
  },
  {
    id: "15",
    title: "15. FORCE MAJEURE",
    content: [
      "15.1 Telecall Globe shall not be liable for failure or delay in performing its obligations where such failure or delay results from circumstances beyond its reasonable control, including acts of God, natural disasters, war, civil disturbance, government action, regulatory directives, telecommunications or network failures, power failures, cyber incidents or failure of third-party infrastructure.",
    ],
  },
  {
    id: "16",
    title: "16. AMENDMENTS",
    content: [
      "16.1 Telecall Globe may amend these Terms where reasonably necessary to reflect changes in its services, technology, contractual arrangements, applicable law or regulatory requirements.",
      "The latest version of these Terms shall be made available through the Company's Platform or website.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section for the Title */}
      <PageHero
        title="Terms & Conditions"
        subtitle="Governing access to and use of Telecall Globe's platforms and services."
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="space-y-12">
            {termsData.map((section) => (
              <section
                key={section.id}
                className="scroll-mt-24"
                id={`section-${section.id}`}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">
                  {section.title}
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  {section.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className={paragraph.startsWith("•") ? "pl-6" : ""}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
