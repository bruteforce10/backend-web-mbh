const express = require("express");
const { create } = require("./controller");
const router = express.Router();

router.post("/articles", create);

module.exports = router;
