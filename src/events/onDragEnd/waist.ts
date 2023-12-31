import { SetterOrUpdater } from "recoil";
import { DragEndEventHandler } from ".";

export default class WaistDragEndEventHandler extends DragEndEventHandler {
    removeWaistCard: SetterOrUpdater<void>;
  constructor(
    dragEvent: DragEvent,
    clearDrag: SetterOrUpdater<void>,
    removeWaistCard: SetterOrUpdater<void>
  ) {
    super(dragEvent, clearDrag);
    this.removeWaistCard = removeWaistCard;
  }

  handle() {
    this.removeWaistCard();
    super.handle();
  }
}
