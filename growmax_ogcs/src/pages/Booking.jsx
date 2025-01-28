import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Booking = () => {
  const [formData, setFormData] = useState({
    eventType: '',
    secondField: '',
    name: '',
    event: '',
    attendees: '',
    location: '',
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
    console.log('Form submitted:', formData);
    alert('Booking submitted successfully!');
    setFormData({
      eventType: '',
      secondField: '',
      name: '',
      event: '',
      attendees: '',
      location: '',
    });
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #8e44ad, #3498db)',
        padding: 1,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          padding: 2,
          borderRadius: 4,
          maxWidth: 350,
          width: '85%',
        }}
      >
        <Box textAlign="center" mb={2}>
          <Typography
            variant="h6"
            component="h1"
            fontWeight="bold"
            color="secondary"
            gutterBottom
          >
            Book Your Event
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Fill in the details to book your event.
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="dense" required size="small">
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
              label={formData.eventType === 'College' ? 'College/Company Name' : 'Company Name'}
              name="secondField"
              variant="outlined"
              fullWidth
              margin="dense"
              value={formData.secondField}
              onChange={handleChange}
              required
              size="small"
            />
          )}

          <TextField
            label="Your Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="dense"
            value={formData.name}
            onChange={handleChange}
            required
            size="small"
          />
          <TextField
            label="Event Name"
            name="event"
            variant="outlined"
            fullWidth
            margin="dense"
            value={formData.event}
            onChange={handleChange}
            required
            size="small"
          />
          <TextField
            label="Attendees"
            name="attendees"
            variant="outlined"
            fullWidth
            margin="dense"
            value={formData.attendees}
            onChange={handleChange}
            required
            size="small"
          />
          <TextField
            label="Location"
            name="location"
            variant="outlined"
            fullWidth
            margin="dense"
            value={formData.location}
            onChange={handleChange}
            required
            size="small"
          />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            sx={{
              mt: 2,
              py: 0.8,
              textTransform: 'none',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #e74c3c, #f1c40f)',
              ':hover': {
                background: 'linear-gradient(to right, #c0392b, #d4ac0d)',
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
