import React from "react";
import deckState from '../state/deck'
import { useRecoilValue , useSetRecoilState} from "recoil";

const Stock = () => {
    const deck = useRecoilValue(deckState.get);
    const newDeck = useSetRecoilState(deckState.generate);
  return <>
  
  <div>{JSON.stringify(deck)}</div>
  <button onClick={() => newDeck()}>New Game</button>
  </>
};

export default Stock;
