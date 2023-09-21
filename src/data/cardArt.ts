import { CARD } from "./constants";
import TWO_OF_CLUBS_FRONT from "../static/cards/fronts/clubs_2.svg";
import THREE_OF_CLUBS_FRONT from "../static/cards/fronts/clubs_3.svg";
import FOUR_OF_CLUBS_FRONT from "../static/cards/fronts/clubs_4.svg";
import FIVE_OF_CLUBS_FRONT from "../static/cards/fronts/clubs_5.svg";
import SIX_OF_CLUBS_FRONT from "../static/cards/fronts/clubs_6.svg";
import SEVEN_OF_CLUBS_FRONT from "../static/cards/fronts/clubs_7.svg";
import EIGHT_OF_CLUBS_FRONT from "../static/cards/fronts/clubs_8.svg";
import NINE_OF_CLUBS_FRONT from "../static/cards/fronts/clubs_9.svg";
import TEN_OF_CLUBS_FRONT from "../static/cards/fronts/clubs_10.svg";
import JACK_OF_CLUBS_FRONT from "../static/cards/fronts/clubs_jack.svg";
import QUEEN_OF_CLUBS_FRONT from "../static/cards/fronts/clubs_queen.svg";
import KING_OF_CLUBS_FRONT from "../static/cards/fronts/clubs_king.svg";
import ACE_OF_CLUBS_FRONT from "../static/cards/fronts/clubs_ace.svg";
import TWO_OF_DIAMONDS_FRONT from "../static/cards/fronts/diamonds_2.svg";
import THREE_OF_DIAMONDS_FRONT from "../static/cards/fronts/diamonds_3.svg";
import FOUR_OF_DIAMONDS_FRONT from "../static/cards/fronts/diamonds_4.svg";
import FIVE_OF_DIAMONDS_FRONT from "../static/cards/fronts/diamonds_5.svg";
import SIX_OF_DIAMONDS_FRONT from "../static/cards/fronts/diamonds_6.svg";
import SEVEN_OF_DIAMONDS_FRONT from "../static/cards/fronts/diamonds_7.svg";
import EIGHT_OF_DIAMONDS_FRONT from "../static/cards/fronts/diamonds_8.svg";
import NINE_OF_DIAMONDS_FRONT from "../static/cards/fronts/diamonds_9.svg";
import TEN_OF_DIAMONDS_FRONT from "../static/cards/fronts/diamonds_10.svg";
import JACK_OF_DIAMONDS_FRONT from "../static/cards/fronts/diamonds_jack.svg";
import QUEEN_OF_DIAMONDS_FRONT from "../static/cards/fronts/diamonds_queen.svg";
import KING_OF_DIAMONDS_FRONT from "../static/cards/fronts/diamonds_king.svg";
import ACE_OF_DIAMONDS_FRONT from "../static/cards/fronts/diamonds_ace.svg";
import TWO_OF_HEARTS_FRONT from "../static/cards/fronts/hearts_2.svg";
import THREE_OF_HEARTS_FRONT from "../static/cards/fronts/hearts_3.svg";
import FOUR_OF_HEARTS_FRONT from "../static/cards/fronts/hearts_4.svg";
import FIVE_OF_HEARTS_FRONT from "../static/cards/fronts/hearts_5.svg";
import SIX_OF_HEARTS_FRONT from "../static/cards/fronts/hearts_6.svg";
import SEVEN_OF_HEARTS_FRONT from "../static/cards/fronts/hearts_7.svg";
import EIGHT_OF_HEARTS_FRONT from "../static/cards/fronts/hearts_8.svg";
import NINE_OF_HEARTS_FRONT from "../static/cards/fronts/hearts_9.svg";
import TEN_OF_HEARTS_FRONT from "../static/cards/fronts/hearts_10.svg";
import JACK_OF_HEARTS_FRONT from "../static/cards/fronts/hearts_jack.svg";
import QUEEN_OF_HEARTS_FRONT from "../static/cards/fronts/hearts_queen.svg";
import KING_OF_HEARTS_FRONT from "../static/cards/fronts/hearts_king.svg";
import ACE_OF_HEARTS_FRONT from "../static/cards/fronts/hearts_ace.svg";
import TWO_OF_SPADES_FRONT from "../static/cards/fronts/spades_2.svg";
import THREE_OF_SPADES_FRONT from "../static/cards/fronts/spades_3.svg";
import FOUR_OF_SPADES_FRONT from "../static/cards/fronts/spades_4.svg";
import FIVE_OF_SPADES_FRONT from "../static/cards/fronts/spades_5.svg";
import SIX_OF_SPADES_FRONT from "../static/cards/fronts/spades_6.svg";
import SEVEN_OF_SPADES_FRONT from "../static/cards/fronts/spades_7.svg";
import EIGHT_OF_SPADES_FRONT from "../static/cards/fronts/spades_8.svg";
import NINE_OF_SPADES_FRONT from "../static/cards/fronts/spades_9.svg";
import TEN_OF_SPADES_FRONT from "../static/cards/fronts/spades_10.svg";
import JACK_OF_SPADES_FRONT from "../static/cards/fronts/spades_jack.svg";
import QUEEN_OF_SPADES_FRONT from "../static/cards/fronts/spades_queen.svg";
import KING_OF_SPADES_FRONT from "../static/cards/fronts/spades_king.svg";
import ACE_OF_SPADES_FRONT from "../static/cards/fronts/spades_ace.svg";

