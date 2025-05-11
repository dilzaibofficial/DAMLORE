import React, { useState } from "react";
import { Box, Typography, TextField, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";

const ArchiveSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([
    { id: 1, name: "Image1.jpg", src: "https://via.placeholder.com/150", tags: ["Tag1"] },
    { id: 2, name: "Image2.jpg", src: "https://via.placeholder.com/150", tags: ["Tag2"] },
    { id: 3, name: "Image3.jpg", src: "https://via.placeholder.com/150", tags: ["Tag3"] },
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Archive Section
      </Typography>
      <TextField
        fullWidth
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        sx={{ mb: 2 }}
      />
      <Grid container spacing={2}>
        {images
          .filter((image) => image.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <Card>
                <CardMedia component="img" height="150" image={image.src} alt={image.name} />
                <CardContent>
                  <Typography variant="subtitle1">{image.name}</Typography>
                  <Typography variant="body2">Tags: {image.tags.join(", ")}</Typography>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ mt: 1 }}
                    onClick={() => handleDelete(image.id)}
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default ArchiveSection;