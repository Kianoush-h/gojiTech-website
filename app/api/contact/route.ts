import { EmailClient } from '@azure/communication-email';
import { NextResponse } from 'next/server';

const connection_string = process.env.AZURE_COMMUNICATION_CONNECTION_STRING;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!connection_string) {
      throw new Error('Azure Communication Services connection string is not configured');
    }

    // Initialize the EmailClient
    const client = new EmailClient(connection_string);

    const htmlContent = `
      <html>
        <body>
          <h2>New Contact Form Submission from GojiTech Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company/Organization:</strong> ${company || 'Not provided'}</p>
          <h3>Message:</h3>
          <p>${message}</p>
          <hr>
          <p><em>This email was sent from the contact form on gojitech.co</em></p>
        </body>
      </html>
    `;

    const emailMessage = {
      senderAddress: "DoNotReply@gojitech.systems",
      recipients: {
        to: [{ 
          address: "info@gojitech.co"
        }]
      },
      content: {
        subject: `New Contact Form Submission from ${name}`,
        plainText: `New contact form submission from ${name}\n\nEmail: ${email}\nCompany: ${company || 'Not provided'}\n\nMessage:\n${message}`,
        html: htmlContent,
      },
    };

    // Send the email
    const poller = await client.beginSend(emailMessage);
    const result = await poller.pollUntilDone();

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
} 