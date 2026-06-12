const express = require("express");
const multer = require("multer");

const {uploadCsv} = require("../controllers/uploadController");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), uploadCsv);


export default router;