import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./styles.css";

export default function App() {
  const [background, setBackground] = useState("#DAEBF2");
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(null);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  });

  const colors = [
    "#845EC2",
    "#D65DB1",
    "#F9F871",
    "#FFC75F",
    "#0081CF",
    "#4D8076",
    "#00C9A7",
    "#005B44",
    "#04004A"
  ];
  return (
    <div className="App" style={{ backgroundColor: background }}>
      <div className="copy-content">
        {current !== null ? <h1>Copied {current}</h1> : ""}
      </div>
      <div className="heading-container">
        <h1>The Color Pallette</h1>
      </div>
      <div className="color-container">
        <div className="color-wrapper">
          {colors.map((color, index) => (
            <div className="text-wrapper">
              <div
                className="color-box"
                onClick={() => setBackground(color)}
                style={{
                  backgroundColor: color,
                  filter: "brightness(85%)",
                  boxShadow: color === background ? "0 0 5px #000" : " "
                }}
              ></div>
              <CopyToClipboard text={color}>
                <p className="text" onClick={() => setCurrent(color)}>
                  {" "}
                  {color}
                </p>
              </CopyToClipboard>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <b>Note:</b> Click on hex code to copy & click on the pallets to see the
        Effects
      </footer>
    </div>
  );
}
