import React from "react";
import { Box, Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar"; // Import Sidebar
import UploadImages from "../../components/UploadImages";
import ImageGallery from "../../components/ImageGallery";
import MetadataPanel from "../../components/MetadataPanel";
import StatusManagement from "../../components/StatusManagement";
import SessionManagement from "../../components/SessionManagement";
import ShootingListManagement from "../../components/ShootingListManagement";
import ExportSection from "../../components/ExportSection";
import ArchiveSection from "../../components/ArchiveSection";
import { logout } from "../../utils/logout"; // Import logout function
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex">
      <Sidebar role="admin" /> {/* Sidebar for Admin */}
      <Box flex={1} p={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h1>Admin Dashboard</h1>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => logout(navigate)} // Call logout function
          >
            Logout
          </Button>
        </Box>
        <Routes>
          {/* Default route redirects to "upload-images" */}
          <Route path="/" element={<Navigate to="upload-images" replace />} />
          <Route path="upload-images" element={<UploadImages />} />
          <Route path="image-gallery" element={<ImageGallery />} />
          <Route path="metadata-panel" element={<MetadataPanel />} />
          <Route path="status-management" element={<StatusManagement />} />
          <Route path="session-management" element={<SessionManagement />} />
          <Route path="shooting-list-management" element={<ShootingListManagement />} />
          <Route path="export" element={<ExportSection />} />
          <Route path="archive" element={<ArchiveSection />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default AdminDashboard;