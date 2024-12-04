const express = require("express");
const { sendEmail } = require("./controller");
const router = express.Router();

router.post("/send-email", sendEmail);

module.exports = router;
