import React from "react";
import TitleBar from "./titleBar";
import TextArea from "./inputArea";
import NoteArea from "./notearea";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <TitleBar />
      <TextArea />
      <NoteArea />
      <Footer />
    </div>
  );
};
export default App;
