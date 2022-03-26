import React from "react";
import TitleBar from "./titleBar";
import TextArea from "./inputArea";
import NoteArea from "./notearea";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Editpage from "./Editpage";

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
        <Route path="/update" element={<Editpage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
