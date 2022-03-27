import React from "react";

const CancelBtn = (props) => {
  return (
    <button
      onClick={props.onclick}
      className="text-lg p-1 m-2 text-gray-800 self-end bg-red-300 rounded-md text-center w-36"
    >
      Cancel
    </button>
  );
};

export default CancelBtn;
