const express = require("express");
const { create } = require("./controller");
const upload = require("../../../middlewares/multer");

const router = express.Router();

router.post("/images", upload.single("image"), create);

module.exports = router;
