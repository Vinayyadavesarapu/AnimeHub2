import * as React from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material"; // Import Typography
import { Link } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import logo from "./1.jpg";

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center", // Align items vertically centered
        bgcolor: "#2e1534",
        p: 1, // Add padding for better aesthetics
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
        <img
          src={logo}
          alt="Logo"
          style={{ height: "40px", marginRight: "8px" }}
        />
        <Typography variant="h6" sx={{ color: "#fff" }}>
          Anime Hub
        </Typography>
      </Box>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
        <Tab label="Home" component={Link} to="/Home" sx={{ color: "#fff" }} />
        <Tab
          label="Search"
          component={Link}
          to="/search"
          sx={{ color: "#fff" }}
        />
        <Tab
          label="Schedule"
          component={Link}
          to="/schedule"
          sx={{ color: "#fff" }}
        />
        <Tab
          label="Watch List"
          component={Link}
          to="/mylist"
          sx={{ color: "#fff" }}
        />
        <Tab
          label="Profile"
          component={Link}
          to="/profile"
          sx={{ color: "#fff" }}
        />
      </Tabs>
    </Box>
  );
}
