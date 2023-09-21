import React from "react";
import { useRecoilValue } from "recoil";
import { DataType, DEPOT } from "../data/constants";
import depotState from "../state/depot";
import DepotCard from "./Depot-Card";

const Depot: React.FC<{
  depot: DEPOT;
}> = ({ depot }) => {
  const depotCards = useRecoilValue(depotState.get(depot));
  return (
    <div className="depot">
      {!depotCards.length ? (
        <DepotCard
          depot={depot}
          key={-1}
          card={-1}
          isVisible={true}
          isDropable={true}
          idx={0}
        />
      ) : (
        depotCards.map((depotCard, idx) => (
          <DepotCard
            depot={depot}
            key={depotCard.card}
            card={depotCard.card}
            isVisible={depotCard.isVisible}
            isDropable={idx + 1 === depotCards.length}
            idx={idx}
          />
        ))
      )}
    </div>
  );
};

export default Depot;
