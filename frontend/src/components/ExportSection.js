import React, { useState } from "react";
import "./ExportSection.css"; // Custom CSS for ExportSection

const ExportSection = () => {
  const [exportFormat, setExportFormat] = useState("CSV");
  const [selectedImages, setSelectedImages] = useState([
    { id: 1, name: "Image1.jpg", status: "READY" },
    { id: 2, name: "Image2.jpg", status: "APPROVED" },
    { id: 3, name: "Image3.jpg", status: "IN PROGRESS" },
  ]);

  const handleExport = () => {
    // Placeholder for export logic
    alert(`Exporting ${selectedImages.length} images in ${exportFormat} format.`);
    console.log("Exporting in format:", exportFormat);
    console.log("Selected Images:", selectedImages);
  };

  return (
    <div className="export-container">
      <div className="header">
        <h2>Export Section</h2>
        <span className="export-count">{selectedImages.length} images selected</span>
      </div>

      <div className="export-controls">
        <div className="export-format">
          <label htmlFor="export-format">Export Format:</label>
          <select
            id="export-format"
            value={exportFormat}
            onChange={(e) => setExportFormat(e.target.value)}
          >
            <option value="CSV">CSV</option>
            <option value="Excel">Excel</option>
          </select>
        </div>
        <button className="export-btn" onClick={handleExport}>
          Export
        </button>
      </div>

      <table className="export-table">
        <thead>
          <tr>
            <th>Image Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {selectedImages.map((image) => (
            <tr key={image.id}>
              <td>{image.name}</td>
              <td>{image.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExportSection;