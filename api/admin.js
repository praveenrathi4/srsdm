const { getAllSubmissions, getRecentSubmissions } = require('./submissions');

module.exports = async (req, res) => {
    // Simple authentication check (you can improve this)
    const authHeader = req.headers.authorization;
    const expectedAuth = process.env.ADMIN_PASSWORD || 'admin123';
    
    if (authHeader !== `Bearer ${expectedAuth}`) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const { days = 30 } = req.query;
        const submissions = getRecentSubmissions(parseInt(days));
        
        res.json({
            success: true,
            count: submissions.length,
            submissions: submissions.reverse() // Most recent first
        });
    } catch (error) {
        console.error('Error fetching submissions:', error);
        res.status(500).json({ error: 'Failed to fetch submissions' });
    }
};
