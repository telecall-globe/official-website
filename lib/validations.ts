import * as yup from "yup";

export interface ContactFormData {
  fullName: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

export const contactFormSchema: yup.ObjectSchema<ContactFormData> = yup.object({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters"),

  email: yup
    .string()
    .required("Email address is required")
    .email("Please enter a valid email address"),

  company: yup.string().optional(),

  service: yup.string().required("Please select a service"),

  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});
