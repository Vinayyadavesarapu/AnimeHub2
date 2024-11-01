// src/pages/MyList.js
import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import AnimeCard from "./AnimeCard";

const MyList = ({ watchList = [], onRemoveFromList }) => {
  return (
    <Box sx={{ backgroundColor: "#f4f6f8", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "#333", fontWeight: "bold", mb: 4 }}
        >
          My Watch List
        </Typography>
        <Grid container spacing={20}>
          {watchList.length > 0 ? (
            watchList.map((anime) => (
              <Grid item xs={12} sm={6} md={4} key={anime.mal_id}>
                <AnimeCard
                  anime={anime}
                  onRemove={() => onRemoveFromList(anime.mal_id)}
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography
                variant="body1"
                align="center"
                sx={{ color: "#666", mt: 4 }}
              >
                No anime added to your watch list yet.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default MyList;
