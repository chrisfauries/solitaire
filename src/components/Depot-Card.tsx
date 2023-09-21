import React from "react";
import CardArt from "../data/cardArt";
import { CARD, DataType, DEPOT } from "../data/constants";

const DepotCard: React.FC<{
  depot: DEPOT;
  card: CARD;
  isVisible: boolean;
  idx: number;
  isDropable: boolean;
}> = ({ card, depot, isVisible, idx, isDropable }) => {
  return (
    <img
      className="depot-card"
      data-depot={depot}
      data-type={DataType[DataType.DEPOT_CARD]}
      style={{ "--marginTop": `${idx * 12}px` } as React.CSSProperties}
      data-card={card}
      data-isvisible={isVisible}
      data-isdropable={isDropable}
      draggable={true}
      src={CardArt.getFront(card)}
      alt={CARD[card]}
    />
  );
};

export default DepotCard;
