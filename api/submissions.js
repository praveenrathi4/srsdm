// Simple file-based storage for contact form submissions
const fs = require('fs');
const path = require('path');

// Use /tmp directory for Vercel compatibility
const SUBMISSIONS_FILE = path.join('/tmp', 'submissions.json');

// Ensure /tmp directory exists (should always exist on Vercel)
try {
    if (!fs.existsSync('/tmp')) {
        fs.mkdirSync('/tmp', { recursive: true });
    }
} catch (error) {
    console.error('Failed to create /tmp directory:', error);
}

// Read all submissions
function getAllSubmissions() {
    try {
        if (fs.existsSync(SUBMISSIONS_FILE)) {
            const data = fs.readFileSync(SUBMISSIONS_FILE, 'utf8');
            return JSON.parse(data);
        }
        return [];
    } catch (error) {
        console.error('Error reading submissions:', error);
        return [];
    }
}

// Save a new submission
function saveSubmission(submission) {
    try {
        const submissions = getAllSubmissions();
        const newSubmission = {
            id: Date.now().toString(),
            timestamp: new Date().toISOString(),
            ...submission
        };
        
        submissions.push(newSubmission);
        
        // Try to write to file, but don't fail if it doesn't work
        try {
            fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
            console.log('Submission saved to file:', newSubmission.id);
        } catch (writeError) {
            console.error('Failed to write to file, but submission processed:', writeError);
            // Still return the submission even if file write fails
        }
        
        return newSubmission;
    } catch (error) {
        console.error('Error saving submission:', error);
        // Return a basic submission object even if everything fails
        return {
            id: Date.now().toString(),
            timestamp: new Date().toISOString(),
            ...submission,
            error: 'Storage failed but submission processed'
        };
    }
}

// Get submissions by date range
function getSubmissionsByDateRange(startDate, endDate) {
    const submissions = getAllSubmissions();
    return submissions.filter(submission => {
        const submissionDate = new Date(submission.timestamp);
        return submissionDate >= startDate && submissionDate <= endDate;
    });
}

// Get recent submissions (last N days)
function getRecentSubmissions(days = 7) {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    return getSubmissionsByDateRange(cutoffDate, new Date());
}

module.exports = {
    getAllSubmissions,
    saveSubmission,
    getSubmissionsByDateRange,
    getRecentSubmissions
};
