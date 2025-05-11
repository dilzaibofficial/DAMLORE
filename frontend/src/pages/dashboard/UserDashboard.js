import React from "react";
import { Typography, Box } from "@mui/material";
import ImageGallery from "../../components/ImageGallery";
import NotesPanel from "../../components/NotesPanel";
import ExportSection from "../../components/ExportSection";
import ArchiveSection from "../../components/ArchiveSection";

const UserDashboard = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        User Dashboard
      </Typography>
      <Box mt={4}>
        <ImageGallery /> {/* Display images */}
      </Box>
      <Box mt={4}>
        <NotesPanel /> {/* Add comments or feedback */}
      </Box>
      <Box mt={4}>
        <ExportSection /> {/* Limited export functionality */}
      </Box>
      <Box mt={4}>
        <ArchiveSection /> {/* Read-only archive */}
      </Box>
    </Box>
  );
};

export default UserDashboard;