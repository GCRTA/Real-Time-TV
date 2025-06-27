const express = require('express');
const controller = require('./alerts.controller');

const router = express.Router();

// POST /api/alerts/summary
router.post('/summary', controller.summarize);

module.exports = router; 