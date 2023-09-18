import { SetterOrUpdater } from "recoil";
import { DragEndEventHandler } from ".";

export default class WaistDragEndEventHandler extends DragEndEventHandler {
  removeCard: SetterOrUpdater<void>;
  constructor(
    dragEvent: DragEvent,
    clearDrag: SetterOrUpdater<void>,
    removeCard: SetterOrUpdater<void>
  ) {
    super(dragEvent, clearDrag);
    this.removeCard = removeCard;
  }

  handle() {
    this.removeCard();
    super.handle();
  }
}
