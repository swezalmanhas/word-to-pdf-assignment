// src/components/MetadataDisplay.js
import React from "react";

// Helper function to format file size in MB
const formatFileSize = (sizeInBytes) => {
  return (sizeInBytes / (1024 * 1024)).toFixed(2) + " MB"; // Convert bytes to MB
};

// Helper function to format the date in dd/mm/yyyy hh:mm format
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getDate().toString().padStart(2, "0")}/${
    (date.getMonth() + 1).toString().padStart(2, "0")
  }/${date.getFullYear()} ${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
};

const MetadataDisplay = ({ metadata }) => {
  return (
    <div className="metadata-display">
      <h2>File Metadata</h2>
      <table className="metadata-table">
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>File Name</td>
            <td>{metadata.filename}</td>
          </tr>
          <tr>
            <td>File Size</td>
            <td>{formatFileSize(metadata.size)}</td>
          </tr>
          <tr>
            <td>Created At</td>
            <td>{formatDate(metadata.createdAt)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MetadataDisplay;
