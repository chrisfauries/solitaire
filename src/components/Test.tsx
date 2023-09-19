import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import deckState from "../state/deck";

const Test = () => {
  const deck = useRecoilValue(deckState.get);
  const newDeck = useSetRecoilState(deckState.generate);

  return (
    <>
      <div>{JSON.stringify(deck)}</div>
      <button onClick={() => newDeck()}>New Game</button>
    </>
  );
};

export default Test;
