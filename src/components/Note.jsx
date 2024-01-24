import React from "react";

function Note({ index, title, content, onDelete }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(index)}>DELETE</button>
    </div>
  );
}

export default Note;
