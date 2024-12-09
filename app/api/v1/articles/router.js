const express = require("express");
const {
  create,
  index,
  destroy,
  update,
  indexOne,
  search,
} = require("./controller");
const router = express.Router();

router.post("/articles", create);
router.get("/articles", index);
router.delete("/articles/:id", destroy);
router.put("/articles/:id", update);
router.get("/articles/:slug", indexOne);
router.get("/articles-search", search);

module.exports = router;
