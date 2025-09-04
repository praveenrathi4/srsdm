@echo off
echo ========================================
echo    SRSDM Website Deployment Helper
echo ========================================
echo.
echo Choose your deployment platform:
echo.
echo 1. Vercel (Recommended - FREE)
echo 2. Netlify (FREE)
echo 3. Railway (FREE tier)
echo 4. Heroku (Paid)
echo 5. View deployment guide
echo.
set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" (
    echo.
    echo 🚀 Deploying to Vercel...
    echo.
    echo Steps:
    echo 1. Go to https://vercel.com
    echo 2. Sign up with GitHub
    echo 3. Click "New Project"
    echo 4. Import your repository
    echo 5. Add environment variables:
    echo    - EMAIL_USER=your-email@gmail.com
    echo    - EMAIL_PASS=your-app-password
    echo 6. Click "Deploy"
    echo.
    echo Opening Vercel in your browser...
    start https://vercel.com
) else if "%choice%"=="2" (
    echo.
    echo 🚀 Deploying to Netlify...
    echo.
    echo Steps:
    echo 1. Go to https://netlify.com
    echo 2. Sign up and click "New site from Git"
    echo 3. Connect your GitHub repository
    echo 4. Add environment variables in Site settings
    echo 5. Click "Deploy site"
    echo.
    echo Opening Netlify in your browser...
    start https://netlify.com
) else if "%choice%"=="3" (
    echo.
    echo 🚀 Deploying to Railway...
    echo.
    echo Steps:
    echo 1. Go to https://railway.app
    echo 2. Sign up and click "New Project"
    echo 3. Select "Deploy from GitHub repo"
    echo 4. Add environment variables
    echo 5. Railway will auto-deploy
    echo.
    echo Opening Railway in your browser...
    start https://railway.app
) else if "%choice%"=="4" (
    echo.
    echo 🚀 Deploying to Heroku...
    echo.
    echo Steps:
    echo 1. Install Heroku CLI
    echo 2. Run: heroku create srsdm-website
    echo 3. Set environment variables
    echo 4. Run: git push heroku main
    echo.
    echo Opening Heroku in your browser...
    start https://heroku.com
) else if "%choice%"=="5" (
    echo.
    echo 📖 Opening deployment guide...
    start DEPLOYMENT.md
) else (
    echo.
    echo ❌ Invalid choice. Please run the script again.
)

echo.
echo 📋 Don't forget to:
echo - Set up your email credentials
echo - Test the contact form
echo - Configure custom domain (optional)
echo.
pause
