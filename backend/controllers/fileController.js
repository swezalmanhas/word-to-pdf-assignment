const asyncHandler = require("express-async-handler");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { PDFDocument,rgb,StandardFonts } = require("pdf-lib");
const mammoth = require("mammoth");
const libre = require("libreoffice-convert");


// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Upload handler
const uploadFile = [
  upload.single("file"),
  asyncHandler((req, res) => {
    if (!req.file) throw new Error("File not uploaded");
    res.status(200).json({ filename: req.file.filename, path: req.file.path });
  }),
];

// Metadata display handler
const getFileMetadata = asyncHandler((req, res) => {
  const { filename } = req.params;
  const filePath = `uploads/${filename}`;
  if (!fs.existsSync(filePath)) throw new Error("File not found");

  const stats = fs.statSync(filePath);
  res.status(200).json({
    filename,
    size: stats.size,
    createdAt: stats.birthtime,
  });
});

// Conversion handler
const convertToPDF = asyncHandler(async (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "../uploads", filename);

  try {
    if (!fs.existsSync(filePath)) {
      console.error("File not found:", filePath);
      throw new Error("File not found");
    }

    if (!filePath.endsWith(".docx")) {
      console.error("Invalid file format:", filePath);
      throw new Error("Invalid file format. Only .docx files are supported.");
    }

    console.log("Converting Word document to PDF...");
    const fileBuffer = fs.readFileSync(filePath);
    const outputPath = filePath.replace(".docx", ".pdf");

    const pdfBuffer = await new Promise((resolve, reject) => {
      libre.convert(fileBuffer, ".pdf", undefined, (err, done) => {
        if (err) {
          return reject(err);
        }
        resolve(done);
      });
    });

    fs.writeFileSync(outputPath, pdfBuffer);

    console.log("PDF generated at:", outputPath);

    res.status(200).json({ pdfPath: `http://localhost:5000/uploads/${path.basename(outputPath)}` });
  } catch (error) {
    console.error("Error converting file to PDF:", error);
    throw new Error("Failed to convert file to PDF. " + error.message);
  }
});





module.exports = { uploadFile, getFileMetadata, convertToPDF };