import { SetterOrUpdater } from "recoil";
import { EventHandler } from "../eventHandler";

export default class DragLeaveEventHandler extends EventHandler {
  dragEvent: DragEvent;
  clearDestinationDrag: SetterOrUpdater<void>;
  constructor(
    dragEvent: DragEvent,
    clearDestinationDrag: SetterOrUpdater<void>
  ) {
    super();
    this.dragEvent = dragEvent;
    this.clearDestinationDrag = clearDestinationDrag;
  }

  handle() {
    this.clearDestinationDrag();
  }
}
