import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Checkbox, FormControlLabel, Box, Typography, Paper } from '@mui/material';
import axios from 'axios';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    programName: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      setSuccess(response.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
      setSuccess('');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
        padding: 2,
      }}
    >
      <Paper
        elevation={12}
        sx={{
          padding: 4,
          borderRadius: 10,
          maxWidth: 400,
          width: '90%',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" component="h1" fontWeight="bold" color="primary" gutterBottom>
            Register
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Sign up to unlock the full experience!
          </Typography>
        </Box>

        <form onSubmit={handleRegister}>
          <TextField
            label="Full Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            label="Mobile"
            name="mobile"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={formData.mobile}
            onChange={handleInputChange}
          />
          <TextField
            label="Program Name"
            name="programName"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={formData.programName}
            onChange={handleInputChange}
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={
              <Typography variant="body2" color="textSecondary">
                I agree to the{' '}
                <Typography component="span" color="primary" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
                  Terms and Conditions
                </Typography>
              </Typography>
            }
            sx={{ mt: 2 }}
          />

          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="success" variant="body2" sx={{ mt: 2 }}>
              {success}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 'bold',
              textTransform: 'none',
              background: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)',
              color: '#fff',
              ':hover': {
                background: 'linear-gradient(135deg, #91b3f4, #aedcf7)',
              },
            }}
          >
            Register
          </Button>
        </form>

        <Box textAlign="center" mt={3}>
          <Typography variant="body2">
            Already have an account?{' '}
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Typography component="span" variant="body2" color="primary" sx={{ fontWeight: 'bold', cursor: 'pointer' }}>
                Login
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
