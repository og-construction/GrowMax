import React from 'react';
import { Link } from 'react-router-dom';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  Paper,
} from '@mui/material';

const RegisterForm = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
        padding: 1, // Reduced padding for the container
      }}
    >
      <Paper
        elevation={8}
        sx={{
          padding: 2, // Reduced padding for the form
          borderRadius: 4,
          maxWidth: 350, // Reduced maxWidth
          width: '90%',
        }}
      >
        {/* Logo or Welcome Section */}
        <Box textAlign="center" mb={2}>
          <div
            style={{
              background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
              width: '40px', // Reduced size
              height: '40px', // Reduced size
              borderRadius: '50%',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
            }}
          >
            <i className="fas fa-user-plus" style={{ color: 'white', fontSize: '16px' }}></i>
          </div>
          <Typography
            variant="h6" // Changed from h5 to h6 for smaller size
            component="h1"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            Create Your Account
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.8rem' }}>
            Register to get started with us
          </Typography>
        </Box>

        {/* Form Section */}
        <form>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="dense" // Reduced margin between fields
            size="small" // Smaller input size
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="dense"
            size="small"
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="dense"
            size="small"
            required
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="dense"
            size="small"
            required
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ fontSize: '0.8rem' }}
              >
                I agree to the{' '}
                <Typography
                  component="span"
                  color="primary"
                  sx={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  Terms and Conditions
                </Typography>
              </Typography>
            }
            sx={{ marginTop: 1 }}
          />

          <Button
            variant="contained"
            color="primary"
            size="medium" // Smaller button size
            fullWidth
            sx={{
              mt: 2,
              py: 0.8, // Reduced padding for the button
              textTransform: 'none',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
              ':hover': {
                background: 'linear-gradient(to right, #e76b51, #fdad70)',
              },
            }}
          >
             <Link to="/login" style={{ textDecoration: 'none' }}>
            Register
            </Link>
          </Button>
        </form>

        {/* Login Link */}
        <Box textAlign="center" mt={2}>
          <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Typography
                component="span"
                variant="body2"
                color="primary"
                sx={{ fontWeight: 'bold', cursor: 'pointer' }}
              >
                Login
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default RegisterForm;
