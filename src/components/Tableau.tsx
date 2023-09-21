import React from "react";
import { DEPOT } from "../data/constants";
import Depot from "./Depot";

const Tableau = () => {
  return (
    <div className="tableau">
      <Depot depot={DEPOT.ONE} />
      <Depot depot={DEPOT.TWO} />
      <Depot depot={DEPOT.THREE} />
      <Depot depot={DEPOT.FOUR} />
      <Depot depot={DEPOT.FIVE} />
      <Depot depot={DEPOT.SIX} />
      <Depot depot={DEPOT.SEVEN} />
    </div>
  );
};

export default Tableau;
