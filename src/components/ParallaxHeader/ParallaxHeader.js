import React from "react";
import "./ParallaxHeader.css";

export default function Parallax(props) {
  return (
    <div
      className="parallax"
      style={{
        backgroundImage: `url(${props.image})`,
        minHeight: props.height + "em",
      }}
    >
      <div className="parallaxText centered">{props.text}</div>
    </div>
  );
}
