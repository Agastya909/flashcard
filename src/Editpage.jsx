import React from "react";
import TitleBar from "./titleBar";
import TextArea from "./inputArea";
const Editpage = () => {
  // const [Data, setData] = useState({
  //   title: "",
  //   note: "",
  //   priority: "Moderate",
  //   color: "Yellow",
  // });
  // useEffect(() => {
  //   console.log(`use effect is called`);
  // }, []);

  return (
    <div>
      <div>
        <TitleBar />
        <TextArea />
      </div>
    </div>
  );
};

export default Editpage;
