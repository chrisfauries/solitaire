import { getBlacks, getReds } from "./utils";

export enum DataType {
  FOUNDATION,
  STOCK,
  WAIST,
  DEPOT,
  DEPOT_CARD
}

export enum CARD {
  TWO_OF_CLUBS,
  TWO_OF_HEARTS,
  TWO_OF_SPADES,
  TWO_OF_DIAMONDS,
  THREE_OF_CLUBS,
  THREE_OF_HEARTS,
  THREE_OF_SPADES,
  THREE_OF_DIAMONDS,
  FOUR_OF_CLUBS,
  FOUR_OF_HEARTS,
  FOUR_OF_SPADES,
  FOUR_OF_DIAMONDS,
  FIVE_OF_CLUBS,
  FIVE_OF_HEARTS,
  FIVE_OF_SPADES,
  FIVE_OF_DIAMONDS,
  SIX_OF_CLUBS,
  SIX_OF_HEARTS,
  SIX_OF_SPADES,
  SIX_OF_DIAMONDS,
  SEVEN_OF_CLUBS,
  SEVEN_OF_HEARTS,
  SEVEN_OF_SPADES,
  SEVEN_OF_DIAMONDS,
  EIGHT_OF_CLUBS,
  EIGHT_OF_HEARTS,
  EIGHT_OF_SPADES,
  EIGHT_OF_DIAMONDS,
  NINE_OF_CLUBS,
  NINE_OF_HEARTS,
  NINE_OF_SPADES,
  NINE_OF_DIAMONDS,
  TEN_OF_CLUBS,
  TEN_OF_HEARTS,
  TEN_OF_SPADES,
  TEN_OF_DIAMONDS,
  JACK_OF_CLUBS,
  JACK_OF_HEARTS,
  JACK_OF_SPADES,
  JACK_OF_DIAMONDS,
  QUEEN_OF_CLUBS,
  QUEEN_OF_HEARTS,
  QUEEN_OF_SPADES,
  QUEEN_OF_DIAMONDS,
  KING_OF_CLUBS,
  KING_OF_HEARTS,
  KING_OF_SPADES,
  KING_OF_DIAMONDS,
  ACE_OF_CLUBS,
  ACE_OF_HEARTS,
  ACE_OF_SPADES,
  ACE_OF_DIAMONDS,
}

export enum SUIT {
  CLUB,
  SPADE,
  HEART,
  DIAMOND,
}

export enum RANK {
  ACE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
  TEN = 10,
  JACK = 11,
  QUEEN = 12,
  KING = 13,
}

interface CARD_DATA {
  suit: SUIT;
  rank: RANK;
}

