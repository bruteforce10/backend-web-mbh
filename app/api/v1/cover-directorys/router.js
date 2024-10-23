const express = require("express");
const { create, find } = require("./controller");
const router = express.Router();

router.post("/cover-directorys", create);
router.get("/cover-directorys/:id", find);

module.exports = router;
