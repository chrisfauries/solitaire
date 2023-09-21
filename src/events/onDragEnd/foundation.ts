import { SetterOrUpdater } from "recoil";
import { DragEndEventHandler } from ".";

export default class FoundationDragEndEventHandler extends DragEndEventHandler {
  removeFoundationCard: SetterOrUpdater<void>;
  constructor(
    dragEvent: DragEvent,
    clearDrag: SetterOrUpdater<void>,
    removeFoundationCard: SetterOrUpdater<void>
  ) {
    super(dragEvent, clearDrag);
    this.removeFoundationCard = removeFoundationCard;
  }

  handle() {
    this.removeFoundationCard();
    super.handle();
  }
}