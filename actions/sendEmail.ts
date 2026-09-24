"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Created per request, not at module load: resend v6 throws in the constructor when the
  // key is missing, which would crash the whole page (e.g. locally without .env.local).
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      error: "The contact form isn't configured yet. Please email me directly.",
    };
  }
  const resend = new Resend(apiKey);

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let result;
  try {
    result = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ksachinprabuditha@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  // Resend reports API failures (bad key, unverified sender, …) in the result rather than
  // by throwing, so check it; otherwise a failed send would show "Message sent".
  if (result.error) {
    return {
      error: result.error.message,
    };
  }

  return {
    data: result.data,
  };
};