// src/pages/HelpCenter.js

import React from "react";
import { Container, Typography, Button } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";

const HelpCenter = () => {
  const telegramLink = "https://t.me/your-telegram-link"; // replace with your actual Telegram link

  return (
    <Container style={{ padding: "20px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Help Center
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to the Help Center! If you have any questions, need assistance,
        or want to learn more about using this site, feel free to reach out to
        us.
      </Typography>
      <Typography variant="body1" paragraph>
        For immediate support, you can contact us on Telegram by clicking the
        button below.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href={telegramLink}
        target="_blank"
        startIcon={<TelegramIcon />}
        style={{ marginTop: "20px" }}
      >
        Contact on Telegram
      </Button>
    </Container>
  );
};

export default HelpCenter;
