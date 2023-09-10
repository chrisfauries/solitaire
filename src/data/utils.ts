import {
  BLACKS,
  CARD,
  DataType,
  DECK,
  HEARTS,
  RANK,
  SPADES,
  SUIT,
} from "./constants";

export const getBlacks = (cards: Set<CARD>) => {
  const blacks = new Set<CARD>();
  cards.forEach((card) => {
    if (CARD[card].includes("CLUBS") || CARD[card].includes("SPADES")) {
      blacks.add(card);
    }
  });
  return blacks;
};

export const getReds = (cards: Set<CARD>) => {
  const reds = new Set<CARD>();
  cards.forEach((card) => {
    if (CARD[card].includes("DIAMONDS") || CARD[card].includes("HEARTS")) {
      reds.add(card);
    }
  });
  return reds;
};

export const getSuit = (card: CARD) =>
  BLACKS.has(card)
    ? SPADES.has(card)
      ? SUIT.SPADE
      : SUIT.CLUB
    : HEARTS.has(card)
    ? SUIT.HEART
    : SUIT.DIAMOND;

// TODO: this could be better
export const getRank = (card: CARD) =>
  RANK[
    Object.values(RANK).filter(
      (rank) => rank === CARD[card].split("_")[0]
    )[0] as keyof typeof RANK
  ];

export const getNextRank = (rank: RANK) => rank === RANK.KING ? RANK.ACE : rank + 1;


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
