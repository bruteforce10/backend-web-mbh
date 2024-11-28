const express = require("express");
const { create, destroy, indexJumbotron } = require("./controller");
const upload = require("../../../middlewares/multer");

const router = express.Router();

router.post("/images", upload.single("image"), create);
router.delete("/images/:id", destroy);

module.exports = router;
