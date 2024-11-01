const express = require("express");
const { create, index } = require("./controller");
const router = express.Router();

router.post("/directory", create);
router.get("/directory", index);

module.exports = router;
