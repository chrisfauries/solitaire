import { atom, selector } from "recoil";
import memo from "memoizee";
import {
  CARD,
  DEFAULT_FOUNDATIONS_ATOM,
  FOUNDATION,
  RANK,
} from "../data/constants";
import { getNextHigherRank, getRank, getSuit } from "../data/utils";
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

export interface SetFoundation {
  foundation: FOUNDATION;
  card: CARD;
}

const setFoundation = selector<SetFoundation>({
  key: "foundation/set-foundation",
  get: () => ({ foundation: FOUNDATION.ONE, card: CARD.ACE_OF_CLUBS }),
  set: ({ set, get }, args) => {
    const { foundation, card } = args as SetFoundation;
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

export default {
  get: getFoundation,
  set: setFoundation,
};
