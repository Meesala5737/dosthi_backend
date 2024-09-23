const router = require("express").Router();
const authService = require("../services/authService");
const userDetails = require("../services/userDetails");
router.route('/sendOtp').post(authService.sendOTPMail);
router.route('/userDetails').post(userDetails.userDetails);

module.exports = router;