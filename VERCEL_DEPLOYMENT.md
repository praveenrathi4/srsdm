# 🚀 Vercel Deployment Guide for SRSDM Website

## Step 1: Sign Up for Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Click "Sign Up"**
3. **Choose "Continue with GitHub"** (recommended)
4. **Authorize Vercel** to access your GitHub account

## Step 2: Import Your Repository

1. **Click "New Project"** on the Vercel dashboard
2. **Find your repository** (`srsdm-website` or similar)
3. **Click "Import"** next to your repository
4. **Project name**: `srsdm-website` (or keep default)
5. **Framework Preset**: Vercel will auto-detect "Other"

## Step 3: Configure Build Settings

Vercel should automatically detect your project settings:
- **Build Command**: `npm install` (auto-detected)
- **Output Directory**: `.` (root directory)
- **Install Command**: `npm install` (auto-detected)

## Step 4: Add Environment Variables

**Before deploying, add these environment variables:**

1. **Click "Environment Variables"** section
2. **Add these variables:**

```
EMAIL_USER = your-email@gmail.com
EMAIL_PASS = your-gmail-app-password
NODE_ENV = production
```

### 🔐 **Gmail App Password Setup:**

1. **Go to [myaccount.google.com](https://myaccount.google.com)**
2. **Security** → **2-Step Verification** (enable if not already)
3. **App passwords** → **Generate app password**
4. **Select "Mail"** and generate password
5. **Use this password** as `EMAIL_PASS`

## Step 5: Deploy

1. **Click "Deploy"** button
2. **Wait for deployment** (usually 1-2 minutes)
3. **Your website will be live!** 🎉

## Step 6: Get Your Live URL

After deployment, you'll get a URL like:
- `https://srsdm-website.vercel.app`
- `https://srsdm-website-username.vercel.app`

## Step 7: Test Your Website

1. **Visit your live URL**
2. **Test the contact form** - submit a test message
3. **Check your email** - you should receive the notification
4. **Test on mobile** - verify responsiveness
5. **Test all sections** - treatments, wellness, etc.

## 🔧 **Troubleshooting**

### **If deployment fails:**
1. **Check build logs** in Vercel dashboard
2. **Verify environment variables** are set correctly
3. **Ensure all files** are in your GitHub repository

### **If email doesn't work:**
1. **Check Gmail app password** is correct
2. **Verify 2-factor authentication** is enabled
3. **Check Vercel function logs** for errors

### **If website doesn't load:**
1. **Check Vercel deployment status**
2. **Verify all files** are uploaded to GitHub
3. **Check for any build errors**

## 🌐 **Custom Domain (Optional)**

### **To add a custom domain:**
1. **Go to Project Settings** → **Domains**
2. **Add your domain** (e.g., `drmkgahlot.com`)
3. **Update DNS records** as instructed by Vercel
4. **SSL certificate** is automatic

## 📱 **WhatsApp Integration (Future)**

For WhatsApp notifications, you can later add:
```
WHATSAPP_API_KEY = your-whatsapp-api-key
WHATSAPP_PHONE = +918233666311
```

## 🎯 **Success Checklist**

- [ ] Website deployed successfully
- [ ] Contact form working
- [ ] Email notifications working
- [ ] Mobile responsive
- [ ] All sections loading
- [ ] Social media links working
- [ ] WhatsApp button working

## 🆘 **Need Help?**

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: [vercel.com/help](https://vercel.com/help)
- **Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

**Your SRSDM website will be live and accessible worldwide! 🌍**
