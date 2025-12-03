const express = require('express');
const router = express.Router();
const { syncUser, getUser } = require('../controllers/authController');

router.post('/sync', syncUser);
router.get('/user/:id', getUser);

module.exports = router;
