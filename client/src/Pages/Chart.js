import React, { useState } from "react";
import { Box } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import CustomCard from "../Component/CustomCards";

// Sample data for the chart
const data = [
  { time: "10:00", sent: 40, received: 20 },
  { time: "11:00", sent: 45, received: 25 },
  { time: "12:00", sent: 50, received: 30 },
  { time: "01:00", sent: 35, received: 15 },
];

export default function Chart() {
  const [hoverData, setHoverData] = useState(null);

  // Function to handle mouse movement on the chart
  const handleMouseMove = (e) => {
    if (e && e.activePayload && e.activePayload.length > 0) {
      const payload = e.activePayload[0].payload; // Get the data payload
      setHoverData(payload); // Set the data for hover state
    } else {
      setHoverData(null); // Hide the hover data when not on a data point
    }
  };

  const handleMouseLeave = () => {
    setHoverData(null); // Reset hover data on mouse leave
  };

  return (
    <Box position="relative" width="100%">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip content={<></>} /> {/* Hide the default tooltip */}
          {/* Define the "Sent" and "Received" lines */}
          <Line
            type="monotone"
            dataKey="sent"
            stroke="#ff7300"
            dot={{ r: 6 }} // Highlight the points for hovering
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="received"
            stroke="#387908"
            dot={{ r: 6 }} // Highlight the points for hovering
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Show custom cards only when hoverData is available */}
      {hoverData && (
        <Box
          sx={{
            position: "absolute",
            top: "50px", // Adjust vertical position
            left: "50%", // Center horizontally relative to the chart
            transform: "translateX(-50%)", // Center cards exactly
            display: "flex",
            flexDirection:"column",
            gap: 2,
          }}
        >
          {/* Sent Data Card */}
          {hoverData.sent && (
            <CustomCard
              title="Sent"
              value={hoverData.sent}
              color="#ff7300"
              time={hoverData.time}
            />
          )}

          {/* Received Data Card */}
          {hoverData.received && (
            <CustomCard
              title="Received"
              value={hoverData.received}
              color="#387908"
              time={hoverData.time}
            />
          )}
        </Box>
      )}
    </Box>
  );
}