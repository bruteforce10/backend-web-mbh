const express = require("express");
const { create, index, update } = require("./controller");
const router = express.Router();

router.post("/jumbotron", create);
router.get("/jumbotron", index);
router.put("/jumbotron", update);

module.exports = router;
