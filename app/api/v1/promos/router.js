const express = require("express");
const {
  create,
  index,
  indexOne,
  indexDirectoryPromo,
  destroy,
  update,
} = require("./controller");
const router = express.Router();

router.post("/promos", create);
router.get("/promos", index);
router.get("/promos/:slug", indexOne);
router.get("/promos/directory/:id", indexDirectoryPromo);
router.put("/promos/:id", update);
router.delete("/promos/:id", destroy);

module.exports = router;
