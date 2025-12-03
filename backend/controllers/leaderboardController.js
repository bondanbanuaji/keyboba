const User = require('../models/User');
const TypingResult = require('../models/TypingResult');

const getGlobalLeaderboard = async (req, res) => {
  try {
    const users = await User.find()
      .select('username bestWPM averageWPM totalTests')
      .sort({ bestWPM: -1 })
      .limit(100);

    res.json(users);
  } catch (error) {
    console.error('Get global leaderboard error:', error);
    res.status(500).json({ error: 'Failed to get leaderboard' });
  }
};

const getDailyLeaderboard = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const results = await TypingResult.aggregate([
      {
        $match: {
          createdAt: { $gte: today }
        }
      },
      {
        $group: {
          _id: '$userId',
          bestWPM: { $max: '$wpm' },
          totalTests: { $sum: 1 },
          avgAccuracy: { $avg: '$accuracy' }
        }
      },
      {
        $sort: { bestWPM: -1 }
      },
      {
        $limit: 100
      }
    ]);

    const populatedResults = await User.populate(results, {
      path: '_id',
      select: 'username'
    });

    res.json(populatedResults);
  } catch (error) {
    console.error('Get daily leaderboard error:', error);
    res.status(500).json({ error: 'Failed to get daily leaderboard' });
  }
};

const getFriendsLeaderboard = async (req, res) => {
  try {
    res.json([]);
  } catch (error) {
    console.error('Get friends leaderboard error:', error);
    res.status(500).json({ error: 'Failed to get friends leaderboard' });
  }
};

module.exports = {
  getGlobalLeaderboard,
  getDailyLeaderboard,
  getFriendsLeaderboard
};
