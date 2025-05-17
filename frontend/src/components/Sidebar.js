import React, { useState } from "react";
import { Box, Typography, Button, Collapse, List, ListItem, ListItemText, Menu, MenuItem } from "@mui/material";
import { ExpandLess, ExpandMore, Logout } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";
import { logout } from "../utils/logout";

const Sidebar = ({ role }) => {
  const [openSections, setOpenSections] = useState({});
  const [anchorEl, setAnchorEl] = useState(null); // For dropdown menu
  const [selectedFilter, setSelectedFilter] = useState(""); // Track selected filter
  const navigate = useNavigate();

  // Define links for admin and user roles
  const adminLinks = [
    { text: "Upload Images", path: "/admin-dashboard/upload-images" },
    { text: "Image Gallery", path: "/admin-dashboard/image-gallery" },
    { text: "Metadata Panel", path: "/admin-dashboard/metadata-panel" },
    { text: "Status Management", path: "/admin-dashboard/status-management" },
    { text: "Session Management", path: "/admin-dashboard/session-management" },
    { text: "Shooting List", path: "/admin-dashboard/shooting-list-management" },
    { text: "Export", path: "/admin-dashboard/export" },
    { text: "Archive", path: "/admin-dashboard/archive" },
  ];

  const userLinks = [
    { text: "Image Gallery", path: "/user-dashboard/image-gallery" },
    { text: "Notes", path: "/user-dashboard/notes" },
    { text: "Export", path: "/user-dashboard/export" },
    { text: "Archive", path: "/user-dashboard/archive" },
  ];

  // Select links based on the role
  const links = role === "admin" ? adminLinks : userLinks;

  // Filter options
  const filters = [
    { name: "Client", options: ["Farfetch", "Mytheresa", "Luisaviaroma", "YNAP", "Zalando", "Moda Operandi", "Net-a-Porter", "Matches Fashion"] },
    { name: "Asset Type", options: ["On Model", "Ghost", "Still Life", "Video"] },
    { name: "Season", options: ["SS24", "FW24", "SS25"] },
    { name: "Merchandising Class", options: ["SOCKS", "SET UNDERWEAR", "SCARF", "SMALL LEATHER GOODS", "SUNGLASSES", "TIES", "TOWEL"] },
    { name: "Gender", options: ["Men", "Women", "Unisex"] },
  ];

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleMenuOpen = (event, filterName) => {
    setAnchorEl(event.currentTarget);
    setSelectedFilter(filterName);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedFilter("");
  };

  return (
    <Box className="custom-sidebar">
      {/* Header */}
      <Box className="sidebar-header">
        <div className="avatar">P</div>
        <div>
          <Typography variant="h6">Photo DAM</Typography>
        </div>
      </Box>

      {/* Navigation */}
      <Box className="sidebar-nav">
        <List>
          {links.map((link, index) => (
            <ListItem button component={Link} to={link.path} key={index} className="nav-item">
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Filters */}
      <Box className="sidebar-filters">
        <Typography variant="subtitle1" className="filter-title">Filters</Typography>
        {filters.map((filter, index) => (
          <Box key={index}>
            <Box className="filter-item" onClick={() => toggleSection(filter.name)}>
              <span>{filter.name}</span>
              {openSections[filter.name] ? <ExpandLess /> : <ExpandMore />}
            </Box>
            <Collapse in={openSections[filter.name]}>
              <Box className="filter-content">
                <Button
                  variant="outlined"
                  onClick={(event) => handleMenuOpen(event, filter.name)}
                  fullWidth
                >
                  Select {filter.name}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && selectedFilter === filter.name}
                  onClose={handleMenuClose}
                >
                  {filter.options.map((option, idx) => (
                    <MenuItem key={idx} onClick={handleMenuClose}>
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Collapse>
          </Box>
        ))}
      </Box>

      {/* Footer Buttons */}
      <Box className="sidebar-footer">
        <Box className="footer-buttons">
          <Button variant="outlined" color="secondary" fullWidth>Clear</Button>
          <Button variant="contained" color="primary" fullWidth>Search</Button>
        </Box>
        <Button variant="contained" color="success" fullWidth className="save-btn">Save</Button>
        <Button
        class Name="logout-btn"
          variant="contained"
          color="error"
          fullWidth
          startIcon={<Logout />}
          onClick={() => logout(navigate)} // Call logout function
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;