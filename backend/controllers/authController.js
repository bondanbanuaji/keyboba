const User = require('../models/User');

const syncUser = async (req, res) => {
  try {
    const { clerkId, username, email, avatar } = req.body;

    let user = await User.findOne({ clerkId });

    if (!user) {
      user = await User.create({
        clerkId,
        username,
        email,
        avatar
      });
    } else {
      user.username = username;
      user.email = email;
      user.avatar = avatar;
      user.lastActive = Date.now();
      await user.save();
    }

    res.json(user);
  } catch (error) {
    console.error('Sync user error:', error);
    res.status(500).json({ error: 'Failed to sync user' });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ clerkId: id });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Failed to get user' });
  }
};

module.exports = {
  syncUser,
  getUser
};
