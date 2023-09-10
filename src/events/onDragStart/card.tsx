import { CARD } from "../../data/constants";
import { getIntAttribute } from "../../data/utils";

const getCardAttributeFromDragEvent = (e: DragEvent) =>
  getIntAttribute(e.target, "data-card") as CARD;

const setCardOnTransferData = (e: DragEvent) => {
  const card = getCardAttributeFromDragEvent(e);
  e.dataTransfer?.setData("text/plain", card.toString());
};

const handleCardDragStart = (e: DragEvent) => {
  setCardOnTransferData(e);
};

export default handleCardDragStart;
