import React from "react";

const PriorityInput = (props) => {
  const priorityList = [
    { label: "High", value: "High", color: "bg-red-400" },
    { label: "Medium", value: "Medium", color: "bg-yellow-300" },
    { label: "Low", value: "Low", color: "bg-blue-400" },
  ];
  return (
    <>
      <select
        onChange={props.onchange}
        className="text-lg p-2 m-2 text-gray-800 self-end bg-yellow-300 rounded-md text-center w-36"
      >
        {priorityList.map((level) => (
          <option key={level.label} value={level.value} color={level.color}>
            {level.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default PriorityInput;
