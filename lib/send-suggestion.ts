// lib/send-suggestion.ts
"use server";

import nodemailer from "nodemailer";

export async function SendSuggestion({ category, reference }: { category: string; reference: string }) {
    const email = process.env.GOOGLE_EMAIL;
    const password = process.env.GOOGLE_PASSWORD;

    console.log("Email:", email);
    console.log("Password:", password);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: email,
            pass: password,
        },
    });

    await transporter.sendMail({
        from: email,
        to: email,
        subject: `New Suggestion`,
        text: `Reference: ${reference} Category: ${category}`,
    });

    return { status: "success" };
}
