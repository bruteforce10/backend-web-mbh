const express = require("express");
const {
  create,
  index,
  indexOne,
  indexDirectoryPromo,
} = require("./controller");
const router = express.Router();

router.post("/promos", create);
router.get("/promos", index);
router.get("/promos/:slug", indexOne);
router.get("/promos/directory/:id", indexDirectoryPromo);

module.exports = router;
