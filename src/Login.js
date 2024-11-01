// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button, Typography, Container } from "@mui/material";

const Login = ({ onLogin }) => {
  // Accept onLogin prop
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    // Check for the correct credentials
    if (loginId === "TeamDream" && password === "63798") {
      onLogin(); // Call onLogin to change login state
      navigate("/home"); // Redirect to home page on successful login
    } else {
      setError("Invalid login ID or password"); // Set error message for invalid credentials
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Login ID"
          fullWidth
          margin="normal"
          required
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)} // Update login ID state
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
        <Typography align="center" style={{ margin: "10px 0" }}>
          <Link to="/forgot-password">Forgot Password?</Link> |{" "}
          <Link to="/signup">Sign Up</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default Login;
