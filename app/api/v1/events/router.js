const express = require("express");
const { create, index, indexOne } = require("./controller");
const router = express.Router();

router.post("/events", create);
router.get("/events", index);
router.get("/events/:slug", indexOne);

module.exports = router;
