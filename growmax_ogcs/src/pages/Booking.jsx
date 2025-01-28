import React, { useState } from "react";
import bookingImage from "../assets/booking.jpeg";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const Booking = () => {
  const [formData, setFormData] = useState({
    eventType: "",
    secondField: "",
    name: "",
    event: "",
    attendees: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Booking submitted successfully!");
    setFormData({
      eventType: "",
      secondField: "",
      name: "",
      event: "",
      attendees: "",
      location: "",
    });
  };

  return (
    <Box
      sx={{
        height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${bookingImage})`,

          backgroundSize: "cover",  
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat",  
    padding: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: 8,
          maxWidth: 500,
          width: "90%",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",  
          backgroundColor: "rgba(255, 255, 255, 0.9)",  
          backdropFilter: "blur(5px)",  
        }}
      >
        <Box textAlign="center" mb={3}>
          <Typography
            variant="h5"
            component="h1"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            Book Your Event
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Fill in the details to secure your booking.
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="event-type-label">Event Type</InputLabel>
            <Select
              labelId="event-type-label"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              variant="outlined"
            >
              <MenuItem value="">Select Event Type</MenuItem>
              <MenuItem value="College">College Event</MenuItem>
              <MenuItem value="Corporate">Corporate Event</MenuItem>
            </Select>
          </FormControl>

          {formData.eventType && (
            <TextField
              label={
                formData.eventType === "College"
                  ? "College/Institute Name"
                  : "Company Name"
              }
              name="secondField"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.secondField}
              onChange={handleChange}
              required
            />
          )}

          <TextField
            label="Your Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Event Name"
            name="event"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.event}
            onChange={handleChange}
            required
          />
          <TextField
            label="Attendees"
            name="attendees"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.attendees}
            onChange={handleChange}
            required
          />
          <TextField
            label="Location"
            name="location"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "none",
              background: "linear-gradient(to right, #6a11cb, #2575fc)", // Button gradient
              color: "#fff",
              ":hover": {
                background: "linear-gradient(to right, #4c8bf5, #375cdc)",
              },
            }}
          >
            Submit Booking
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Booking;
