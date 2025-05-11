import React, { useState } from "react";
import { Box, Typography, TextField, Button, List, ListItem, ListItemText } from "@mui/material";

const NotesPanel = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Notes Panel
      </Typography>
      <TextField
        fullWidth
        label="Add a Note"
        variant="outlined"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddNote}>
        Add Note
      </Button>
      <List sx={{ mt: 2 }}>
        {notes.map((note, index) => (
          <ListItem key={index}>
            <ListItemText primary={note} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NotesPanel;