import React, { useState } from "react";
import { Stack, Typography, Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MovieIcon from "@mui/icons-material/Movie";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SchoolIcon from "@mui/icons-material/School";
import MicIcon from "@mui/icons-material/Mic";

const categories = [
  { name: "New", icon: <HomeIcon /> },
  { name: "Coding", icon: <CodeIcon /> },
  { name: "ReactJS", icon: <CodeIcon /> },
  { name: "NextJS", icon: <CodeIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
  { name: "Education", icon: <SchoolIcon /> },
  { name: "Podcast", icon: <MicIcon /> },
  { name: "Movie", icon: <MovieIcon /> },
  { name: "Gaming", icon: <SportsEsportsIcon /> },
];

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        backgroundColor: "#1E1E1E",
        height: "100%",
        padding: "20px",
        borderRight: "1px solid #3d3d3d",
      }}
    >
      {categories.map((category) => (
        <Box
          key={category.name}
          onClick={() => {
            setSelectedCategory(category.name);
            setMobileOpen(false); // Close drawer on selection
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            cursor: "pointer",
            padding: "10px 15px",
            borderRadius: "8px",
            backgroundColor: selectedCategory === category.name ? "#FC1503" : "transparent",
            color: selectedCategory === category.name ? "#FFFFFF" : "#AAAAAA",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#FC1503",
              color: "#FFFFFF",
            },
          }}
        >
          {category.icon}
          <Typography variant="body1" fontWeight="bold">
            {category.name}
          </Typography>
        </Box>
      ))}
    </Stack>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <IconButton
        color="inherit"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" }, position: "fixed", top: 10, left: 10 }}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar for Desktop */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: "240px",
          backgroundColor: "#1E1E1E",
          height: "100vh",
          borderRight: "1px solid #3d3d3d",
        }}
      >
        {drawerContent}
      </Box>

      {/* Drawer for Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: "240px", backgroundColor: "#1E1E1E" },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;