import { PageHero } from "@/components/PageHero";

const privacyData = [
  {
    id: "1",
    title: "1. INTRODUCTION",
    content: [
      "1.1 Telecall Globe Communications Limited (“Telecall Globe” or “the Company”) operates as an Interconnect Clearing House, facilitating connectivity, traffic exchange, inter-operator records management, billing, reconciliation and related telecommunications services.",
      "1.2 In providing these services, the Company may collect and process Personal Data relating to telecommunications operators, their employees and representatives, subscribers whose data is contained in relevant traffic records, vendors, contractors and other individuals.",
      "1.3 Telecall Globe is committed to protecting Personal Data and complying with the Nigeria Data Protection Act, 2023 (“NDPA”), applicable data protection regulations and relevant telecommunications laws and regulatory requirements.",
    ],
  },
  {
    id: "2",
    title: "2. SCOPE AND DATA PROCESSING PRINCIPLES",
    content: [
      "2.1 This Policy applies to all employees, contractors, service providers and other parties who process Personal Data on behalf of Telecall Globe.",
      "2.2 The Company shall process Personal Data lawfully, fairly and transparently, for specified and legitimate purposes, using only data that is adequate and necessary. Personal Data shall be kept accurate where required, retained only for an appropriate period and protected against unauthorized access, disclosure, alteration, loss or destruction.",
    ],
  },
  {
    id: "3",
    title: "3. PERSONAL DATA COLLECTED AND PURPOSES OF PROCESSING",
    content: [
      "3.1 Depending on the services provided, Telecall Globe may process:",
      "• Operator and business information: Names, business contact details, authorized representatives, account information and contractual records.",
      "• Interconnect and traffic records: Call detail records, calling and called numbers, timestamps, duration, routing information, signalling records and related traffic data received or generated in the course of providing interconnect services.",
      "• Billing and settlement information: Traffic volumes, applicable charges, invoices, payment records, reconciliation reports, disputed transactions and settlement information.",
      "• Technical and security information: Network logs, access records, system identifiers and other information necessary for network management, fraud prevention, security and incident investigation.",
      "3.2 Personal Data may be processed to provide and manage interconnect services, route or account for telecommunications traffic, reconcile operator records, calculate charges, process settlements, investigate billing discrepancies, resolve disputes, maintain network security and comply with legal and regulatory obligations.",
    ],
  },
  {
    id: "4",
    title: "4. LAWFUL BASIS FOR PROCESSING",
    content: [
      "4.1 Telecall Globe shall process Personal Data only where an applicable lawful basis exists under the NDPA, including contractual necessity, compliance with a legal obligation, consent where required, legitimate interests or another lawful basis recognized by applicable law.",
      "4.2 Consent shall not be treated as the automatic or exclusive basis for processing all telecommunications traffic records. Where the Company acts on behalf of an operator or another organization, the respective parties' roles and responsibilities shall be determined by the applicable law and contractual arrangements.",
    ],
  },
  {
    id: "5",
    title: "5. DISCLOSURE AND CONFIDENTIALITY",
    content: [
      "5.1 Telecall Globe shall treat operator information, traffic records, billing data and Personal Data as confidential and restrict access to authorized personnel on a need-to-know basis.",
      "5.2 Information may be disclosed to participating operators, authorized service providers, auditors, regulators, law enforcement agencies or other competent authorities where necessary for service delivery or where required or permitted by law.",
      "5.3 Third-party service providers processing Personal Data on behalf of the Company shall be subject to appropriate contractual confidentiality, data protection and security obligations.",
    ],
  },
  {
    id: "6",
    title: "6. DATA SECURITY AND RETENTION",
    content: [
      "6.1 Telecall Globe shall implement appropriate technical and organizational measures to protect Personal Data and related operational records. These may include access controls, authentication, encryption, security logging, secure storage, backups and incident-response procedures.",
      "6.2 Personal Data and interconnect records shall be retained in accordance with applicable legal and regulatory requirements, contractual obligations, legitimate operational needs and the Company's retention procedures. Records shall be securely deleted, destroyed or anonymized when no longer required, subject to applicable retention obligations.",
    ],
  },
  {
    id: "7",
    title: "7. DATA SUBJECT RIGHTS",
    content: [
      "7.1 Subject to applicable law and any lawful restrictions, individuals may exercise their rights under the NDPA, including requesting access to their Personal Data, correction of inaccurate information, erasure where applicable, restriction of processing, data portability and objection to certain processing.",
      "7.2 Requests shall be assessed in accordance with applicable law, confidentiality obligations and the rights of other persons. Requests concerning subscriber traffic records may require verification of identity and lawful authority before any disclosure is made.",
      "7.3 Individuals may contact the Company's designated Data Protection Officer to exercise their rights or raise a privacy concern.",
    ],
  },
  {
    id: "8",
    title: "8. DATA BREACHES AND REGULATORY COMPLIANCE",
    content: [
      "8.1 Telecall Globe shall maintain procedures for identifying, investigating, containing and managing Personal Data breaches. Notifications to affected individuals and relevant authorities shall be made where required by applicable law.",
      "8.2 The Company shall also undertake appropriate data protection assessments, maintain relevant records and provide staff awareness and training as necessary to support compliance.",
    ],
  },
  {
    id: "9",
    title: "9. INTERNATIONAL DATA TRANSFERS",
    content: [
      "9.1 Where Personal Data is transferred outside Nigeria, Telecall Globe shall comply with the applicable requirements of the NDPA and ensure that any required safeguards are implemented.",
    ],
  },
  {
    id: "10",
    title: "10. POLICY REVIEW AND CONTACT",
    content: [
      "10.1 Telecall Globe may review and update this Policy to reflect changes in its services, operational requirements, technology and applicable legal or regulatory obligations.",
      "10.2 For privacy-related enquiries, requests or complaints, please contact:",
      "The Data Protection Officer",
      "Telecall Globe Communications Limited",
      "Email: contact@telecall.ng",
      "10.3 This Policy shall be read together with the Company's applicable information security, data retention, data breach management and other relevant internal policies.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHero
        title="Data Privacy & Protection Policy"
        subtitle="Your privacy is important to us. Learn how we collect, use, and protect your data."
      />

      <main className="flex-1 w-full bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="space-y-12">
            {privacyData.map((section) => (
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

          <div className="mt-20 pt-8 border-t border-slate-100 text-sm text-slate-500 text-center">
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at contact@telecall.ng.
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} Telecall Globe Communications
              Limited. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
