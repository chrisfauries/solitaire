import React from "react";
import deckState from "../state/deck";
import { useRecoilValue } from "recoil";
import stockState from "../state/stock";
import { CARD, DataType } from "../data/constants";
import CardArt from "../data/cardArt";

const Stock = () => {
  const deck = useRecoilValue(deckState.get);
  const stock = useRecoilValue(stockState.get);

  const drawCard = deck[stock.drawPointer];
  return (
    <div className="stock-container">
      <div data-type={DataType[DataType.STOCK]} className="card">
        BACK
      </div>
      <img
        src={CardArt.getFront(drawCard)}
        alt={CARD[drawCard]}
        data-type={DataType[DataType.WAIST]}
        className="card"
        data-card={drawCard}
        draggable={true}
      />
    </div>
  );
};

export default Stock;
