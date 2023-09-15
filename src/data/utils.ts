import {
  BLACKS,
  CARD,
  DataType,
  DECK,
  HEARTS,
  RANK,
  SPADES,
  SUIT,
  CARD_DATA_MAP,
} from "./constants";

export const getBlacks = (cards: Set<CARD>) =>
  new Set<CARD>(Array.from(cards).filter((card) => !isRed(card)));

export const getReds = (cards: Set<CARD>) =>
  new Set<CARD>(Array.from(cards).filter((card) => isRed(card)));

const isRed = (card: CARD) =>
  CARD_DATA_MAP[card].suit === SUIT.DIAMOND ||
  CARD_DATA_MAP[card].suit === SUIT.HEART;

export const getSuit = (card: CARD) => CARD_DATA_MAP[card].suit;
export const getRank = (card: CARD) => CARD_DATA_MAP[card].rank;

// used for foundations, no wrap-around
// null represents no rank higher than KING
export const getNextHigherRank = (rank: RANK) =>
  rank === RANK.KING ? null : rank + 1;

// used for foundations, no wrap-around
// null represents no rank lower than ACE
export const getNextLowerRank = (rank: RANK) =>
  rank === RANK.ACE ? null : rank - 1;

export const getCardFromString = (value: string): CARD => parseInt(value);

export const tryGetDataType = (el: Element) => {
  const dataType = el.getAttribute("data-type");

  if (!dataType) {
    return null;
  }

  return DataType[dataType as keyof typeof DataType];
};

export const getShuffledDeck = (): CARD[] => {
  const deck = Array.from(DECK);

  // swap two cards 10,000 times in place
  let times = 10_000;
  while (times--) {
    const indexA = Math.floor(Math.random() * 104) % 52;
    const indexB = Math.floor(Math.random() * 104) % 52;

    if (indexA === indexB) continue;

    const cardA = deck[indexA];
    deck[indexA] = deck[indexB];
    deck[indexB] = cardA;
  }

  return deck;
};

export const getAttribute = (
  eventTarget: EventTarget | null,
  attributeName: string
) => (eventTarget as Element | null)?.getAttribute?.(attributeName) ?? "";

export const getIntAttribute = (
  eventTarget: EventTarget | null,
  attributeName: string
) => parseInt(getAttribute(eventTarget, attributeName));
