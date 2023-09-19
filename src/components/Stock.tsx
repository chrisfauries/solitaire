import React from "react";
import deckState from "../state/deck";
import { useRecoilValue } from "recoil";
import stockState from "../state/stock";
import { CARD, DataType } from "../data/constants";

const Stock = () => {
  const deck = useRecoilValue(deckState.get);
  const stock = useRecoilValue(stockState.get);

  const drawCard = deck[stock.drawPointer];
  return (
    <div className="stock-container">
      <div data-type={DataType[DataType.STOCK]} className="card">
        BACK
      </div>
      <div
        data-type={DataType[DataType.WAIST]}
        className="card"
        data-card={drawCard}
        draggable={true}
      >
        {CARD[drawCard]}
      </div>
    </div>
  );
};

export default Stock;
