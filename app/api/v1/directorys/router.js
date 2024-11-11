const express = require("express");
const { create, index, indexOne } = require("./controller");
const router = express.Router();

router.post("/directory", create);
router.get("/directory", index);
router.get("/directory/:slug", indexOne);

module.exports = router;
