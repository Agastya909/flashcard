import { useState } from "react";
import axios from "axios";
const TextArea = (props) => {
  const priorityList = [
    { label: "High", value: "High", color: "red" },
    { label: "Medium", value: "Medium", color: "yellow" },
    { label: "Low", value: "Low", color: "blue" },
  ];

  const [Flashcard, setFlashcard] = useState({
    title: "",
    note: "",
    priority: "Moderate",
    color: "Yellow",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    let setColor;
    if (value === "Moderate") setColor = "yellow";
    else if (value === "Important") setColor = "red";
    else setColor = "blue";
    setFlashcard((prevData) => {
      return {
        ...prevData,
        [name]: value,
        color: setColor,
      };
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
      .post("http://localhost:4000/new", sendData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setFlashcard({
      title: "",
      note: "",
      priority: "Moderate",
      color: "Yellow",
    });
  };

  return (
    <div className="flex justify-center p-4 drop-shadow-md">
      <form className="flex flex-col m-2" onSubmit={submitForm}>
        <div className="flex flex-col border-none  bg-gray-700 text-white  rounded-lg text-lg  font-bold">
          <input
            name="title"
            type="text"
            maxLength={64}
            placeholder="Title"
            value={Flashcard.title}
            onChange={handleChange}
            className="border-none outline-none p-2 m-1 bg-gray-700 text-white rounded-b"
          ></input>
          <textarea
            name="note"
            maxLength={256}
            rows={4}
            cols={46}
            value={Flashcard.note}
            onChange={handleChange}
            className="border-none outline-none p-2 m-1 bg-gray-700 text-white "
            placeholder="Flashcard"
          ></textarea>
        </div>
        <div className="flex justify-between mt-5">
          <select
            name="priority"
            onChange={handleChange}
            className="text-lg p-2 m-2 text-gray-800 self-end bg-yellow-300 rounded-2xl text-center w-36"
          >
            {priorityList.map((level) => (
              <option key={level.value} value={level.value} color={level.label}>
                {level.label}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="text-lg p-1 m-2 text-gray-800 self-end bg-green-300 rounded-2xl text-center w-36"
            // onClick={handleClick}
          >
            Save
          </button>
          <button
            type="reset"
            className="text-lg p-1 m-2 text-gray-800 self-end bg-red-300 rounded-2xl text-center w-36"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default TextArea;
