import { atom, selector } from "recoil";
import memo from "memoizee";
import { CARD } from "../data/constants";
import { getShuffledDeck } from "../data/utils";

const deckAtom = atom<CARD[]>({
  key: "deck/deckAtom",
  default: getShuffledDeck(),
});

const setNewShuffledDeck = selector({
  key: "deck/setNewShuffleDeck",
  get: () => {},
  set: ({ get, set }) => set(deckAtom, getShuffledDeck()),
});

export default {
  get: deckAtom,
  generate: setNewShuffledDeck,
};
