import React, { useState } from "react";
import { FaFilter, FaDownload, FaTh } from "react-icons/fa";
import "./ArchiveSection.css"; // Custom CSS for ArchiveSection

const ArchiveSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const images = [
    { id: 1, name: "Image1.jpg", src: require("../assets/img1.jpg"), tags: ["Nature", "Tag1"], category: "Nature" },
    { id: 2, name: "Image2.jpg", src: require("../assets/img2.jpg"), tags: ["Wildlife", "Tag2"], category: "Wildlife" },
    { id: 3, name: "Image3.jpg", src: require("../assets/img3.jpg"), tags: ["Portrait", "Tag3"], category: "Portrait" },
    { id: 4, name: "Image4.jpg", src: require("../assets/img4.jpg"), tags: ["Landscape", "Tag4"], category: "Landscape" },
    { id: 5, name: "Image5.jpg", src: require("../assets/img5.jpg"), tags: ["Urban", "Tag5"], category: "Urban" },
    { id: 6, name: "Image6.jpg", src: require("../assets/img6.jpg"), tags: ["Abstract", "Tag6"], category: "Abstract" },
    { id: 7, name: "Image7.jpg", src: require("../assets/img7.jpg"), tags: ["Macro", "Tag7"], category: "Macro" },
    { id: 8, name: "Image8.jpg", src: require("../assets/img8.jpg"), tags: ["Travel", "Tag8"], category: "Travel" },
    { id: 9, name: "Image9.jpg", src: require("../assets/img9.jpg"), tags: ["Adventure", "Tag9"], category: "Adventure" },
  ];

  const tabs = ["All", "Nature", "Wildlife", "Portrait", "Landscape", "Urban", "Abstract", "Macro", "Travel", "Adventure"];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const filteredImages = images.filter((image) => {
    const matchesSearch = image.name.toLowerCase().includes(searchTerm.toLowerCase()) || image.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTab = activeTab === "All" || image.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="archive-container">
      <div className="header">
        <h2 className="title">Archive Section</h2>
        <div className="status-bar">
          <span>Nature: <span className="status nature">2 (22%)</span></span>
          <span>Wildlife: <span className="status wildlife">1 (11%)</span></span>
          <span>Portrait: <span className="status portrait">1 (11%)</span></span>
          <span>Landscape: <span className="status landscape">1 (11%)</span></span>
          <span className="total">Total: {images.length} images</span>
        </div>
      </div>

      <div className="search-filter">
        <input
          type="text"
          placeholder="Search images by name or tags..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <button className="btn"><FaFilter className="icon" /> Filters</button>
        <button className="btn">Clear</button>
        <button className="btn"><FaDownload className="icon" /> Export</button>
        <button className="btn"><FaTh className="icon" /> Grid View</button>
      </div>

      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="cards">
        {filteredImages.map((image) => (
          <div key={image.id} className="card">
            <div className="image-placeholder">
              <img src={image.src} alt={image.name} />
            </div>
            <div className="code">{image.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchiveSection;