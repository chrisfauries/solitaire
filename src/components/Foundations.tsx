import React from "react";
import { FOUNDATION } from "../data/constants";
import Foundation from "./Foundation";

const Foundations = () => {
  return (
    <div className="foundation-container">
      <Foundation foundation={FOUNDATION.ONE} />
      <Foundation foundation={FOUNDATION.TWO} />
      <Foundation foundation={FOUNDATION.THREE} />
      <Foundation foundation={FOUNDATION.FOUR} />
    </div>
  );
};

export default Foundations;
