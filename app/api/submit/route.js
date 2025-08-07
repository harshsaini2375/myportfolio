// pages/api/submit.js
// go to this link to generate app password -  https://myaccount.google.com/apppasswords
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';


export async function POST(request) {

  const body = await request.json();

  const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          .container {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            background-color: #f9f9f9;
          }
          .header {
            font-size: 24px;
            font-weight: bold;
            color: #333;
          }
          .content {
            margin-top: 20px;
            font-size: 16px;
            color: #555;
          }
          .footer {
            margin-top: 40px;
            font-size: 12px;
            color: #999;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">New Message from Your Portfolio</div>
          <div class="content">
            <p><strong>Name:</strong> ${body.user}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Subject:</strong> ${body.subject}</p>
            <p><strong>Message:</p>
            <p>${body.message}</p>
          </div>
          <div class="footer">This message was sent from your portfolio website.</div>
        </div>
      </body>
      </html>
    `;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: body.email,
    to: process.env.EMAIL_USER,
    subject: body.subject,
    html: htmlContent
  };


  const info = await transporter.sendMail(mailOptions);

  if (info.accepted.length > 0) {
    // console.log(info);

    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ error: "Email failed", success: false }, { status: 400 });
  }

}
