# Dr. MK Gahlot - SRSDM Website

Official website for Dr. Manish Gahlot (Dr. MK Gahlot), an expert Ayurvedic doctor based in Bikaner, Rajasthan. The website showcases treatments, wellness guides, and provides a platform for patients to book consultations.

## Features

- **Responsive Design**: Modern, mobile-friendly interface
- **Treatment Showcase**: Comprehensive list of Ayurvedic treatments with detailed descriptions
- **Wellness Blog**: Health guides and lifestyle tips with pagination
- **Contact Form**: Integrated contact form with email and WhatsApp notifications
- **Digital Presence**: Links to social media platforms (Facebook, Instagram, YouTube)
- **SEO Optimized**: Search engine friendly with proper meta tags

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Email**: Nodemailer for email notifications
- **Styling**: Custom CSS with modern design principles
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins)

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- Email account for notifications (Gmail recommended)

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory with the following variables:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=3000
   ```

   **Note**: For Gmail, you'll need to:
   - Enable 2-factor authentication
   - Generate an "App Password" for the EMAIL_PASS variable
   - Use your Gmail address for EMAIL_USER

4. **Start the server**
   ```bash
   npm start
   ```

   For development with auto-restart:
   ```bash
   npm run dev
   ```

5. **Access the website**
   
   Open your browser and navigate to `http://localhost:3000`

## Configuration

### Email Notifications

The website sends email notifications to Dr. MK Gahlot when someone submits the contact form. To configure:

1. Set up your email credentials in the `.env` file
2. Update the recipient email in `server.js` (line with `to: 'drmkgahlot@gmail.com'`)
3. Test the email functionality

### WhatsApp Notifications

Currently, WhatsApp notifications are simulated in the console. To implement actual WhatsApp notifications:

1. Sign up for a WhatsApp Business API service (Twilio, WhatsApp Business API, etc.)
2. Update the `sendWhatsAppNotification` function in `server.js`
3. Add your API credentials to the `.env` file

### Content Management

#### Adding New Treatments

Edit the `treatmentsData` array in `js/script.js`:

```javascript
{
    id: 9, // Next available ID
    title: "Treatment Name",
    description: "Brief description for the card view",
    fullDescription: "Detailed description shown in the modal"
}
```

#### Adding New Wellness Articles

Edit the `wellnessData` array in `js/script.js`:

```javascript
{
    id: 7, // Next available ID
    title: "Article Title",
    content: "Brief content for the card view",
    fullContent: "Full article content shown in the modal",
    date: "2024-01-20", // YYYY-MM-DD format
    category: "Category Name"
}
```

## File Structure

```
srsdm-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All CSS styles
├── js/
│   └── script.js       # JavaScript functionality
├── server.js           # Backend server
├── package.json        # Dependencies and scripts
├── README.md          # This file
└── .env               # Environment variables (create this)
```

## Deployment

### Option 1: Traditional Hosting

1. Upload all files to your web server
2. Install Node.js on the server
3. Run `npm install` on the server
4. Configure environment variables
5. Start the server with `npm start`

### Option 2: Cloud Platforms

#### Heroku
1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Deploy using Git or Heroku CLI

#### Vercel
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically

#### Netlify
1. Connect your repository
2. Set build command: `npm install && npm start`
3. Set environment variables

## Customization

### Colors and Branding

The website uses a green color scheme representing nature and healing. To customize:

1. Edit CSS variables in `css/style.css`
2. Main colors:
   - Primary: `#2c5530` (Dark Green)
   - Secondary: `#4a7c59` (Medium Green)
   - Background: `#f8f9fa` (Light Gray)

### Logo and Images

1. Replace the placeholder icon in the hero section
2. Add a favicon in the `assets/` directory
3. Update social media links in the footer

### Contact Information

Update contact details in:
- `index.html` (multiple locations)
- `server.js` (email recipient)
- `js/script.js` (WhatsApp number)

## Support

For technical support or questions about the website, please contact the development team or refer to the documentation.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact Information

**Dr. MK Gahlot - SRSDM**
- Phone: +91 8233666311
- Address: Gadsisar Road, Bikaner-334001, Rajasthan
- Clinic Hours: Mon-Sat 10 AM - 2 PM, 5 PM - 8 PM; Sunday 10 AM - 2 PM

---

*Built with ❤️ for Dr. MK Gahlot and the SRSDM clinic*
