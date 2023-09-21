import React from "react";
import { useRecoilValue } from "recoil";
import { CARD, DataType, FOUNDATION } from "../data/constants";
import foundationState from "../state/foundation";

import CardArt from "../data/cardArt";

const Foundation: React.FC<{
  foundation: FOUNDATION;
}> = ({ foundation }) => {
  const foundationArray = useRecoilValue(foundationState.get(foundation));
  const topCard = foundationArray[foundationArray.length - 1];
  return (
    <img
      className="foundation"
      data-type={DataType[DataType.FOUNDATION]}
      data-foundation={foundation}
      data-card={topCard}
      src={CardArt.getFront(topCard)}
      draggable={true}
      alt={CARD[topCard]}
    />
  );
};

export default Foundation;
