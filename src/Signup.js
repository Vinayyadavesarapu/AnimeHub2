// src/pages/Signup.js

import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Container } from "@mui/material";

const Signup = () => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      <form>
        <TextField label="Username" fullWidth margin="normal" required />
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
        <Typography align="center" style={{ margin: "10px 0" }}>
          <Link to="/">Already have an account? Login</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default Signup;
