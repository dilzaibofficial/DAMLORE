const express = require("express");
const { signup, login, sendResetCode, resetPassword } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password", sendResetCode); // Send reset code
router.post("/reset-password", resetPassword); // Reset password

module.exports = router;