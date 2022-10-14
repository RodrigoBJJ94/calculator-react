import React from "react";
import "./App.css";
import Title from "./components/Title/Title";
import Screen from "./components/Calculator/Calculator";

export default function App() {
  return (
    <div className="container">
      <Title />
      <Screen />
    </div>
  );
};
