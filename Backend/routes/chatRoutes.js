const express = require('express');
const { addMessage, sendingGemini } = require('../controllers/chatController');
const router = express.Router();

router.route('/').post(addMessage);
router.post('/gemini',sendingGemini)

module.exports = router;
