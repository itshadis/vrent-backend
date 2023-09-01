const express = require('express');
const { getAllTestimonies } = require('../controllers/testimoniesControllers');

const router = express.Router();

router.get('/', getAllTestimonies);

module.exports = router;