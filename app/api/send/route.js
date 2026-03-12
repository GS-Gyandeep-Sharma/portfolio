import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const formData = await req.json();
        // 1. Convert JSX to a Template Literal String
        const mailHtml = `
            <p>Hi, Gyandeep</p>
            <p>${formData.name} contacted you from your website. Details are as follows:</p>
            <table border="1" style="border-collapse: collapse; width: 100%;">
                <tr>
                    <td style="padding: 8px;"><strong>Name:</strong></td>
                    <td style="padding: 8px;">${formData.name}</td>
                </tr>
                <tr>
                    <td style="padding: 8px;"><strong>Email:</strong></td>
                    <td style="padding: 8px;">${formData.email}</td>
                </tr>
                <tr>
                    <td style="padding: 8px;"><strong>Subject:</strong></td>
                    <td style="padding: 8px;">${formData.subject}</td>
                </tr>
                <tr>
                    <td style="padding: 8px;"><strong>Message:</strong></td>
                    <td style="padding: 8px;">${formData.message}</td>
                </tr>
            </table>
        `;

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // TLS
            auth: {
                user: process.env.GMAIL_USERNAME,
                pass: process.env.GMAIL_PASSWORD,
            },
        });

        // 2. Send the mail and AWAIT the result
        await transporter.sendMail({
            from: 'Gyandeep Sharma',
            to: "gsgyandeepsharma@gmail.com",
            subject: `Website Contact: ${formData.subject}`,
            html: mailHtml,
        });

        return NextResponse.json({ message: "Email sent successfully", code: 200 }, { status: 200 });

    } catch (error) {
        console.error("Nodemailer Error:", error);
        return NextResponse.json({ error: error.message || "Failed to send email", code: 500 }, { status: 500 });
    }
}