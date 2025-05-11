import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";

const SessionManagement = () => {
  const [sessions, setSessions] = useState([]);
  const [newSession, setNewSession] = useState({
    name: "",
    date: "",
    photographer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSession({ ...newSession, [name]: value });
  };

  const handleAddSession = () => {
    setSessions([...sessions, newSession]);
    setNewSession({ name: "", date: "", photographer: "" });
  };

  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Session Management
      </Typography>
      <Box component="form" display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Session Name"
          name="name"
          variant="outlined"
          value={newSession.name}
          onChange={handleChange}
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          value={newSession.date}
          onChange={handleChange}
        />
        <TextField
          label="Photographer"
          name="photographer"
          variant="outlined"
          value={newSession.photographer}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleAddSession}>
          Add Session
        </Button>
      </Box>
      <Box mt={4}>
        <Typography variant="h6">Existing Sessions</Typography>
        <Grid container spacing={2} mt={2}>
          {sessions.map((session, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                border={1}
                borderRadius={2}
                p={2}
                borderColor="grey.300"
                bgcolor="grey.100"
              >
                <Typography variant="subtitle1">
                  <strong>Name:</strong> {session.name}
                </Typography>
                <Typography variant="subtitle2">
                  <strong>Date:</strong> {session.date}
                </Typography>
                <Typography variant="subtitle2">
                  <strong>Photographer:</strong> {session.photographer}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SessionManagement;