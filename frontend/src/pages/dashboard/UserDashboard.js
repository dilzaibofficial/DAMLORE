import React from "react";
import { Box, Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar"; // Import Sidebar
import ImageGallery from "../../components/ImageGallery";
import NotesPanel from "../../components/NotesPanel";
import ExportSection from "../../components/ExportSection";
import ArchiveSection from "../../components/ArchiveSection";
import { logout } from "../../utils/logout"; // Import logout function
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex">
      <Sidebar role="user" /> {/* Sidebar for User */}
      <Box flex={1} p={3}>
        {/* <Box display="flex" justifyContent="space-between" alignItems="center">
          <h1>User Dashboard</h1>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => logout(navigate)} // Call logout function
          >
            Logout
          </Button>
        </Box> */}
        <Routes>
          {/* Default route redirects to "image-gallery" */}
          <Route path="/" element={<Navigate to="image-gallery" replace />} />
          <Route path="image-gallery" element={<ImageGallery />} />
          <Route path="notes" element={<NotesPanel />} />
          <Route path="export" element={<ExportSection />} />
          <Route path="archive" element={<ArchiveSection />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default UserDashboard;