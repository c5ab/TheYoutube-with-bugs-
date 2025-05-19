import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Avatar } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const ChannelDetail = () => {
  const { id } = useParams(); // Get channel ID from the URL
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]); // State for channel videos

  useEffect(() => {
    console.log("ChannelDetail ID:", id); // Debugging the ID

    // Fetch channel details
    fetchFromAPI(`channels?part=snippet,statistics&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    // Fetch channel videos
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);

  if (!channelDetail) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }}>
        <Typography variant="h6" color="text.secondary">
          Loading channel details...
        </Typography>
      </Box>
    );
  }

  const { snippet, statistics } = channelDetail;

  return (
    <Box
      sx={{
        padding: "20px",
        background: "linear-gradient(135deg, #1E1E1E, #121212)",
        color: "#FFFFFF",
        minHeight: "100vh",
      }}
    >
      {/* Channel Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "20px",
          padding: "20px",
          background: "linear-gradient(135deg, #FC466B, #3F5EFB)",
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Avatar
          src={snippet?.thumbnails?.high?.url || "https://via.placeholder.com/150"}
          alt={snippet?.title}
          sx={{
            width: "120px",
            height: "120px",
            border: "3px solid #FFFFFF",
          }}
        />
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="#FFFFFF"
            sx={{
              "&:hover": {
                color: "#FFD700",
              },
            }}
          >
            {snippet?.title || "Unknown Channel"}
          </Typography>
          <Typography variant="body2" color="#F0F0F0">
            {statistics?.subscriberCount
              ? `${parseInt(statistics.subscriberCount).toLocaleString()} subscribers`
              : "No subscriber data"}
          </Typography>
        </Box>
      </Box>

      {/* Channel Videos */}
      <Box
        sx={{
          marginTop: "30px",
          padding: "20px",
          background: "linear-gradient(135deg, #3F5EFB, #FC466B)",
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "#FFFFFF",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          Videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;