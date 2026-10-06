// "use client";

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { ArrowRight } from "lucide-react";
// import { contactFormSchema, ContactFormData } from "@/lib/validations";

// export default function ContactForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset,
//   } = useForm<ContactFormData>({
//     resolver: yupResolver(contactFormSchema),
//   });

//   const onSubmit = async (data: ContactFormData) => {
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     console.log("Form Data:", data);
//     alert("Message sent successfully!");
//     reset();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//         {/* Full Name */}
//         <div>
//           <label className="mb-2 block text-sm font-medium text-slate-700">
//             Full Name
//           </label>
//           <input
//             {...register("fullName")}
//             placeholder="Your full name"
//             className={`w-full rounded-md border px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#2B3A67] focus:ring-1 focus:ring-[#2B3A67] ${
//               errors.fullName ? "border-red-500" : "border-gray-200"
//             }`}
//           />
//           {errors.fullName && (
//             <p className="mt-1 text-xs text-red-500">
//               {errors.fullName.message}
//             </p>
//           )}
//         </div>

//         {/* Email Address */}
//         <div>
//           <label className="mb-2 block text-sm font-medium text-slate-700">
//             Email Address
//           </label>
//           <input
//             {...register("email")}
//             placeholder="your@email.com"
//             className={`w-full rounded-md border px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#2B3A67] focus:ring-1 focus:ring-[#2B3A67] ${
//               errors.email ? "border-red-500" : "border-gray-200"
//             }`}
//           />
//           {errors.email && (
//             <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
//           )}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//         {/* Company */}
//         <div>
//           <label className="mb-2 block text-sm font-medium text-slate-700">
//             Company / Organisation
//           </label>
//           <input
//             {...register("company")}
//             placeholder="Your company name"
//             className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#2B3A67] focus:ring-1 focus:ring-[#2B3A67]"
//           />
//         </div>

//         {/* Service */}
//         <div>
//           <label className="mb-2 block text-sm font-medium text-slate-700">
//             Service of Interest
//           </label>
//           <select
//             {...register("service")}
//             className={`w-full appearance-none rounded-md border px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#2B3A67] focus:ring-1 focus:ring-[#2B3A67] ${
//               errors.service ? "border-red-500" : "border-gray-200"
//             } text-slate-600`}
//           >
//             <option value="">Select a service</option>
//             <option value="interconnectivity">Interconnectivity</option>
//             <option value="data">International Data Access</option>
//             <option value="value-added">Value Added Services</option>
//           </select>
//           {errors.service && (
//             <p className="mt-1 text-xs text-red-500">
//               {errors.service.message}
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Message */}
//       <div>
//         <label className="mb-2 block text-sm font-medium text-slate-700">
//           Message
//         </label>
//         <textarea
//           {...register("message")}
//           rows={5}
//           placeholder="Tell us about your connectivity requirements..."
//           className={`w-full resize-none rounded-md border px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#2B3A67] focus:ring-1 focus:ring-[#2B3A67] ${
//             errors.message ? "border-red-500" : "border-gray-200"
//           }`}
//         />
//         {errors.message && (
//           <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
//         )}
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="flex items-center justify-center gap-2 rounded-md bg-[#2B3A67] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1f2b4c] disabled:opacity-70"
//       >
//         {isSubmitting ? "Submitting..." : "Submit"}
//         {!isSubmitting && <ArrowRight className="h-4 w-4" />}
//       </button>
//     </form>
//   );
// }


import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page
