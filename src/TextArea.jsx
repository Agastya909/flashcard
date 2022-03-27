import { useState } from "react";
import axios from "axios";
import HeadingInput from "./components/HeadingInput";
import NoteInput from "./components/NoteInput";
import PriorityInput from "./components/PriorityInput";
import SubmitBtn from "./components/SubmitBtn";
import CancelBtn from "./components/CancelBtn";

const TextArea = () => {
  const [Flashcard, setFlashcard] = useState({
    title: "",
    note: "",
    priority: "Medium",
    color: "bg-yellow-300",
  });

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

  const resetData = () => {
    setFlashcard({
      title: "",
      note: "",
      priority: "Medium",
      color: "bg-yellow-300",
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(Flashcard);
    const sendData = {
      noteTitle: Flashcard.title,
      noteData: Flashcard.note,
      notePriority: Flashcard.priority,
      noteColor: Flashcard.color,
    };

    axios
      .post("http://localhost:4000", sendData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setFlashcard({
      title: "",
      note: "",
      priority: "Medium",
      color: "bg-yellow-300",
    });
  };

  return (
    <div className="flex justify-center p-4 drop-shadow-md">
      <form className="flex flex-col m-2" onSubmit={submitForm}>
        <div className="flex flex-col border-none  bg-gray-700 text-white  rounded-lg text-lg  font-bold">
          <HeadingInput onchange={handleChange} value={Flashcard.title} />
          <NoteInput onchange={handleChange} value={Flashcard.note} />
        </div>
        <div className="flex justify-between mt-5">
          <PriorityInput onchange={handleColor} />
          <SubmitBtn />
          <CancelBtn onclick={resetData} />
        </div>
      </form>
    </div>
  );
};
export default TextArea;
