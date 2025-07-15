const express = require("express");
const router = express.Router();
const {
  register,
  login,
  sendResetLink,
  resetPassword
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/reset", sendResetLink);
router.post("/new-password", resetPassword);

module.exports = router;
