const { clerkClient } = require('@clerk/clerk-sdk-node');

const requireAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No authorization token provided' });
    }

    const token = authHeader.substring(7);
    const session = await clerkClient.sessions.verifySession(token);
    
    if (!session) {
      return res.status(401).json({ error: 'Invalid session' });
    }

    req.userId = session.userId;
    next();
  } catch (error) {
    console.error('Auth error:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = { requireAuth };
