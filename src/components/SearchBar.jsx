import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: "20px",
        border: "1px solid #3d3d3d",
        pl: 2,
        boxShadow: "none",
        backgroundColor: "background.paper",
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          border: "none",
          outline: "none",
          flex: 1,
          backgroundColor: "transparent",
          color: "#fff",
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "#FC1503" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;