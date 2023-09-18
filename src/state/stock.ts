import { atom, selector } from "recoil";
import deckState from "./deck";

interface Stock {
  drawPointer: number;
}

const stockAtom = atom<Stock>({
  key: "stock/stockAtom",
  default: { drawPointer: -1 },
});

const advance = selector({
  key: "stock/advance",
  get: () => {},
  set: ({ set, get }) => {
    const deck = get(deckState.get);
    const stock = get(stockAtom);

    // Deck is empty
    if (!deck.length) {
      return;
    }

    // First draw
    if (stock.drawPointer === -1) {
      set(stockAtom, {
        drawPointer: deck.length >= 3 ? 2 : deck.length - 1,
      });
      // Reset draw
    } else if (stock.drawPointer === deck.length - 1) {
      set(stockAtom, { drawPointer: -1 });
      // Middle draws
    } else {
      set(stockAtom, {
        drawPointer:
          stock.drawPointer + 3 > deck.length - 1
            ? deck.length - 1
            : stock.drawPointer + 3,
      });
    }
  },
});

const decrement = selector({
  key: "stock/decrement",
  get: () => {},
  set: ({ set, get }) => {
    const stock = get(stockAtom);
    set(stockAtom, { ...stock, drawPointer: stock.drawPointer - 1 });
  },
});

export default {
  get: stockAtom,
  advance,
  decrement
};
