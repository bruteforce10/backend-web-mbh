const express = require("express");
const { create, index, destroy, update } = require("./controller");
const router = express.Router();

router.post("/articles", create);
router.get("/articles", index);
router.delete("/articles/:id", destroy);
router.put("/articles/:id", update);

module.exports = router;
