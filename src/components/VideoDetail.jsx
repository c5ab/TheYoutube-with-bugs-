import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?relatedToVideoId=${id}&part=snippet&type=video`).then((data) =>
      setRelatedVideos(data.items)
    );
  }, [id]);

  if (!videoDetail) return "Loading...";

  const { snippet, statistics } = videoDetail;

  return (
    <Box className="gradient-background" minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} p={4}>
        <Box flex={1}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
            width="100%"
            height="500px"
          />
          <Typography variant="h4" fontWeight="bold" mt={2} className="text-shadow">
            {snippet?.title}
          </Typography>
          <Typography variant="body2" color="gray" mt={1}>
            {snippet?.description}
          </Typography>
          <Typography variant="body2" color="gray" mt={2}>
            Views: {statistics?.viewCount} | Likes: {statistics?.likeCount}
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography variant="h5" fontWeight="bold" mb={2} className="text-shadow">
            Related Videos
          </Typography>
          <Videos videos={relatedVideos} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;