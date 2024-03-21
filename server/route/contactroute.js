const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactcontroller');

// Route to store contact information
router.post('/contact', contactController.storeContactInfo);

// Route to get contact information
router.get('/contact', contactController.getContactInfo);

module.exports = router;
