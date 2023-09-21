import { SetterOrUpdater } from "recoil";
import { Attribute } from "../../data/utils";
import DragLeaveEventHandler from "../onDragLeave";

export default class DepotCardDragLeaveEventHandler extends DragLeaveEventHandler {
  constructor(
    dragEvent: DragEvent,
    clearDestinationDrag: SetterOrUpdater<void>
  ) {
    super(dragEvent, clearDestinationDrag);
  }

  handle(): void {
    Attribute.getIsDropable(this.dragEvent.target) && super.handle();
  }
}