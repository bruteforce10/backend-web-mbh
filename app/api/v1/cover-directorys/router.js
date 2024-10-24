const express = require("express");
const { create, find, update } = require("./controller");
const router = express.Router();

router.post("/cover-directorys", create);
router.get("/cover-directorys/:id", find);
router.put("/cover-directorys/:id", update);

module.exports = router;
