import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({ video }) => {
  const videoId = video?.id?.videoId || video?.id;
  const snippet = video?.snippet;

  if (!snippet) {
    return null;
  }

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 2,
        backgroundColor: "background.paper",
        "&:hover": {
          transform: "scale(1.03)",
          transition: "transform 0.3s ease",
        },
      }}
    >
      <Link to={`/video/${videoId}`}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url || "https://via.placeholder.com/320x180"}
          alt={snippet?.title}
          sx={{ borderBottom: "2px solid #FC1503" }}
        />
      </Link>
      <CardContent>
        <Link to={`/video/${videoId}`}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="text.primary"
            sx={{ marginBottom: "5px" }}
          >
            {snippet?.title.slice(0, 60) || "No Title Available"}
          </Typography>
        </Link>
        <Link to={`/channel/${snippet?.channelId}`}>
          <Typography variant="subtitle2" color="text.secondary">
            {snippet?.channelTitle || "Unknown Channel"}
            <CheckCircleIcon sx={{ fontSize: "12px", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;