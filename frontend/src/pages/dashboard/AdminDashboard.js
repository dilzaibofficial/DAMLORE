import React from "react";
import { Typography, Box } from "@mui/material";
import UploadImages from "../../components/UploadImages";
import ImageGallery from "../../components/ImageGallery";
import MetadataPanel from "../../components/MetadataPanel";
import StatusManagement from "../../components/StatusManagement";
import SessionManagement from "../../components/SessionManagement";
import ShootingListManagement from "../../components/ShootingListManagement";
import ExportSection from "../../components/ExportSection";
import ArchiveSection from "../../components/ArchiveSection"; // Import Archive Section

const AdminDashboard = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Box mt={2}>
        <UploadImages />
      </Box>
      <Box mt={4}>
        <ImageGallery />
      </Box>
      <Box mt={4}>
        <MetadataPanel />
      </Box>
      <Box mt={4}>
        <StatusManagement />
      </Box>
      <Box mt={4}>
        <SessionManagement />
      </Box>
      <Box mt={4}>
        <ShootingListManagement />
      </Box>
      <Box mt={4}>
        <ExportSection />
      </Box>
      <Box mt={4}>
        <ArchiveSection /> {/* Add Archive Section */}
      </Box>
    </Box>
  );
};

export default AdminDashboard;