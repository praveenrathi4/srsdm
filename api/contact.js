const nodemailer = require('nodemailer');

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
});

// WhatsApp API configuration
const WHATSAPP_PHONE = '+918233666311'; // DR MK GAHLOT's phone number

// Send email notification to DR MK GAHLOT
async function sendEmailNotification(contactData) {
    const mailOptions = {
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: 'drmkgahlot@gmail.com', // Replace with DR MK GAHLOT's email
        subject: `New Contact Form Submission - ${contactData.subject}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2c5530;">New Contact Form Submission</h2>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #4a7c59; margin-bottom: 15px;">Contact Details:</h3>
                    <p><strong>Name:</strong> ${contactData.name}</p>
                    <p><strong>Email:</strong> ${contactData.email}</p>
                    <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
                    <p><strong>Subject:</strong> ${contactData.subject}</p>
                </div>
                <div style="background: #fff; padding: 20px; border-left: 4px solid #2c5530;">
                    <h3 style="color: #4a7c59; margin-bottom: 15px;">Message:</h3>
                    <p style="line-height: 1.6;">${contactData.message}</p>
                </div>
                <div style="margin-top: 20px; padding: 15px; background: #e9ecef; border-radius: 8px;">
                    <p style="margin: 0; font-size: 14px; color: #666;">
                        This message was sent from the SRSDM website contact form.
                    </p>
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email notification sent successfully');
    } catch (error) {
        console.error('Error sending email notification:', error);
        throw error;
    }
}

// Send confirmation email to the user
async function sendConfirmationEmail(userEmail, userName) {
    const mailOptions = {
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: userEmail,
        subject: 'Thank you for contacting DR MK GAHLOT - SRSDM',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2c5530;">Thank you for contacting us!</h2>
                <p>Dear ${userName},</p>
                <p>Thank you for reaching out to DR MK GAHLOT at SRSDM. We have received your message and will get back to you as soon as possible.</p>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #4a7c59;">Our Contact Information:</h3>
                    <p><strong>Phone:</strong> +91 8233666311</p>
                    <p><strong>Address:</strong> Gadsisar Road, Bikaner-334001, Rajasthan</p>
                    <p><strong>Clinic Hours:</strong></p>
                    <ul>
                        <li>Monday - Saturday: 10 AM - 2 PM, 5 PM - 8 PM</li>
                        <li>Sunday: 10 AM - 2 PM</li>
                    </ul>
                </div>
                
                <p>For immediate assistance, you can also reach us on WhatsApp at +91 8233666311</p>
                
                <div style="margin-top: 30px; padding: 15px; background: #e9ecef; border-radius: 8px;">
                    <p style="margin: 0; font-size: 14px; color: #666;">
                        Best regards,<br>
                        DR MK GAHLOT<br>
                        SRSDM Clinic
                    </p>
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Confirmation email sent successfully');
    } catch (error) {
        console.error('Error sending confirmation email:', error);
        // Don't throw error for confirmation email failure
    }
}

// Send WhatsApp notification (simulated)
async function sendWhatsAppNotification(contactData) {
    const message = `🩺 *New Contact Form Submission - SRSDM*

👤 *Name:* ${contactData.name}
📧 *Email:* ${contactData.email}
📱 *Phone:* ${contactData.phone || 'Not provided'}
📋 *Subject:* ${contactData.subject}

💬 *Message:*
${contactData.message}

---
*Sent from SRSDM website*`;

    console.log('WhatsApp notification (simulated):');
    console.log(`To: ${WHATSAPP_PHONE}`);
    console.log(`Message: ${message}`);
    
    // In a real implementation, you would send this message via WhatsApp API
}

// Main handler function
export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, phone, subject, message } = req.body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ 
                error: 'Missing required fields' 
            });
        }

        // Send email notification to DR MK GAHLOT
        await sendEmailNotification({
            name,
            email,
            phone,
            subject,
            message
        });

        // Send WhatsApp notification (simulated)
        await sendWhatsAppNotification({
            name,
            email,
            phone,
            subject,
            message
        });

        // Send confirmation email to the user
        await sendConfirmationEmail(email, name);

        res.json({ 
            success: true, 
            message: 'Your message has been sent successfully!' 
        });

    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
        });
    }
}
