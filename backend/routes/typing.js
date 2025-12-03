const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/clerkAuth');
const {
  submitResult,
  getHistory,
  getStats,
  getBest
} = require('../controllers/typingController');

router.post('/result', requireAuth, submitResult);
router.get('/history', requireAuth, getHistory);
router.get('/stats', requireAuth, getStats);
router.get('/best', requireAuth, getBest);

module.exports = router;
