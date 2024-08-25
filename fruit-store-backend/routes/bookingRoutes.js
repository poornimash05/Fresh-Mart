const express = require('express');
const { bookProduct } = require('../controllers/bookingController');
const router = express.Router();

router.post('/book', bookProduct);

module.exports = router;