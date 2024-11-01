// src/pages/Search.js

import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  Box,
} from "@mui/material";
import AnimeCard from "./AnimeCard";

const Search = ({ onAddToList }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const url = `https://api.jikan.moe/v4/anime?q=${query}&sfw`;
      const response = await fetch(url);
      const data = await response.json();
      setSearchResults(data.data);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  return (
    <Box sx={{ backgroundColor: "#f4f6f8", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "#333", fontWeight: "bold", mb: 4 }}
        >
          Search Anime
        </Typography>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            p: 3,
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
            mb: 4,
          }}
        >
          <TextField
            label="Title"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            variant="outlined"
            sx={{ width: "100%", maxWidth: 500 }}
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            sx={{
              mt: 2,
              backgroundColor: "#1976d2",
              color: "#fff",
              px: 4,
              "&:hover": {
                backgroundColor: "#115293",
              },
            }}
          >
            Search
          </Button>
        </Box>

        <Grid container spacing={20} justifyContent="center">
          {searchResults.length > 0 ? (
            searchResults.map((anime) => (
              <Grid item xs={12} sm={6} md={4} key={anime.mal_id}>
                <AnimeCard anime={anime} onAddToList={onAddToList} />
              </Grid>
            ))
          ) : (
            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
              sx={{ mt: 4 }}
            >
              No results found. Try searching with different keywords.
            </Typography>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Search;
