import React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

const Videos = ({ videos }) => {
  if (!videos?.length) return "Loading...";

  return (
    <Box display="flex" flexWrap="wrap" gap={2}>
      {videos.map((video, index) => {
        const videoId = video?.id?.videoId || video?.id;
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
            <CardContent sx={{ backgroundColor: "#1E1E1E", height: "100px" }}>
              <Link to={`/video/${videoId}`}>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                  {snippet?.title.slice(0, 60) || "No Title Available"}
                </Typography>
              </Link>
              <Link to={`/channel/${snippet?.channelId}`}>
                <Typography variant="subtitle2" color="gray">
                  {snippet?.channelTitle || "Unknown Channel"}
                </Typography>
              </Link>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default Videos;