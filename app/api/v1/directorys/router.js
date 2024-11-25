const express = require("express");
const { create, index, indexOne, destroy, update } = require("./controller");
const router = express.Router();

router.post("/directory", create);
router.get("/directory", index);
router.get("/directory/:slug", indexOne);
router.delete("/directory/:id", destroy);
router.put("/directory/:id", update);

module.exports = router;
