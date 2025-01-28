import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import Award2 from "../assets/Award2.jpeg";
import Award from "../assets/Award.jpeg";
import Award3 from "../assets/Award3.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";

const images = [
  { id: 1, name: "Team Celebration", location: "Mumbai, India", src: img1 },
  { id: 2, name: "Project Completion", location: "Pune, India", src: img2 },
  { id: 3, name: "Award Ceremony", location: "Delhi, India", src: img3 },
  { id: 4, name: "Achievement Award", location: "Bangalore, India", src: Award2 },
  { id: 5, name: "Best Performer Award", location: "Chennai, India", src: Award },
  { id: 6, name: "Leadership Excellence", location: "Hyderabad, India", src: Award3 },
  { id: 7, name: "Site Visit", location: "Ahmedabad, India", src: img7 },
  { id: 8, name: "Annual Meet", location: "Kolkata, India", src: img8 },
  { id: 9, name: "Innovation Showcase", location: "Jaipur, India", src: img9 },
];

const completedevent = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ marginBottom: 4 }}
      >
        Image Gallery
      </Typography>
      <Grid container spacing={4}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: 350, // Ensure all cards have the same height
              }}
            >
              <CardMedia
                component="img"
                image={image.src}
                alt={image.name}
                sx={{
                  height: 250, // Consistent height for images
                  width: "100%", // Full width
                  objectFit: "cover", // Ensure the image covers the area
                  objectPosition: "center",
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ marginBottom: 1, color: "#000" }}
                >
                  {image.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#555" }}>
                  {image.location}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default completedevent;
