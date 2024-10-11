const express = require("express");
const { create } = require("./controller");
const upload = require("../../../middlewares/multer");

const router = express.Router();

router.post("/images", upload.single("cover"), create);

module.exports = router;
