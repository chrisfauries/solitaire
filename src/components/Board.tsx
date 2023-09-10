import React from "react";
import "./styles.css";
import CARD from "../components/Card";
import { DECK, FOUNDATION } from "../data/constants";
import Foundation from "./Foundation";
import { getShuffledDeck } from "../data/utils";

const Board = () => {
  return (
    <>
      <div className="foundation_container">
        <Foundation foundation={FOUNDATION.ONE} />
        <Foundation foundation={FOUNDATION.TWO} />
        <Foundation foundation={FOUNDATION.THREE} />
        <Foundation foundation={FOUNDATION.FOUR} />
      </div>
      <div className="board">
        {getShuffledDeck().map((card) => (
          <CARD key={card} card={card} />
        ))}
      </div>
    </>
  );
};

export default Board;
