// Simple file-based storage for contact form submissions
const fs = require('fs');
const path = require('path');

const SUBMISSIONS_FILE = path.join(__dirname, '..', 'data', 'submissions.json');

// Ensure data directory exists
const dataDir = path.dirname(SUBMISSIONS_FILE);
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
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
        fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
        
        console.log('Submission saved:', newSubmission.id);
        return newSubmission;
    } catch (error) {
        console.error('Error saving submission:', error);
        throw error;
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
