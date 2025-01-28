import { SENDGRID_API_KEY, CONTACT_EMAIL } from '$env/static/private';
import sgMail from '@sendgrid/mail';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    if (!name || !email || !message) {
      return {
        status: 400,
        body: { error: 'All fields are required' }
      };
    }

    sgMail.setApiKey(SENDGRID_API_KEY);

    try {
      await sgMail.send({
        to: CONTACT_EMAIL,
        from: CONTACT_EMAIL, // Must be verified sender in SendGrid
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      });
      return { success: true };
    } catch (error) {
      console.error('SendGrid error:', error);
      return {
        status: 500,
        body: { error: 'Failed to send email' }
      };
    }
  }
};