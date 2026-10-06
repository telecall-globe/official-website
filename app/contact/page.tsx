"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const subject = `Website Enquiry - ${data.service || "General Enquiry"}`;

    const body = `
Hello Telecall Globe Communications Limited,

I would like to make an enquiry regarding your services.

Full Name: ${data.fullName}
Email Address: ${data.email}
Company / Organisation: ${data.company || "Not provided"}
Service of Interest: ${data.service || "Not specified"}

Message:
${data.message}

Kind regards,
${data.fullName}
    `.trim();

    const mailtoLink = `mailto:contact@telecall.ng?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.assign(mailtoLink);

    reset();
  };

  return (
    <section
      id="contact"
      className="w-full bg-white px-6 py-18 sm:px-6 lg:px-12 xl:px-14"
    >
      <div className="mx-auto max-w-7xl px-0 xl:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">
          <div className="flex flex-col">
            <div className="mb-5 w-fit rounded-md bg-slate-50 px-2.5 py-1.5">
              <span className="text-[11px] font-bold text-slate-700">
                Contact Telecall
              </span>
            </div>

            <h2 className="max-w-md text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-[42px]">
              Let&apos;s Talk About Your Connectivity Needs
            </h2>

            <p className="mt-5 max-w-md text-[14px] leading-[1.55] text-slate-700">
              Whether you are looking to establish interconnectivity, access
              regional operator networks, or explore our telecommunications
              connectivity solutions, our team is ready to help.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="group rounded-xl border border-slate-100 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)]">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#effcf9] text-[#25447b]">
                    <MapPin className="h-4 w-4" />
                  </div>

                  <div>
                    <h3 className="text-[12px] font-semibold text-slate-900">
                      Office Address
                    </h3>

                    <p className="mt-1.5 text-[11px] leading-[1.55] text-slate-600">
                      NO 2 Akarigbere street off Idejo road, Victoria Island,
                      Lagos
                    </p>
                  </div>
                </div>
              </div>

              <div className="group rounded-xl border border-slate-100 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)]">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#effcf9] text-[#25447b]">
                    <Phone className="h-4 w-4" />
                  </div>

                  <div>
                    <h3 className="text-[12px] font-semibold text-slate-900">
                      Support Line
                    </h3>

                    <div className="mt-1.5 space-y-0.5 text-[11px] text-slate-600">
                      <p>+234 78998 7687</p>
                      <p>+234 97876 6564</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group rounded-xl border border-slate-100 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)]">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#effcf9] text-[#25447b]">
                    <Mail className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[12px] font-semibold text-slate-900">
                      Contact Email
                    </h3>

                    <a
                      href="mailto:contact@telecall.ng"
                      className="mt-1.5 block truncate text-[11px] text-slate-600 transition-colors hover:text-[#25447b]"
                    >
                      contact@telecall.ng
                    </a>
                  </div>
                </div>
              </div>

              <div className="group rounded-xl border border-slate-100 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)]">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#effcf9] text-[#25447b]">
                    <Mail className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[12px] font-semibold text-slate-900">
                      Information
                    </h3>

                    <a
                      href="mailto:info@telecall.ng"
                      className="mt-1.5 block truncate text-[11px] text-slate-600 transition-colors hover:text-[#25447b]"
                    >
                      info@telecall.ng
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pt-1">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[12px] font-medium text-slate-900">
                    Full Name
                  </label>

                  <input
                    {...register("fullName")}
                    placeholder="Your full name"
                    className={`h-8.75 w-full rounded-md border bg-white px-3 text-[12px] text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#2B3A67] focus:ring-1 focus:ring-[#2B3A67]/20 ${
                      errors.fullName ? "border-red-500" : "border-slate-200"
                    }`}
                  />

                  {errors.fullName && (
                    <p className="mt-1 text-[10px] text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-medium text-slate-900">
                    Email Address
                  </label>

                  <input
                    {...register("email")}
                    type="email"
                    placeholder="your@email.com"
                    className={`h-8.75 w-full rounded-md border bg-white px-3 text-[12px] text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#2B3A67] focus:ring-1 focus:ring-[#2B3A67]/20 ${
                      errors.email ? "border-red-500" : "border-slate-200"
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-1 text-[10px] text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[12px] font-medium text-slate-900">
                    Company / Organisation
                  </label>

                  <input
                    {...register("company")}
                    placeholder="Your company name"
                    className="h-8.75 w-full rounded-md border border-slate-200 bg-white px-3 text-[12px] text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#2B3A67] focus:ring-1 focus:ring-[#2B3A67]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-medium text-slate-900">
                    Service of Interest
                  </label>

                  <select
                    {...register("service")}
                    className={`h-8.75 w-full rounded-md border bg-white px-3 text-[12px] outline-none transition-all focus:border-[#2B3A67] focus:ring-1 focus:ring-[#2B3A67]/20 ${
                      errors.service ? "border-red-500" : "border-slate-200"
                    } ${errors.service ? "text-red-500" : "text-slate-600"}`}
                  >
                    <option value="">Select a service</option>
                    <option value="general enquiry">General Enquiry</option>
                    <option value="interconnectivity">Interconnectivity</option>
                    <option value="data">International Data Access</option>
                    <option value="value-added">Value Added Services</option>
                  </select>

                  {errors.service && (
                    <p className="mt-1 text-[10px] text-red-500">
                      {errors.service.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-medium text-slate-900">
                  Message
                </label>

                <textarea
                  {...register("message")}
                  rows={6}
                  placeholder="Tell us about your connectivity requirements..."
                  className={`w-full resize-none rounded-md border bg-white px-3 py-2.5 text-[12px] leading-5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#2B3A67] focus:ring-1 focus:ring-[#2B3A67]/20 ${
                    errors.message ? "border-red-500" : "border-slate-200"
                  }`}
                />

                {errors.message && (
                  <p className="mt-1 text-[10px] text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#25447b] px-4 py-2.5 text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#25447b]/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Opening email..." : "Submit"}

                {!isSubmitting && (
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
