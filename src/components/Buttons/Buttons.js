import React from "react";
import "./Styles.css";

export default function Buttons({ cleanScreen, operation, addDigitScreen }) {

  const button = (label, onClick) => {
    return (
      <button
        className="button"
        onClick={onClick}>
        {label}
      </button>
    );
  };

  return (
    <div className="buttons">
      {button("C", cleanScreen)}
      {button("DEL", () => operation("backspace"))}
      {button("%", () => addDigitScreen("%"))}
      {button("÷", () => addDigitScreen("/"))}
      {button("7", () => addDigitScreen("7"))}
      {button("8", () => addDigitScreen("8"))}
      {button("9", () => addDigitScreen("9"))}
      {button("x", () => addDigitScreen("*"))}
      {button("4", () => addDigitScreen("4"))}
      {button("5", () => addDigitScreen("5"))}
      {button("6", () => addDigitScreen("6"))}
      {button("-", () => addDigitScreen("-"))}
      {button("1", () => addDigitScreen("1"))}
      {button("2", () => addDigitScreen("2"))}
      {button("3", () => addDigitScreen("3"))}
      {button("+", () => addDigitScreen("+"))}
      {button("0", () => addDigitScreen("0"))}
      {button("00", () => addDigitScreen("00"))}
      {button("000", () => addDigitScreen("000"))}
      {button("√", () => addDigitScreen("√"))}
      {button("(", () => addDigitScreen("("))}
      {button(")", () => addDigitScreen(")"))}
      {button(".", () => addDigitScreen("."))}
      {button("=", () => operation("="))}
    </div>
  );
};
