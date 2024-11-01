import React from "react";
import { Box, Typography } from "@mui/material";

const CustomCard = ({ title, value, color, time }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        border: `2px solid ${color}`,
        borderRadius: "8px",
        padding: "8px",
        minWidth: "300px",
        boxShadow: 2,
      }}
    >
      <Typography variant="caption" color="textSecondary">
        {time}
      </Typography>
      <Typography variant="body2" sx={{ color: color, fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="h6">{value} MB</Typography>
    </Box>
  );
};

export default CustomCard;