const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to your preferred email service
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com', // Replace with your email
        pass: process.env.EMAIL_PASS || 'your-app-password' // Replace with your app password
    }
});

// WhatsApp API configuration (using Twilio or similar service)
const WHATSAPP_PHONE = '+918233666311'; // Dr. MK Gahlot's phone number

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ 
                error: 'Missing required fields' 
            });
        }

        // Send email notification to Dr. MK Gahlot
        await sendEmailNotification({
            name,
            email,
            phone,
            subject,
            message
        });

        // Send WhatsApp notification (simulated - you'll need to implement actual WhatsApp API)
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
});

// Send email notification to Dr. MK Gahlot
async function sendEmailNotification(contactData) {
    const mailOptions = {
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: 'drmkgahlot@gmail.com', // Replace with Dr. MK Gahlot's email
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
        subject: 'Thank you for contacting Dr. MK Gahlot - SRSDM',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2c5530;">Thank you for contacting us!</h2>
                <p>Dear ${userName},</p>
                <p>Thank you for reaching out to Dr. MK Gahlot at SRSDM. We have received your message and will get back to you as soon as possible.</p>
                
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
                        Dr. MK Gahlot<br>
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
    // This is a simulation. In a real implementation, you would use:
    // - Twilio WhatsApp API
    // - WhatsApp Business API
    // - Or any other WhatsApp messaging service
    
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
    // Example with Twilio:
    /*
    const twilio = require('twilio');
    const client = twilio(accountSid, authToken);
    
    await client.messages.create({
        from: 'whatsapp:+14155238886', // Twilio WhatsApp number
        to: `whatsapp:${WHATSAPP_PHONE}`,
        body: message
    });
    */
}

// Serve the main website
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'SRSDM website API is running',
        timestamp: new Date().toISOString()
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!' 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 SRSDM website server is running on port ${PORT}`);
    console.log(`📧 Email notifications: ${process.env.EMAIL_USER ? 'Configured' : 'Not configured'}`);
    console.log(`📱 WhatsApp notifications: Simulated (configure actual API for production)`);
});

module.exports = app;
