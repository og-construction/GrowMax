import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Checkbox, FormControlLabel, Box, Typography, Paper } from '@mui/material';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      console.log('Token:', response.data.token); // Handle token storage
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

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
            Login
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Please enter your credentials to log in
          </Typography>
        </Box>

        {/* Form Section */}
        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}

          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            <FormControlLabel control={<Checkbox color="primary" />} label="Remember me" />
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
            type="submit"
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
