// src/pages/Home.js

import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, CircularProgress } from "@mui/material";
import AnimeCard from "./AnimeCard";

const Home = ({ onAddToList }) => {
  const [animeList, setAnimeList] = useState([]);
  const [completedAnime, setCompletedAnime] = useState([]);
  const [popularAnime, setPopularAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const trendingResponse = await fetch(
          "https://api.jikan.moe/v4/seasons/now?sfw"
        );
        const trendingData = await trendingResponse.json();
        setAnimeList(trendingData.data || []);

        const completedResponse = await fetch(
          "https://api.jikan.moe/v4/anime?status=complete&sfw"
        );
        const completedData = await completedResponse.json();
        setCompletedAnime(completedData.data || []);

        const popularResponse = await fetch(
          "https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity"
        );
        const popularData = await popularResponse.json();
        setPopularAnime(popularData.data || []);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching anime data:", error);
        setLoading(false);
      }
    };
    fetchAnime();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Currently Trending Anime
      </Typography>
      <AnimeGrid animeList={animeList} onAddToList={onAddToList} />
      <Typography variant="h4" gutterBottom>
        Popular Anime
      </Typography>
      <AnimeGrid animeList={popularAnime} onAddToList={onAddToList} />
    </Container>
  );
};

const AnimeGrid = ({ animeList = [], onAddToList }) => (
  <Grid container spacing={3}>
    {animeList.map((anime) => (
      <Grid item xs={12} sm={6} md={4} key={anime.mal_id}>
        <AnimeCard anime={anime} onAddToList={onAddToList} />
      </Grid>
    ))}
  </Grid>
);

export default Home;
