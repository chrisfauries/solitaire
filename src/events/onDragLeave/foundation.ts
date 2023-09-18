import { SetterOrUpdater } from "recoil";
import DragLeaveEventHandler from "../onDragLeave";

export default class FoundationDragLeaveEventHandler extends DragLeaveEventHandler {
  constructor(
    dragEvent: DragEvent,
    clearDestinationDrag: SetterOrUpdater<void>
  ) {
    super(dragEvent, clearDestinationDrag);
  }

  handle() {}
}
