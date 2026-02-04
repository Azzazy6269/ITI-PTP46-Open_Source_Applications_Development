const express = require('express');
const donateSchema = require("../schemas/donations/donateSchema");
const donationsController = require("../controllers/donations");
const validate = require("../middlewares/validate");

const router = express.Router();

router.post('/',validate(donateSchema),donationsController.createDonation);
router.post('/webhook',donationsController.webhook);


module.exports = router;