export const CARD_DATA_MAP: { [key in CARD]: CARD_DATA } = {
  [CARD.ACE_OF_CLUBS]: { suit: SUIT.CLUB, rank: RANK.ACE },
  [CARD.ACE_OF_HEARTS]: { suit: SUIT.HEART, rank: RANK.ACE },
  [CARD.ACE_OF_SPADES]: { suit: SUIT.SPADE, rank: RANK.ACE },
  [CARD.ACE_OF_DIAMONDS]: { suit: SUIT.DIAMOND, rank: RANK.ACE },
  [CARD.TWO_OF_CLUBS]: { suit: SUIT.CLUB, rank: RANK.TWO },
  [CARD.TWO_OF_HEARTS]: { suit: SUIT.HEART, rank: RANK.TWO },
  [CARD.TWO_OF_SPADES]: { suit: SUIT.SPADE, rank: RANK.TWO },
  [CARD.TWO_OF_DIAMONDS]: { suit: SUIT.DIAMOND, rank: RANK.TWO },
  [CARD.THREE_OF_CLUBS]: { suit: SUIT.CLUB, rank: RANK.THREE },
  [CARD.THREE_OF_HEARTS]: { suit: SUIT.HEART, rank: RANK.THREE },
  [CARD.THREE_OF_SPADES]: { suit: SUIT.SPADE, rank: RANK.THREE },
  [CARD.THREE_OF_DIAMONDS]: { suit: SUIT.DIAMOND, rank: RANK.THREE },
  [CARD.FOUR_OF_CLUBS]: { suit: SUIT.CLUB, rank: RANK.FOUR },
  [CARD.FOUR_OF_HEARTS]: { suit: SUIT.HEART, rank: RANK.FOUR },
  [CARD.FOUR_OF_SPADES]: { suit: SUIT.SPADE, rank: RANK.FOUR },
  [CARD.FOUR_OF_DIAMONDS]: { suit: SUIT.DIAMOND, rank: RANK.FOUR },
  [CARD.FIVE_OF_CLUBS]: { suit: SUIT.CLUB, rank: RANK.FIVE },
  [CARD.FIVE_OF_HEARTS]: { suit: SUIT.HEART, rank: RANK.FIVE },
  [CARD.FIVE_OF_SPADES]: { suit: SUIT.SPADE, rank: RANK.FIVE },
  [CARD.FIVE_OF_DIAMONDS]: { suit: SUIT.DIAMOND, rank: RANK.FIVE },
  [CARD.SIX_OF_CLUBS]: { suit: SUIT.CLUB, rank: RANK.SIX },
  [CARD.SIX_OF_HEARTS]: { suit: SUIT.HEART, rank: RANK.SIX },
  [CARD.SIX_OF_SPADES]: { suit: SUIT.SPADE, rank: RANK.SIX },
  [CARD.SIX_OF_DIAMONDS]: { suit: SUIT.DIAMOND, rank: RANK.SIX },
  [CARD.SEVEN_OF_CLUBS]: { suit: SUIT.CLUB, rank: RANK.SEVEN },
  [CARD.SEVEN_OF_HEARTS]: { suit: SUIT.HEART, rank: RANK.SEVEN },
  [CARD.SEVEN_OF_SPADES]: { suit: SUIT.SPADE, rank: RANK.SEVEN },
  [CARD.SEVEN_OF_DIAMONDS]: { suit: SUIT.DIAMOND, rank: RANK.SEVEN },
  [CARD.EIGHT_OF_CLUBS]: { suit: SUIT.CLUB, rank: RANK.EIGHT },
  [CARD.EIGHT_OF_HEARTS]: { suit: SUIT.HEART, rank: RANK.EIGHT },
  [CARD.EIGHT_OF_SPADES]: { suit: SUIT.SPADE, rank: RANK.EIGHT },
  [CARD.EIGHT_OF_DIAMONDS]: { suit: SUIT.DIAMOND, rank: RANK.EIGHT },
  [CARD.NINE_OF_CLUBS]: { suit: SUIT.CLUB, rank: RANK.NINE },
  [CARD.NINE_OF_HEARTS]: { suit: SUIT.HEART, rank: RANK.NINE },
  [CARD.NINE_OF_SPADES]: { suit: SUIT.SPADE, rank: RANK.NINE },
  [CARD.NINE_OF_DIAMONDS]: { suit: SUIT.DIAMOND, rank: RANK.NINE },
  [CARD.TEN_OF_CLUBS]: { suit: SUIT.CLUB, rank: RANK.TEN },
  [CARD.TEN_OF_HEARTS]: { suit: SUIT.HEART, rank: RANK.TEN },
  [CARD.TEN_OF_SPADES]: { suit: SUIT.SPADE, rank: RANK.TEN },
  [CARD.TEN_OF_DIAMONDS]: { suit: SUIT.DIAMOND, rank: RANK.TEN },
  [CARD.JACK_OF_CLUBS]: { suit: SUIT.CLUB, rank: RANK.JACK },
  [CARD.JACK_OF_HEARTS]: { suit: SUIT.HEART, rank: RANK.JACK },
  [CARD.JACK_OF_SPADES]: { suit: SUIT.SPADE, rank: RANK.JACK },
  [CARD.JACK_OF_DIAMONDS]: { suit: SUIT.DIAMOND, rank: RANK.JACK },
  [CARD.QUEEN_OF_CLUBS]: { suit: SUIT.CLUB, rank: RANK.QUEEN },
  [CARD.QUEEN_OF_HEARTS]: { suit: SUIT.HEART, rank: RANK.QUEEN },
  [CARD.QUEEN_OF_SPADES]: { suit: SUIT.SPADE, rank: RANK.QUEEN },
  [CARD.QUEEN_OF_DIAMONDS]: { suit: SUIT.DIAMOND, rank: RANK.QUEEN },
  [CARD.KING_OF_CLUBS]: { suit: SUIT.CLUB, rank: RANK.KING },
  [CARD.KING_OF_HEARTS]: { suit: SUIT.HEART, rank: RANK.KING },
  [CARD.KING_OF_SPADES]: { suit: SUIT.SPADE, rank: RANK.KING },
  [CARD.KING_OF_DIAMONDS]: { suit: SUIT.DIAMOND, rank: RANK.KING },
};

export const DECK = new Set<CARD>(
  Object.values(CARD).filter((x) => Number.isInteger(x as any)) as CARD[]
);
export const BLACKS = getBlacks(DECK);
export const REDS = getReds(DECK);
export const CLUBS = new Set<CARD>(
  Array.from(DECK).filter((card) => CARD_DATA_MAP[card].suit === SUIT.CLUB)
);
export const SPADES = new Set<CARD>(
  Array.from(DECK).filter((card) => CARD_DATA_MAP[card].suit === SUIT.SPADE)
);
export const DIAMONDS = new Set<CARD>(
  Array.from(DECK).filter((card) => CARD_DATA_MAP[card].suit === SUIT.DIAMOND)
);
export const HEARTS = new Set<CARD>(
  Array.from(DECK).filter((card) => CARD_DATA_MAP[card].suit === SUIT.HEART)
);

export enum FOUNDATION {
  ONE,
  TWO,
  THREE,
  FOUR,
}

export const DEFAULT_FOUNDATIONS_ATOM = {
  [FOUNDATION.ONE]: [],
  [FOUNDATION.TWO]: [],
  [FOUNDATION.THREE]: [],
  [FOUNDATION.FOUR]: [],
};

export enum DEPOT {
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
}

export const DEFAULT_DEPOTS_ATOM = {
  [DEPOT.ONE]: [],
  [DEPOT.TWO]: [],
  [DEPOT.THREE]: [],
  [DEPOT.FOUR]: [],
  [DEPOT.FIVE]: [],
  [DEPOT.SIX]: [],
  [DEPOT.SEVEN]: [],
}