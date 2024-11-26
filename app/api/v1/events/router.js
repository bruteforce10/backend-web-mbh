const express = require("express");
const { create, index, indexOne, destroy, update } = require("./controller");
const router = express.Router();

router.post("/events", create);
router.get("/events", index);
router.get("/events/:slug", indexOne);
router.put("/events/:id", update);
router.delete("/events/:id", destroy);

module.exports = router;
