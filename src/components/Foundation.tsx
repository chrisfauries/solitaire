import React from "react";
import { useRecoilValue } from "recoil";
import { CARD, DataType, FOUNDATION } from "../data/constants";
import foundationState from "../state/foundation";

import imag from "../static/cards/fronts/clubs_2.svg";

const Foundation: React.FC<{
  foundation: FOUNDATION;
}> = ({ foundation }) => {
  const foundationArray = useRecoilValue(foundationState.get(foundation));
  return (
    <div
      className="foundation"
      data-type={DataType[DataType.FOUNDATION]}
      data-foundation={foundation}
    >

      <img src={imag} alt={CARD[foundationArray[foundationArray.length - 1]]} />
    </div>
  );
};

export default Foundation;
