import React, { useState } from "react";
import "./NotesPanel.css"; // Custom CSS for NotesPanel

const NotesPanel = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };

  const handleDeleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="notes-container">
      <div className="notes-header">
        <h2>Notes Panel</h2>
        <span className="notes-count">{notes.length} Notes</span>
      </div>

      <div className="notes-input-section">
        <input
          type="text"
          placeholder="Write a new note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="notes-input"
        />
        <button onClick={handleAddNote} className="add-note-btn">
          Add Note
        </button>
      </div>

      <div className="notes-grid">
        {notes.map((note, index) => (
          <div key={index} className="note-card">
            <p className="note-text">{note}</p>
            <button
              onClick={() => handleDeleteNote(index)}
              className="delete-note-btn"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesPanel;