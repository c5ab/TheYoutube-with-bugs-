import React, { useState, useEffect } from "react";
import { Typography, Box, Card, CardMedia, CardContent } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import he from "he";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box className="gradient-background" p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={900}
        mb={3}
        ml={{ sm: "100px" }}
        className="text-shadow"
      >
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
        {videos.map((video, index) => {
          const videoId = video?.id?.videoId;
          const snippet = video?.snippet;

          if (!videoId || !snippet) return null;

          return (
            <Card
              key={index}
              sx={{
                width: "320px",
                boxShadow: "none",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #3F5EFB, #FC466B)",
              }}
            >
              <Link to={`/video/${videoId}`}>
                <CardMedia
                  component="img"
                  image={snippet?.thumbnails?.high?.url || "https://via.placeholder.com/320x180"}
                  alt={snippet?.title}
                  sx={{ height: "180px", borderRadius: "8px 8px 0 0" }}
                />
              </Link>
              <CardContent sx={{ backgroundColor: "#1E1E1E", height: "120px" }}>
                <Link to={`/video/${videoId}`}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    color="#FFF"
                    sx={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                      overflow: "hidden",
                    }}
                  >
                    {he.decode(snippet?.title || "No Title Available")}
                  </Typography>
                </Link>
                <Typography variant="body2" color="gray" mt={1}>
                  {snippet?.channelTitle || "Unknown Channel"}
                </Typography>
                <Typography variant="body2" color="gray" mt={1}>
                  {Math.floor(Math.random() * 1000000).toLocaleString()} views
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default SearchFeed;