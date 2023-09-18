import { SetterOrUpdater } from "recoil";
import DropEventHandler from ".";
import { FOUNDATION } from "../../data/constants";
import { getCardFromDragEvent, getIntAttribute } from "../../data/utils";
import { SetFoundation } from "../../state/foundation";

const getFoundationFromDragEvent = (e: DragEvent) =>
  getIntAttribute(e.target, "data-foundation") as FOUNDATION;

export default class FoundationDropEventHandler extends DropEventHandler {
  setFoundation: SetterOrUpdater<SetFoundation>;
  constructor(
    dragEvent: DragEvent,
    setFoundation: SetterOrUpdater<SetFoundation>
  ) {
    super(dragEvent);
    this.setFoundation = setFoundation;
  }

  handle(): void {
    const foundation = getFoundationFromDragEvent(this.dragEvent);
    const card = getCardFromDragEvent(this.dragEvent);
    this.setFoundation({ foundation, card });
  }
}
