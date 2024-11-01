// src/pages/Schedule.js

import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, CircularProgress } from "@mui/material";
import AnimeCard from "./AnimeCard";

const Schedule = () => {
  const [animeSchedule, setAnimeSchedule] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/schedules?sfw");
        const data = await response.json();
        setAnimeSchedule(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching schedule:", error);
        setLoading(false);
      }
    };
    fetchSchedule();
  }, []);

  return (
    <Container>
      <Typography variant="h4">Weekly Anime Schedule</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {animeSchedule.map((anime) => (
            <Grid item xs={12} sm={6} md={4} key={anime.mal_id}>
              <AnimeCard anime={anime} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Schedule;
