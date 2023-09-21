import React from "react";
import "./styles.css";
import Stock from "./Stock";
import Foundations from "./Foundations";
import Test from "./Test";
import Tableau from "./Tableau";

const Board = () => {
  return (
    <>
      <Test />
      <Stock />
      <Foundations />
      <Tableau />
    </>
  );
};

export default Board;
