import React from "react";
import { useRecoilValue } from "recoil";
import { DataType, FOUNDATION } from "../data/constants";
import foundationState from "../state/foundation";

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
      {JSON.stringify(foundationArray)}
    </div>
  );
};

export default Foundation;
