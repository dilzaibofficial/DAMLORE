import React from "react";
import { Box, List, ListItem, ListItemText, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../utils/logout"; // Ensure this is inside the `src` directory
import '../styles/Sidebar.css';


const Sidebar = ({ role }) => {
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

  return (
    <Box
      width="250px"
      bgcolor="background.default"
      height="100vh"
      p={2}
      sx={{ borderRight: "1px solid #ddd" }}
    >
      <Typography variant="h6" gutterBottom>
        {role === "admin" ? "Admin Dashboard" : "User Dashboard"}
      </Typography>
      <List>
        {links.map((link, index) => (
          <ListItem button component={Link} to={link.path} key={index}>
            <ListItemText primary={link.text} />
          </ListItem>
        ))}
      </List>
      <Box mt={2}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() => logout(navigate)} // Call logout function
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;