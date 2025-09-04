# 🚀 SRSDM Website Deployment Guide

## Quick Deployment Options

### 🟢 **Option 1: Vercel (Recommended - FREE)**

**Steps:**
1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "New Project"
3. Import your repository
4. Vercel will automatically detect it's a Node.js project
5. Add environment variables:
   - `EMAIL_USER` = your-email@gmail.com
   - `EMAIL_PASS` = your-app-password
6. Click "Deploy"

**Benefits:**
- ✅ FREE hosting
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Automatic deployments from GitHub
- ✅ Global CDN

---

### 🟡 **Option 2: Netlify (FREE)**

**Steps:**
1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "New site from Git"
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm install`
   - Publish directory: `.`
5. Add environment variables in Site settings
6. Click "Deploy site"

**Benefits:**
- ✅ FREE hosting
- ✅ Easy setup
- ✅ Form handling
- ✅ Custom domain support

---

### 🔵 **Option 3: Railway (FREE tier)**

**Steps:**
1. Go to [railway.app](https://railway.app) and sign up
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add environment variables:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `PORT` = 3000
5. Railway will automatically deploy

**Benefits:**
- ✅ FREE tier available
- ✅ Easy database integration
- ✅ Automatic deployments
- ✅ Custom domain support

---

### 🟠 **Option 4: Heroku (Paid)**

**Steps:**
1. Install Heroku CLI
2. Run commands:
   ```bash
   heroku create srsdm-website
   heroku config:set EMAIL_USER=your-email@gmail.com
   heroku config:set EMAIL_PASS=your-app-password
   git push heroku main
   ```

---

## 🔧 **Environment Variables Setup**

Create these environment variables in your hosting platform:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=production
PORT=3000
```

### **Gmail Setup for Email Notifications:**
1. Enable 2-factor authentication on Gmail
2. Go to Google Account → Security → App passwords
3. Generate a new app password for "Mail"
4. Use this password as `EMAIL_PASS`

---

## 🌐 **Custom Domain Setup**

### **For Vercel:**
1. Go to Project Settings → Domains
2. Add your domain (e.g., drmkgahlot.com)
3. Update DNS records as instructed
4. SSL certificate is automatic

### **For Netlify:**
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records
4. SSL certificate is automatic

---

## 📱 **WhatsApp Integration (Optional)**

For production WhatsApp notifications:

### **Option 1: Twilio WhatsApp API**
1. Sign up at [twilio.com](https://twilio.com)
2. Get WhatsApp sandbox number
3. Add to environment variables:
   ```env
   TWILIO_ACCOUNT_SID=your-account-sid
   TWILIO_AUTH_TOKEN=your-auth-token
   TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
   ```

### **Option 2: WhatsApp Business API**
1. Apply for WhatsApp Business API
2. Get approved by Meta
3. Integrate with your backend

---

## 🧪 **Testing After Deployment**

1. **Visit your live website**
2. **Test contact form** - Submit a test message
3. **Check email notifications** - Verify Dr. MK Gahlot receives emails
4. **Test mobile responsiveness**
5. **Verify all links work**

---

## 📊 **Recommended: Vercel Deployment**

**Why Vercel is best for SRSDM:**
- ✅ Completely FREE
- ✅ Perfect for Node.js applications
- ✅ Automatic HTTPS and CDN
- ✅ Easy custom domain setup
- ✅ Professional URLs (srsdm-website.vercel.app)
- ✅ Automatic deployments from GitHub

**Quick Start with Vercel:**
1. Push your code to GitHub
2. Connect Vercel to your GitHub repo
3. Add environment variables
4. Deploy in 2 minutes!

---

## 🆘 **Troubleshooting**

### **Common Issues:**
1. **Email not working**: Check Gmail app password
2. **Build fails**: Ensure all dependencies are in package.json
3. **Environment variables**: Make sure they're set in hosting platform
4. **Custom domain**: Check DNS propagation (can take 24-48 hours)

### **Support:**
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Railway: [docs.railway.app](https://docs.railway.app)

---

## 🎉 **After Deployment**

1. **Share the live URL** with Dr. MK Gahlot
2. **Test all functionality**
3. **Set up custom domain** (optional)
4. **Configure WhatsApp notifications** (optional)
5. **Monitor website performance**

Your SRSDM website will be live and accessible worldwide! 🌍
