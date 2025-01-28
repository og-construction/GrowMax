import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

const UpcomingEvents = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "grey.100", p: 4 }}>
      {/* Header Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight="bold" color="text.primary" gutterBottom>
          Upcoming Events
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Explore our exciting upcoming events designed for growth and success.
        </Typography>
        <Button
          onClick={() => navigate(-1)}
          variant="contained"
          sx={{
            mt: 2,
            px: 4,
            py: 1,
            backgroundColor: "primary.main",
            ":hover": { backgroundColor: "primary.dark" },
          }}
        >
          Back to Events
        </Button>
      </Box>

      {/* Events Grid */}
      <Grid container spacing={3}>
        {/* Example Event 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Event 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Details about Event 1.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                sx={{
                  ml: 2,
                  mb: 1,
                  backgroundColor: "primary.main",
                  ":hover": { backgroundColor: "primary.dark" },
                }}
              >
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Example Event 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Event 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Details about Event 2.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                sx={{
                  ml: 2,
                  mb: 1,
                  backgroundColor: "primary.main",
                  ":hover": { backgroundColor: "primary.dark" },
                }}
              >
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Example Event 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Event 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Details about Event 3.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                sx={{
                  ml: 2,
                  mb: 1,
                  backgroundColor: "primary.main",
                  ":hover": { backgroundColor: "primary.dark" },
                }}
              >
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UpcomingEvents;
