const express = require('express');
const router = express.Router();
const {
  getGlobalLeaderboard,
  getDailyLeaderboard,
  getFriendsLeaderboard
} = require('../controllers/leaderboardController');

router.get('/global', getGlobalLeaderboard);
router.get('/daily', getDailyLeaderboard);
router.get('/friends', getFriendsLeaderboard);

module.exports = router;
