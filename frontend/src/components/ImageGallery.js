import React from "react";
import { Box, Grid, Card, CardMedia, Typography } from "@mui/material";

const ImageGallery = () => {
  // Placeholder images
  const images = [
    { id: 1, src: "https://via.placeholder.com/150", title: "Image 1" },
    { id: 2, src: "https://via.placeholder.com/150", title: "Image 2" },
    { id: 3, src: "https://via.placeholder.com/150", title: "Image 3" },
  ];

  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Image Gallery
      </Typography>
      <Grid container spacing={2}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image={image.src}
                alt={image.title}
              />
              <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                {image.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageGallery;