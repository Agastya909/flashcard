import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./card";

const NoteArea = () => {
  const [flashcard, setflashcard] = useState([]);

  // const getAll = () => {
  // axios
  // .get("http://localhost:4000")
  // .then((res) => {
  // const data = res.data;
  // setflashcard(data);
  // console.log(flashcard);
  // })
  // .catch((err) => {
  // console.log(err);
  // });
  // };

  useEffect(() => {
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
  }, []);

  return (
    <div className="mb-4">
      <div className="grid gap-8 grid-cols-4 justify-items-center">
        {flashcard.map((cardData, index) => {
          return (
            <Card
              key={index}
              id={cardData._id}
              notetitle={cardData.noteTitle}
              notedata={cardData.noteData}
              notecolor={cardData.noteColor}
              notepriority={cardData.notePriority}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NoteArea;
