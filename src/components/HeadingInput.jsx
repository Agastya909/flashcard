import React from "react";

function HeadingInput(props) {
  const { onchange, value } = props;
  return (
    <input
      name="title"
      type="text"
      maxLength={64}
      placeholder="Title"
      value={value}
      onChange={onchange}
      className="border-none outline-none p-2 m-1 bg-gray-700 text-white rounded-b"
    ></input>
  );
}

export default HeadingInput;
