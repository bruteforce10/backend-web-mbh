const express = require("express");
const { create, index } = require("./controller");
const router = express.Router();

router.post("/events", create);
router.get("/events", index);

module.exports = router;
