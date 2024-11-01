// src/pages/AnimeDetails.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  CircularProgress,
  Box,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const AnimeDetails = () => {
  const { id } = useParams(); // Get the anime ID from the URL parameters
  const [animeDetails, setAnimeDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime/${id}?sfw`
        );
        const data = await response.json();
        setAnimeDetails(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching anime details:", error);
        setLoading(false);
      }
    };

    fetchAnimeDetails();
  }, [id]);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (!animeDetails) {
    return <Typography variant="h6">Anime not found.</Typography>;
  }

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        {animeDetails.title}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image={animeDetails.images.jpg.image_url}
              alt={animeDetails.title}
              sx={{ height: "400px", objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Synopsis
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {animeDetails.synopsis || "No synopsis available."}
              </Typography>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Typography variant="body2">
                  Score: {animeDetails.score}
                </Typography>
                <Typography variant="body2">
                  Episodes: {animeDetails.episodes}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#f4f6f8",
              borderRadius: 2,
              p: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Additional Information
            </Typography>
            <Typography variant="body2">
              Genres:{" "}
              {animeDetails.genres.map((genre) => genre.name).join(", ") ||
                "N/A"}
            </Typography>
            <Typography variant="body2">
              Status: {animeDetails.status || "N/A"}
            </Typography>
            <Typography variant="body2">
              Aired: {animeDetails.aired.string || "N/A"}
            </Typography>
            <Typography variant="body2">
              Duration: {animeDetails.duration || "N/A"}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AnimeDetails;
