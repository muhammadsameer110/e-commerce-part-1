import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = useState({
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
    const { email, password } = formData;

    
    if (!email || !password) {
      setError('Please fill in all the fields.');
      return;
    }

  
    console.log('Sign In successful:', formData);
    alert('Sign In successful!');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }} className="text-center">
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          size="small"
          name="email"
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
          Sign In
        </Button>
      </form>

      <Typography style={{ marginTop: '16px' }}>
        Don't have an account?{' '}
        <Link className="text-decoration-none" to="/signup">
          Sign Up
        </Link>
      </Typography>
    </div>
  );
};

export default Signin;
