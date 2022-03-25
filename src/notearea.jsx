import axios from "axios";
import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import Card from "./card";

const NoteArea = () => {
  const [flashcard, setflashcard] = useState([]);
  const addNote = (newFlashcard) => {
    setflashcard((prevFlashcard) => {
      return [...prevFlashcard, newFlashcard];
    });
  };

  const getAll = () => {
    axios
      .get("http://localhost:4000")
      .then((res) => {
        const data = res.data;
        setflashcard(data);
        console.log(flashcard);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mb-4">
      <div className="text-3xl" onClick={getAll}>
        click me
      </div>
      <div className="grid gap-4 grid-cols-4 justify-items-center">
        {flashcard.map((cardData, index) => {
          return (
            <Card
              key={index}
              id={index}
              notetitle={cardData.noteTitle}
              notedata={cardData.noteData}
              notecolor={cardData.color}
              notepriority={cardData.priority}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NoteArea;
