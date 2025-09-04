@echo off
echo ========================================
echo    Push SRSDM Website to GitHub
echo ========================================
echo.
echo This script will help you push your code to GitHub.
echo.
echo First, make sure you have:
echo 1. Created a repository on GitHub
echo 2. Copied the repository URL
echo.
echo.

set /p repo_url="Enter your GitHub repository URL (e.g., https://github.com/username/srsdm-website.git): "

if "%repo_url%"=="" (
    echo.
    echo ❌ Please enter a valid repository URL
    pause
    exit /b 1
)

echo.
echo 🔗 Adding remote repository...
git remote add origin %repo_url%

echo.
echo 📤 Pushing code to GitHub...
git branch -M main
git push -u origin main

echo.
echo ✅ Done! Your code has been pushed to GitHub.
echo.
echo Next steps:
echo 1. Go to your GitHub repository
echo 2. Verify all files are uploaded
echo 3. Deploy to Vercel/Netlify/Railway
echo.
pause
