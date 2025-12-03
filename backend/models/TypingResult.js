const mongoose = require('mongoose');

const typingResultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  wpm: {
    type: Number,
    required: true
  },
  accuracy: {
    type: Number,
    required: true
  },
  rawWPM: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  mode: {
    type: String,
    enum: ['15s', '30s', '60s', '120s'],
    required: true
  },
  mistakes: {
    type: Number,
    default: 0
  },
  textLength: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('TypingResult', typingResultSchema);
