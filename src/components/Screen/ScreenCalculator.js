import React from "react";
import "./Styles.css";

export default function ScreenCalculator({ valueScreen, result }) {
  return (
    <div className="div-screen">
      <span
        className="div-screen-operation">
        {valueScreen}
      </span>
      <span
        className="div-screen-result">
        {result}
      </span>
    </div>
  );
};
