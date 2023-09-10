import { SetterOrUpdater } from "recoil";
import { CARD, FOUNDATION } from "../../data/constants";
import { getIntAttribute } from "../../data/utils";
import { SetFoundation } from "../../state/foundation";

const getFoundationFromDragEvent = (e: DragEvent) =>
  getIntAttribute(e.target, "data-foundation") as FOUNDATION;

const getCardFromDragEvent = (e:DragEvent) =>  {
    const data = e.dataTransfer?.getData("text/plain");
    return parseInt(data!) as CARD;
}

const handleFoundationDrop = (
  e: DragEvent,
  setFoundation: SetterOrUpdater<SetFoundation>
) => {
  const foundation = getFoundationFromDragEvent(e);
  const card = getCardFromDragEvent(e);
  setFoundation({foundation, card});
};

export default handleFoundationDrop;
