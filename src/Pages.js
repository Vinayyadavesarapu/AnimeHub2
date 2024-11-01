// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomizedTabs from "./TaskBar";
import Home from "./Home";
import Search from "./SearchBar";
import Schedule from "./Schedule";
import MyList from "./MyList";
import Profile from "./Profile";
import { Box, Container } from "@mui/material";

function Pages() {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (anime) => {
    if (!watchList.some((item) => item.mal_id === anime.mal_id)) {
      setWatchList([...watchList, anime]);
    }
  };

  const removeFromWatchList = (animeId) => {
    setWatchList(watchList.filter((anime) => anime.mal_id !== animeId));
  };

  return (
    <Router>
      <Box sx={{ bgcolor: "#fff", color: "#333", minHeight: "100vh" }}>
        {/* Logo */}
        <Container
          sx={{ display: "flex", justifyContent: "center", py: 2 }}
        ></Container>
        <CustomizedTabs />
        <Routes>
          <Route path="/Home" element={<Home onAddToList={addToWatchList} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route
            path="/mylist"
            element={
              <MyList
                watchList={watchList}
                onRemoveFromList={removeFromWatchList}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default Pages;
