import axios from "axios";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import TextArea from "./TextArea";
import TitleBar from "./titleBar";
const UpdatePage = (props) => {
  const location = useLocation();

  const seeData = () => {
    const path = location.pathname;
    const id = path.substring(8);
    console.log(id);
    axios
      .get(`http://localhost:4000/note/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(`error is : ${err}`));
  };
  return (
    <>
      <TitleBar />
      <TextArea />
      <div onClick={seeData}>click me to check data</div>
    </>
  );
};

export default UpdatePage;
