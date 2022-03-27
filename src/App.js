import React from "react";
import TitleBar from "./titleBar";
import TextArea from "./TextArea";
import NoteArea from "./notearea";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdatePage from "./UpdatePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <TitleBar />
              <TextArea />
              <NoteArea />
            </div>
          }
        />
        <Route path="/update/:id" element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
