import { SetterOrUpdater } from "recoil";
import { DragEndEventHandler } from ".";

export default class DepotCardDragEndEventHandler extends DragEndEventHandler {
  removeDepotCard: SetterOrUpdater<void>;
  constructor(
    dragEvent: DragEvent,
    clearDrag: SetterOrUpdater<void>,
    removeDepotCard: SetterOrUpdater<void>
  ) {
    super(dragEvent, clearDrag);
    this.removeDepotCard = removeDepotCard;
  }

  handle() {
    this.removeDepotCard();
    super.handle();
  }
}