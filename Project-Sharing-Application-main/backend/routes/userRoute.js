const express = require("express");
const { signUp, login } = require("../controllers/userController");
const router = express.Router();

router.route("/signUp").post(signUp);
router.route("/login").post(login);

module.exports = router;