export default class CardArt {
  private static FRONT_MAP: { [key in CARD]: string } = {
    [CARD.TWO_OF_CLUBS]: TWO_OF_CLUBS_FRONT,
    [CARD.THREE_OF_CLUBS]: THREE_OF_CLUBS_FRONT,
    [CARD.FOUR_OF_CLUBS]: FOUR_OF_CLUBS_FRONT,
    [CARD.FIVE_OF_CLUBS]: FIVE_OF_CLUBS_FRONT,
    [CARD.SIX_OF_CLUBS]: SIX_OF_CLUBS_FRONT,
    [CARD.SEVEN_OF_CLUBS]: SEVEN_OF_CLUBS_FRONT,
    [CARD.EIGHT_OF_CLUBS]: EIGHT_OF_CLUBS_FRONT,
    [CARD.NINE_OF_CLUBS]: NINE_OF_CLUBS_FRONT,
    [CARD.TEN_OF_CLUBS]: TEN_OF_CLUBS_FRONT,
    [CARD.JACK_OF_CLUBS]: JACK_OF_CLUBS_FRONT,
    [CARD.QUEEN_OF_CLUBS]: QUEEN_OF_CLUBS_FRONT,
    [CARD.KING_OF_CLUBS]: KING_OF_CLUBS_FRONT,
    [CARD.ACE_OF_CLUBS]: ACE_OF_CLUBS_FRONT,
    [CARD.TWO_OF_DIAMONDS]: TWO_OF_DIAMONDS_FRONT,
    [CARD.THREE_OF_DIAMONDS]: THREE_OF_DIAMONDS_FRONT,
    [CARD.FOUR_OF_DIAMONDS]: FOUR_OF_DIAMONDS_FRONT,
    [CARD.FIVE_OF_DIAMONDS]: FIVE_OF_DIAMONDS_FRONT,
    [CARD.SIX_OF_DIAMONDS]: SIX_OF_DIAMONDS_FRONT,
    [CARD.SEVEN_OF_DIAMONDS]: SEVEN_OF_DIAMONDS_FRONT,
    [CARD.EIGHT_OF_DIAMONDS]: EIGHT_OF_DIAMONDS_FRONT,
    [CARD.NINE_OF_DIAMONDS]: NINE_OF_DIAMONDS_FRONT,
    [CARD.TEN_OF_DIAMONDS]: TEN_OF_DIAMONDS_FRONT,
    [CARD.JACK_OF_DIAMONDS]: JACK_OF_DIAMONDS_FRONT,
    [CARD.QUEEN_OF_DIAMONDS]: QUEEN_OF_DIAMONDS_FRONT,
    [CARD.KING_OF_DIAMONDS]: KING_OF_DIAMONDS_FRONT,
    [CARD.ACE_OF_DIAMONDS]: ACE_OF_DIAMONDS_FRONT,
    [CARD.TWO_OF_HEARTS]: TWO_OF_HEARTS_FRONT,
    [CARD.THREE_OF_HEARTS]: THREE_OF_HEARTS_FRONT,
    [CARD.FOUR_OF_HEARTS]: FOUR_OF_HEARTS_FRONT,
    [CARD.FIVE_OF_HEARTS]: FIVE_OF_HEARTS_FRONT,
    [CARD.SIX_OF_HEARTS]: SIX_OF_HEARTS_FRONT,
    [CARD.SEVEN_OF_HEARTS]: SEVEN_OF_HEARTS_FRONT,
    [CARD.EIGHT_OF_HEARTS]: EIGHT_OF_HEARTS_FRONT,
    [CARD.NINE_OF_HEARTS]: NINE_OF_HEARTS_FRONT,
    [CARD.TEN_OF_HEARTS]: TEN_OF_HEARTS_FRONT,
    [CARD.JACK_OF_HEARTS]: JACK_OF_HEARTS_FRONT,
    [CARD.QUEEN_OF_HEARTS]: QUEEN_OF_HEARTS_FRONT,
    [CARD.KING_OF_HEARTS]: KING_OF_HEARTS_FRONT,
    [CARD.ACE_OF_HEARTS]: ACE_OF_HEARTS_FRONT,
    [CARD.TWO_OF_SPADES]: TWO_OF_SPADES_FRONT,
    [CARD.THREE_OF_SPADES]: THREE_OF_SPADES_FRONT,
    [CARD.FOUR_OF_SPADES]: FOUR_OF_SPADES_FRONT,
    [CARD.FIVE_OF_SPADES]: FIVE_OF_SPADES_FRONT,
    [CARD.SIX_OF_SPADES]: SIX_OF_SPADES_FRONT,
    [CARD.SEVEN_OF_SPADES]: SEVEN_OF_SPADES_FRONT,
    [CARD.EIGHT_OF_SPADES]: EIGHT_OF_SPADES_FRONT,
    [CARD.NINE_OF_SPADES]: NINE_OF_SPADES_FRONT,
    [CARD.TEN_OF_SPADES]: TEN_OF_SPADES_FRONT,
    [CARD.JACK_OF_SPADES]: JACK_OF_SPADES_FRONT,
    [CARD.QUEEN_OF_SPADES]: QUEEN_OF_SPADES_FRONT,
    [CARD.KING_OF_SPADES]: KING_OF_SPADES_FRONT,
    [CARD.ACE_OF_SPADES]: ACE_OF_SPADES_FRONT,
  };

  static getFront(card: CARD) {
    return this.FRONT_MAP[card];
  }
}
