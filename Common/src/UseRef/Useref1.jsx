import React, { useState, useRef } from "react";
import { useEffect } from "react";

export const Useref1 = () => {
  const [text, setText] = useState("");
  const [isplay, setIsplay] = useState(false);

  const in1 = useRef();
  const head1 = useRef();
  const vplay = useRef();

  const handleChange = () => {
    in1.current.value = "PDAC";
    head1.current.innerText = "PDAC";
  };

  const handleColor = () => {
    in1.current.style.color = "red"; //style==>attribute
    head1.current.style.color = "green";
  };

  const handleClear = () => {
    in1.current.value = "";
  };

  const handleCenter = () => {
    in1.current.style.textAlign = "center";
    head1.current.style.textAlign = "center";
  };

  const handlePlay = () => {
    setIsplay(!isplay);
    if (isplay === true) {
      vplay.current.pause();
    } else {
      vplay.current.play();
      setIsplay(!isplay)
    }
  };

  useEffect(() => {
    in1.current.focus();
  }, []);

  return (
    <React.Fragment>
      <div style={{ marginLeft: "30%" }}>
        <h1>Useref Hook</h1>
        <input
          type="text"
          ref={in1}
          name=""
          value=""
          placeholder=""
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <h1 ref={head1}>Hello</h1>
        <br />
        <button onClick={handleChange}>Change</button>
        <button onClick={handleColor}>Color</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleCenter}>Center</button>
        <br />
        <br />
        <video onClick={handlePlay} ref={vplay} src="Hustle.mp4" style={{ height: "450px", width: "250px" }}/>
        {/* <button onClick={handlePlay}>{isplay?"Pause":"Play"}</button> */}
      </div>
    </React.Fragment>
  );
};
