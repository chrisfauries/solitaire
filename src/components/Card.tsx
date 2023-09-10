import React from "react";
import "./styles.css";
import { CARD, DataType, DECK } from "../data/constants";

const Card: React.FC<{ card: CARD }> = ({ card }) => {
  return (
    <div data-type={DataType[DataType.CARD]} data-card={card} draggable={true} className="card">
      {CARD[card]}
    </div>
  );
};

export default Card;
