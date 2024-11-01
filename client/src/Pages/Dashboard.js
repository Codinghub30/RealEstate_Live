// src/Dashboard.js
import React, { useState } from "react";
import { Box, Grid, Typography, Card, Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";
import Header from "../Component/Header";

// Sample data for properties sold and clients
const clientsData = [
  { name: "Jan-Apr", clients: 15 },
  { name: "May-Aug", clients: 12 },
  { name: "Sept-Dec", clients: 18 },

];

const propertiesData = [
  { name: "Jan-Apr", properties: 10 },
  { name: "May-Aug", properties: 12 },
  { name: "Sept-Dec", properties: 15 },
];

const totalClients = 45;
const pieData = [
  { id: 0, value: 10, label: 'Series A' },
  { id: 1, value: 15, label: 'Series B' },
  { id: 2, value: 20, label: 'Series C' },
];


const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];


export default function Dashboard() {
  const [lineChart, setLineChart] = useState(true);
  const [barChart, setBarChart] = useState(false);

  const handleToggle = () => {
    setLineChart(!lineChart);
    setBarChart(!barChart);
  };

  return (
    <>
    <Header />

    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <ToggleButtonGroup
        color="primary"
        className="toggle-container"
        exclusive
        onChange={handleToggle}
        aria-label="Platform"
        
      >
        <ToggleButton value="Line Graph">Line Graph</ToggleButton>
        <ToggleButton value="Bar Graph">Bar Graph</ToggleButton>

      </ToggleButtonGroup>
      <Grid container spacing={4} className="graph">
        {lineChart && (
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: 2 }}>
              <Typography variant="h6">Number of Properties Sold</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={propertiesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="properties" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Grid>
        )}

        {barChart && (
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: 2 }}>
              <Typography variant="h6">Number of Clients Over Time</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={clientsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="clients" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Grid>
        )}

        <Grid container spacing={4} item xs={12} className="graph-secondary">
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">Total Number of Clients</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                 <Pie
                 data={pieData}
                 cx="50%"
                 cy="50%"
                 outerRadius={100}
                 fill="#8884d8"
                 dataKey="value"
                 label
               >
                 {pieData.map((entry, index) => (
                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                 ))}
               </Pie>
               </PieChart>
              </ResponsiveContainer>
              <Typography variant="h4" sx={{ marginTop: 2 }}>
                +{totalClients} Clients
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}
