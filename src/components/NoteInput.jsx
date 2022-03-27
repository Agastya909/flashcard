import React from "react";

function NoteInput(props) {
  const { onchange, value } = props;
  return (
    <textarea
      name="note"
      maxLength={256}
      rows="4"
      cols={46}
      value={value}
      onChange={onchange}
      className="border-none outline-none p-2 m-1 bg-gray-700 text-white "
      placeholder="Flashcard"
    ></textarea>
  );
}

export default NoteInput;
