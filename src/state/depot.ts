import { atom, selector } from "recoil";
import memo from "memoizee";
import { CARD, DEFAULT_DEPOTS_ATOM, DEPOT } from "../data/constants";
import dragState from "../state/drag";
import { Attribute } from "../data/utils";

export interface DepotCard {
  card: CARD;
  isVisible: boolean;
}

type DepotsAtom = {
  [key in DEPOT]: DepotCard[];
};

const depotsAtom = atom<DepotsAtom>({
  key: "depot/depots-atom",
  default: DEFAULT_DEPOTS_ATOM,
});

const getDepot = memo((depot: DEPOT) =>
  selector({
    key: `get-depot-${depot}`,
    get: ({ get }) => get(depotsAtom)[depot],
  })
);

const setDepot = selector<void>({
  key: "depot/set-depot",
  get: () => {},
  set: ({ set, get }) => {
    const drag = get(dragState.get);
    const card = Attribute.getCard(drag?.source);
    const depot = Attribute.getDepot(drag?.destination);

    const depots = get(depotsAtom);
    const depotArray = depots[depot];

    // TODO: no-op conditions (inital deal, is empty and king, is one lower rank and opposite suit)
    // TODO: handle multi-card drag from another depot

    set(depotsAtom, {
      ...depots,
      [depot]: [...depotArray, { card, isVisible: true }],
    });

    set(dragState.success, undefined);
  },
});

const removeCard = selector<void>({
  key: "depot/remove-card",
  get: () => {},
  set: ({ get, set }) => {
    const drag = get(dragState.get);

    if (!drag?.success) {
        return; // no-op
      }

    const depot = Attribute.getDepot(drag?.source);
    const card = Attribute.getCard(drag?.source);

    const depots = get(depotsAtom);
    const depotArray = depots[depot];

    // TODO: handle multi-card drag to another depot

    set(depotsAtom, {
      ...depots,
      [depot]: depotArray.filter((depotCard) => depotCard.card !== card),
    });
  },
});

export default {
  get: getDepot,
  set: setDepot,
  removeCard,
};
