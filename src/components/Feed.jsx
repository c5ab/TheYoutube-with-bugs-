import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, CircularProgress } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setVideos(null);
    setLoading(true);

    const fetchVideos = async () => {
      try {
        const params = selectedCategory === "New"
          ? { q: "technology", type: "video", videoDuration: "medium" }
          : { q: selectedCategory, type: "video" };

        const data = await fetchFromAPI(`search?part=snippet`, params);
        setVideos(data.items || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [selectedCategory]);

  return (
<Stack
  direction={{ xs: "column", md: "row" }}
  spacing={2}
  sx={{ padding: "20px", overflowY: "auto" }}
>
  {/* Sidebar */}
  <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

  {/* Main Content */}
  <Box flex={1} sx={{ overflowY: "auto", height: "90vh" }}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
      {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
    </Typography>
    {loading ? (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh" }}>
        <CircularProgress color="primary" />
      </Box>
    ) : (
      <Videos videos={videos} />
    )}
  </Box>
</Stack>
  );
};

export default Feed;