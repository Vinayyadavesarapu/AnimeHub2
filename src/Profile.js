import React from "react";
import { Container, Typography, Link, Avatar, Box } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import profilePic from "./2.jpg";
const Profile = () => {
  const userProfile = {
    name: "Vinay",
    email: "dummy@gmail.com",
    profilePic: "2.jpg", // Replace with actual image URL
  };

  return (
    <Container sx={{ mt: 4, textAlign: "center" }}>
      <Avatar
        alt={userProfile.name}
        src={userProfile.profilePic}
        sx={{ width: 150, height: 150, margin: "0 auto" }} // Circular profile picture
      />
      <Typography variant="h4" sx={{ mt: 2 }}>
        {userProfile.name}'s Profile
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Email: {userProfile.email}
      </Typography>
      <Link
        href="https://t.me/your_telegram"
        target="_blank"
        sx={{
          mt: 2,
          display: "inline-flex",
          alignItems: "center",
          color: "primary.main",
        }}
      >
        <TelegramIcon sx={{ mr: 1 }} />
        Help Center
      </Link>
    </Container>
  );
};

export default Profile;
