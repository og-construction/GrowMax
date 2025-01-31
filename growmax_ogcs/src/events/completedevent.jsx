import React, { useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material";

// Image Assets
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import Award2 from "../assets/Award2.jpeg";
import Award from "../assets/Award.jpeg";
import Award3 from "../assets/Award3.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";

// Video Assets
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";

// Data Arrays
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

const videos = [
  { id: 1, name: "Project Launch", location: "Mumbai, India", src: video1 },
  { id: 2, name: "Award Highlights", location: "Delhi, India", src: video2 },
  { id: 3, name: "Annual Meet Highlights", location: "Pune, India", src: video3 },
  { id: 4, name:"Training ", location: "Panvel, India", src: video4 },
];

// Component
const CompletedEvent = () => {
  const [showImages, setShowImages] = useState(true);

  // Toggle Handler
  const handleToggle = (option) => {
    setShowImages(option === "images");
  };

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        position: "relative",
        top: 80, 
        zIndex: 1,
      }}
    >
      {/* Toggle Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 4,
          gap: 2, // Add spacing between buttons
          flexWrap: "wrap", 
          zIndex: 2,
        }}
      >
        <Button
          variant={showImages ? "contained" : "outlined"}
          onClick={() => handleToggle("images")}
          sx={{
            padding: "10px 20px",
            fontWeight: "bold",
            fontSize: "16px",
            textTransform: "none",
            borderRadius: 2,
          }}
        >
          Images
        </Button>
        <Button
          variant={!showImages ? "contained" : "outlined"}
          onClick={() => handleToggle("videos")}
          sx={{
            padding: "10px 20px",
            fontWeight: "bold",
            fontSize: "16px",
            textTransform: "none",
            borderRadius: 2,
          }}
        >
          Videos
        </Button>
      </Box>

      {/* Gallery Title */}
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ marginBottom: 4 }}
      >
        {showImages ? "Event Gallery" : "Video Gallery"}
      </Typography>

      {/* Gallery Content */}
      <Grid container spacing={4}>
        {showImages
          ? images.map((image) => (
              <Grid item xs={12} sm={6} md={4} key={image.id}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: 350,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={image.src}
                    alt={image.name}
                    sx={{
                      height: 250,
                      width: "100%",
                      objectFit: "cover",
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
            ))
          : videos.map((video) => (
              <Grid item xs={12} sm={6} md={4} key={video.id}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: 450,
                  }}
                >
                  <CardMedia
                    component="video"
                    controls
                    src={video.src}
                    alt={video.name}
                    sx={{
                      height: 396,
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h12"
                      fontWeight="bold"
                      sx={{ marginBottom: 1, color: "#000" }}
                    >
                      {video.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      {video.location}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default CompletedEvent;
