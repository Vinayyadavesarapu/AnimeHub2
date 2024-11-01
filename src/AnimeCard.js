// src/components/AnimeCard.js
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const AnimeCard = ({ anime, onAddToList, onRemove }) => {
  const imageUrl = anime?.images?.jpg?.image_url || "default-image-url.jpg";

  return (
    <Card
      sx={{
        width: 300,
        height: 450,
        m: 2,
        borderRadius: 2,
        border: "2px solid #2e1534",
        "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
      }}
    >
      <CardMedia
        component="img"
        alt={anime.title || "Anime Image"}
        height="250"
        image={imageUrl}
        sx={{ borderRadius: "4px 4px 0 0" }}
      />
      <CardContent>
        <Typography
          variant="h6"
          color="#2e1534"
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            textOverflow: "ellipsis",
          }}
        >
          {anime.title || "Untitled"}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={1}
        >
          <Typography variant="body2">
            Episodes: {anime.episodes ?? "N/A"}
          </Typography>
          <Chip
            icon={<StarIcon />}
            label={anime.score ?? "N/A"}
            color="primary"
          />
        </Box>
        {onAddToList && (
          <Button
            onClick={() => onAddToList(anime)}
            variant="contained"
            color="secondary"
          >
            Add to Watch List
          </Button>
        )}
        {onRemove && (
          <Button
            onClick={() => onRemove()}
            variant="outlined"
            color="error"
            sx={{ mt: 1 }}
          >
            Remove from Watch List
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default AnimeCard;
