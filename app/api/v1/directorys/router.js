const express = require("express");
const { create } = require("./controller");
const router = express.Router();

router.post("/directory", create);

module.exports = router;
