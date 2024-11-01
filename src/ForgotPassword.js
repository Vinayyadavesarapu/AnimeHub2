// src/pages/ForgotPassword.js

import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Container } from "@mui/material";

const ForgotPassword = () => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Forgot Password
      </Typography>
      <form>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Reset Password
        </Button>
        <Typography align="center" style={{ margin: "10px 0" }}>
          <Link to="/">Back to Login</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default ForgotPassword;
