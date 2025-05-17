import React, { useState } from "react";
import { Button, TextField, Tabs, Tab, Card, CardContent } from "@mui/material";
import { FaFilter, FaDownload, FaTh } from "react-icons/fa";
import "./ImageGallery.css";

const ImageGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const images = [
    { id: 1, src: require("../assets/img1.jpg"), title: "Image 1", category: "Raw" },
    { id: 2, src: require("../assets/img2.jpg"), title: "Image 2", category: "In Progress" },
    { id: 3, src: require("../assets/img3.jpg"), title: "Image 3", category: "Approved" },
    { id: 4, src: require("../assets/img4.jpg"), title: "Image 4", category: "Delivered" },
  ];

  const tabs = ["All", "Raw", "In Progress", "Approved", "Delivered"];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const filteredImages = images.filter((image) => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "All" || image.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="image-gallery-container">
      <div className="header">
        <h2 className="title">Image Gallery</h2>
        <div className="status-bar">
          <span>Raw: <span className="status raw">1 (25%)</span></span>
          <span>In Progress: <span className="status in-progress">1 (25%)</span></span>
          <span>Approved: <span className="status approved">1 (25%)</span></span>
          <span>Delivered: <span className="status delivered">1 (25%)</span></span>
          <span className="total">Total: 4 images</span>
        </div>
      </div>

      <div className="search-filter">
        <TextField
          variant="outlined"
          placeholder="Search images..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
          fullWidth
        />
        <Button variant="outlined" startIcon={<FaFilter />}>Filters</Button>
        <Button variant="text">Clear</Button>
        <Button variant="outlined" startIcon={<FaDownload />}>Export</Button>
        <Button variant="outlined" startIcon={<FaTh />}>Grid View</Button>
      </div>

      <Tabs value={activeTab} onChange={handleTabChange} className="tabs">
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab} value={tab} />
        ))}
      </Tabs>

      <div className="cards">
        {filteredImages.map((image) => (
          <Card key={image.id} className="card">
            <CardContent>
              <div className="image-placeholder">
                <img src={image.src} alt={image.title} />
              </div>
              <div className="code">{image.title}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;