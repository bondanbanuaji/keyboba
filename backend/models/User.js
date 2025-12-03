const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: String,
  totalTests: {
    type: Number,
    default: 0
  },
  bestWPM: {
    type: Number,
    default: 0
  },
  averageWPM: {
    type: Number,
    default: 0
  },
  totalKeysPressed: {
    type: Number,
    default: 0
  },
  achievements: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Achievement'
  }],
  streak: {
    type: Number,
    default: 0
  },
  lastActive: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
