import React, { useState } from "react";
import axios from "../../api";
import "./FileUpload.css";

const FileUpload = () => {
  const [file, setFile] = useState(null); // Stores the uploaded file
  const [dragging, setDragging] = useState(false); // State for drag effects
  const [loading, setLoading] = useState(false); // Loading state
  const [metadata, setMetadata] = useState(null); // Metadata of the uploaded file
  const [pdfUrl, setPdfUrl] = useState(null); // URL of the converted PDF
  const [error, setError] = useState(null); // Error handling

  // Handle drag events
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) setFile(uploadedFile);
  };

  // Handle file input change
  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
    resetState();
  };

  const resetState = () => {
    setMetadata(null);
    setPdfUrl(null);
    setError(null);
  };

  // Handle file upload and conversion
  const handleFileUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    if (!file.name.endsWith(".docx")) {
      setError("Only .docx files are supported.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Step 1: Upload the file
      const uploadRes = await axios.post("/api/files/upload", formData);
      const { filename } = uploadRes.data;

      // Step 2: Fetch metadata
      const metadataRes = await axios.get(`/api/files/metadata/${filename}`);
      const rawMetadata = metadataRes.data;

      // Format metadata
      const formattedMetadata = formatMetadata(rawMetadata);
      setMetadata(formattedMetadata);

      // Step 3: Convert the file
      const convertRes = await axios.get(`/api/files/convert/${filename}`);
      setPdfUrl(convertRes.data.pdfPath);
    } catch (err) {
      setError("An error occurred during the process. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Function to format metadata
  const formatMetadata = (metadata) => {
    // Extract name after the hyphen from the filename
    const nameAfterHyphen = metadata.filename.split('-').slice(1).join('-');

    // Format file size to MB with 2 decimal places
    const formattedSize = (metadata.size / 1024 / 1024).toFixed(2) + " MB";

    // Format createdAt to a more user-friendly date
    const formattedDate = new Date(metadata.createdAt).toLocaleString();

    return {
      name: nameAfterHyphen,
      size: formattedSize,
      createdAt: formattedDate
    };
  };

  return (
    <div className="file-upload-container">
      {/* Left Section */}
      <div className="file-upload-left">
        <h1 className="title">Word to PDF Converter</h1>
        <div className="steps">
          <div className="step"><span style={{fontWeight:"bold"}}>Step 1</span>: Select the Word document you want to convert.</div>
          <div className="step"><span style={{fontWeight:"bold"}}>Step 2</span>: View metadata and wait for PDF conversion.</div>
          <div className="step"><span style={{fontWeight:"bold"}}>Step 3</span>: Download the converted PDF.</div>
        </div>
      </div>

      {/* Right Section */}
      <div className="file-upload-right">
        {/* Drag and Drop Area */}
        <div
          className={`file-drop-area ${dragging ? "dragging" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="file-upload"
            accept=".docx"
            onChange={handleFileSelect}
            style={{ display: "none" }}
          />
          <label htmlFor="file-upload" className="file-upload-label">
            {file ? (
              <p className="file-name">{file.name}</p>
            ) : (
              <div>
                <p>Click to choose a file or drag it here</p>
                <p>Supported formats: .docx</p>
              </div>
            )}
          </label>
        </div>

        {/* Upload Button */}
        <button
          className="upload-btn"
          onClick={handleFileUpload}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload and Convert"}
        </button>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Metadata Section */}
        {metadata && (
          <div className="metadata-container">
            <h3>File Metadata</h3>
            <table className="metadata-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>File Name</td>
                  <td>{metadata.name}</td>
                </tr>
                <tr>
                  <td>File Size</td>
                  <td>{metadata.size}</td>
                </tr>
                <tr>
                  <td>Created At</td>
                  <td>{metadata.createdAt}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Download Button */}
        {pdfUrl && (
          <button
            className="download-btn"
            onClick={() => window.open(pdfUrl, "_blank")}
          >
            Download PDF
          </button>
        )}
      </div>
    </div>
  );
};

export default FileUpload;