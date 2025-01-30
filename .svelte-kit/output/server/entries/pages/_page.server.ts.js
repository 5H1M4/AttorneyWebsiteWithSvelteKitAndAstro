import sgMail from "@sendgrid/mail";
const SENDGRID_API_KEY = "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";
const CONTACT_EMAIL = "dailydrivejaguar@gmail.com";
const PERSONAL_EMAIL = "endy.shima@gmail.com";
const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    if (!name || !email || !message) {
      return {
        status: 400,
        body: { error: "All fields are required" }
      };
    }
    sgMail.setApiKey(SENDGRID_API_KEY);
    try {
      await sgMail.send({
        to: PERSONAL_EMAIL,
        from: CONTACT_EMAIL,
        // Must be verified sender in SendGrid
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}
Email: ${email}
Message: ${message}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      });
      return { success: true };
    } catch (error) {
      console.error("SendGrid error:", error);
      return {
        status: 500,
        body: { error: "Failed to send email" }
      };
    }
  }
};
export {
  actions
};
