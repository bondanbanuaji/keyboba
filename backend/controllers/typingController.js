const TypingResult = require('../models/TypingResult');
const User = require('../models/User');

const submitResult = async (req, res) => {
  try {
    const { wpm, accuracy, rawWPM, duration, mode, mistakes, textLength } = req.body;
    const userId = req.userId;

    const result = await TypingResult.create({
      userId,
      wpm,
      accuracy,
      rawWPM,
      duration,
      mode,
      mistakes,
      textLength
    });

    const user = await User.findOne({ clerkId: userId });
    if (user) {
      user.totalTests += 1;
      if (wpm > user.bestWPM) {
        user.bestWPM = wpm;
      }
      user.averageWPM = Math.round(
        ((user.averageWPM * (user.totalTests - 1)) + wpm) / user.totalTests
      );
      user.totalKeysPressed += textLength;
      user.lastActive = Date.now();
      await user.save();
    }

    res.status(201).json(result);
  } catch (error) {
    console.error('Submit result error:', error);
    res.status(500).json({ error: 'Failed to submit result' });
  }
};

const getHistory = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findOne({ clerkId: userId });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const results = await TypingResult.find({ userId: user._id })
      .sort({ createdAt: -1 })
      .limit(50);

    res.json(results);
  } catch (error) {
    console.error('Get history error:', error);
    res.status(500).json({ error: 'Failed to get history' });
  }
};

const getStats = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findOne({ clerkId: userId });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      totalTests: user.totalTests,
      bestWPM: user.bestWPM,
      averageWPM: user.averageWPM,
      totalKeysPressed: user.totalKeysPressed,
      streak: user.streak
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ error: 'Failed to get stats' });
  }
};

const getBest = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findOne({ clerkId: userId });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const bestResult = await TypingResult.findOne({ userId: user._id })
      .sort({ wpm: -1 })
      .limit(1);

    res.json(bestResult || {});
  } catch (error) {
    console.error('Get best error:', error);
    res.status(500).json({ error: 'Failed to get best result' });
  }
};

module.exports = {
  submitResult,
  getHistory,
  getStats,
  getBest
};
