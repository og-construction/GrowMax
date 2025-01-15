import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Checkbox, FormControlLabel, Box, Typography, Paper } from '@mui/material';

const LoginPage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1e3c72, #2a5298, #6dd5ed)',
        backgroundSize: '400% 400%',
        animation: 'gradient 8s ease infinite',
      }}
    >
      <Paper
        elevation={12}
        sx={{
          padding: 5,
          borderRadius: 5,
          maxWidth: 400,
          width: '90%',
        }}
      >
        {/* Logo or Welcome Section */}
        <Box textAlign="center" mb={3}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            Welcome Back!
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Login to continue your journey
          </Typography>
        </Box>

        {/* Form Section */}
        <form>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember me"
            />
            <Typography
              variant="body2"
              color="primary"
              sx={{ cursor: 'pointer', textDecoration: 'underline' }}
            >
              Forgot Password?
            </Typography>
          </Box>

          {/* Login Button */}
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #1e3c72, #2a5298)',
              color: '#fff',
              ':hover': {
                background: 'linear-gradient(to right, #2a5298, #6dd5ed)',
              },
            }}
          >
            Login
          </Button>
        </form>

        {/* Sign Up Section */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            Don't have an account?{' '}
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Typography
                component="span"
                variant="body2"
                color="primary"
                sx={{ fontWeight: 'bold', cursor: 'pointer' }}
              >
                Sign up
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Paper>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </Box>
  );
};

export default LoginPage;
