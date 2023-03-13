import React, { useState } from "react";
import Headersection from "../components/Headersection";
import Sec1 from "../components/Sec1";
function Main() {
  const [activeButton, setButton] = useState("btn-1");
  function handleclick(buttonname) {
    setButton(buttonname);
  }
  return (
    <div className="center">
      <Headersection />
      <button className="btn-1" onClick={() => handleclick("btn-1")}>
        Action{" "}
        <span role="img" aria-label="books">
          😎
        </span>{" "}
      </button>
      <button className="btn-2" onClick={() => handleclick("btn-2")}>
        Comedy{" "}
        <span role="img" aria-label="books">
          😂
        </span>{" "}
      </button>
      <button className="btn-3" onClick={() => handleclick("btn-3")}>
        love{" "}
        <span role="img" aria-label="books">
          ❤️
        </span>{" "}
      </button>
      <hr className="horizental-line"></hr>
      {activeButton === "btn-1" && (
        <Sec1
          heading="Die Hard"
          para="An explosive adventure that will leave you breathless"
        />
      )}
      {activeButton === "btn-2" && (
        <Sec1
          heading="Step Brothers"
          para="When two middle-aged men become stepbrothers, they discover that they're not so different after all. Ridiculous and hilarious"
        />
      )}
      {activeButton === "btn-3" && (
        <Sec1
          heading="The Notebook"
          para="A love story that will make you believe in soulmates. Bring tissues!"
        />
      )}
    </div>
  );
}
export default Main;
