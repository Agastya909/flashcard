import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
import TitleBar from "./titleBar";
import HeadingInput from "./components/HeadingInput";
import NoteInput from "./components/NoteInput";
import PriorityInput from "./components/PriorityInput";
import SubmitBtn from "./components/SubmitBtn";
import CancelBtn from "./components/CancelBtn";
import { useState } from "react";
import { useEffect } from "react";

const UpdatePage = (props) => {
  const location = useLocation();
  const path = location.pathname;
  const id = path.substring(8);
  const [Flashcard, setFlashcard] = useState({
    title: "",
    note: "",
    priority: "",
    color: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/note/${id}`)
      .then((res) => {
        setFlashcard({
          title: res.data.noteTitle,
          note: res.data.noteData,
          priority: res.data.notePriority,
          color: res.data.noteColor,
        });
        console.log(Flashcard);
      })
      .catch((err) => console.log(`error is : ${err}`));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFlashcard((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleColor = (event) => {
    const { value } = event.target;
    let setColor;
    if (value === "Medium") {
      setColor = "bg-yellow-300";
    } else if (value === "High") {
      setColor = "bg-red-400";
    } else if (value === "Low") {
      setColor = "bg-blue-400";
    }

    setFlashcard((prevData) => {
      return {
        ...prevData,
        color: setColor,
      };
    });
  };

  const updateNote = (event) => {
    event.preventDefault();
    if (Flashcard.color === "bg-yellow-300") Flashcard.priority = "Medium";
    else if (Flashcard.color === "bg-red-400") Flashcard.priority = "High";
    else Flashcard.priority = "Low";

    console.log(Flashcard);
    const updateData = {
      noteTitle: Flashcard.title,
      noteData: Flashcard.note,
      notePriority: Flashcard.priority,
      noteColor: Flashcard.color,
    };
    axios
      .patch(`http://localhost:4000/update/${id}`, updateData)
      .then((res) => {
        console.log(`note updated : ${res.data}`);
        window.location.href = "/";
      })
      .catch((err) => console.log(`error : ${err}`));
  };

  return (
    <>
      <TitleBar />
      <div className="flex justify-center p-4 drop-shadow-md">
        <form className="flex flex-col m-2" onSubmit={updateNote}>
          <div className="flex flex-col border-none  bg-gray-700 text-white  rounded-lg text-lg  font-bold">
            <HeadingInput onchange={handleChange} value={Flashcard.title} />
            <NoteInput onchange={handleChange} value={Flashcard.note} />
          </div>
          <div className="flex justify-between mt-5">
            <PriorityInput onchange={handleColor} />
            <SubmitBtn />
            <CancelBtn />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdatePage;
