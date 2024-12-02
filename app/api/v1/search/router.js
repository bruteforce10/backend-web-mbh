const express = require("express");
const { index } = require("./controller");
const router = express.Router();

router.get("/search", index);

module.exports = router;
