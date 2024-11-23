const express = require("express");
const {
  uploadFile,
  getFileMetadata,
  convertToPDF,
} = require("../controllers/fileController");

const router = express.Router();

router.post("/upload", uploadFile);
router.get("/metadata/:filename", getFileMetadata);
router.get("/convert/:filename", convertToPDF);

module.exports = router;