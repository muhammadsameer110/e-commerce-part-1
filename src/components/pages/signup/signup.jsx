import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(''); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = formData;

    if (!firstName || !lastName || !email || !password) {
      setError('Please fill in all the fields.');
      return;
    }

    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }} className="text-center">
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          size="small"
          name="firstName"
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextField
          size="small"
          name="lastName"
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.lastName}
          onChange={handleChange}
        />
        <TextField
          size="small"
          name="email"
          type='email'
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          size="small"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />

        {error && (
          <Typography color="error" style={{ marginTop: '8px' }}>
            {error}
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '16px' }}
        >
          Sign Up
        </Button>
      </form>

      <Typography style={{ marginTop: '16px' }}>
        You have an old account?{' '}
        <Link className="text-decoration-none" to="/signin">
          Sign In
        </Link>
      </Typography>
    </div>
  );
};

export default Signin;
