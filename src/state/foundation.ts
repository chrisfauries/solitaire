import { atom, selector } from "recoil";
import memo from "memoizee";
import {
  CARD,
  DEFAULT_FOUNDATIONS_ATOM,
  FOUNDATION,
  RANK,
} from "../data/constants";
import { Attribute, getNextHigherRank, getRank, getSuit } from "../data/utils";
import dragState from "../state/drag";

type FoundationAtom = {
  [key in FOUNDATION]: CARD[];
};

const foundationsAtom = atom<FoundationAtom>({
  key: "foundation/foundations-atom",
  default: DEFAULT_FOUNDATIONS_ATOM,
});

const getFoundation = memo((foundation: FOUNDATION) =>
  selector({
    key: `get-foundation-${foundation}`,
    get: ({ get }) => get(foundationsAtom)[foundation],
  })
);

const setFoundation = selector<void>({
  key: "foundation/set-foundation",
  get: () => {},
  set: ({ set, get }) => {
    const drag = get(dragState.get);
    const foundation = Attribute.getFoundation(drag?.destination);
    const card = Attribute.getCard(drag?.source);

    const foundations = get(foundationsAtom);
    const foundationArray = foundations[foundation];

    const newCardRank = getRank(card);

    // Must be an Ace if foundation is empty
    if (foundationArray.length === 0) {
      if (newCardRank !== RANK.ACE) {
        return; // no-op
      }
    } else {
      // Must be next rank with matching suit
      const currentCard = foundationArray[foundationArray.length - 1];
      if (
        getNextHigherRank(getRank(currentCard)) !== newCardRank ||
        getSuit(currentCard) !== getSuit(card)
      ) {
        return; // no-op
      }
    }

    set(foundationsAtom, {
      ...foundations,
      [foundation]: [...foundationArray, card],
    });

    set(dragState.success, undefined);
  },
});

const removeCard = selector<void>({
  key: "foundation/remove-card",
  get: () => {},
  set: ({ set, get }) => {
    const drag = get(dragState.get);

    if (!drag?.success) {
      return; // no-op
    }

    const foundation = Attribute.getFoundation(drag?.source);
    const foundations = get(foundationsAtom);
    const foundationArray = [...foundations[foundation]];

    if (!foundationArray.length) {
      // is this possible?
      return; // no-op
    }

    foundationArray.pop(); // It's always the last item in stack

    set(foundationsAtom, {
      ...foundations,
      [foundation]: foundationArray,
    });
  },
});

export default {
  get: getFoundation,
  set: setFoundation,
  removeCard,
};
