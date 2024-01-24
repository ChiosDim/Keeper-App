import React, { useState } from "react";

function CreateArea({ onAdd}) {

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  //Function to handle input changes
  const handleChange = (event) => {
    const { name, value} = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }))
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(note.title, note.content);
    // Clear input fields after adding note
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          name="title" 
          value={note.title}
          onChange={handleChange}
          placeholder="Title" />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
