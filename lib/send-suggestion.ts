// lib/send-suggestion.ts
"use server";

import nodemailer from "nodemailer";

export async function SendSuggestion({ category, reference }: { category: string; reference: string }) {
    try 
    {
        const email = process.env.GOOGLE_EMAIL;
    const password = process.env.GOOGLE_PASSWORD;


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
    } catch (error) 
    {
       return { status: "error", error: error };
    }
    

    return { status: "success" };
}
