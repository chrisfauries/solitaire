import { atom, selector } from "recoil";
import { CARD, DataType } from "../data/constants";
import { getShuffledDeck, tryGetDataType } from "../data/utils";
import stockState from "./stock";
import dragState from "./drag";

const deckAtom = atom<CARD[]>({
  key: "deck/deckAtom",
  default: getShuffledDeck(),
});

const setNewShuffledDeck = selector({
  key: "deck/setNewShuffleDeck",
  get: () => {},
  set: ({ get, set }) => set(deckAtom, getShuffledDeck()),
});

const removeCard = selector({
  key: "deck/remove-card",
  get: () => {},
  set: ({ get, set }) => {
    const drag = get(dragState.get);

    if (!drag?.success) {
      return; // no-op
    }

    if (tryGetDataType(drag?.source) !== DataType.WAIST) {
      return; // no-op
    }

    const stockPointer = get(stockState.get);
    const newDeck = [...get(deckAtom)];
    newDeck.splice(stockPointer.drawPointer, 1);

    set(deckAtom, newDeck);
    set(stockState.decrement, undefined);
  },
});

export default {
  get: deckAtom,
  generate: setNewShuffledDeck,
  remove: removeCard,
};
