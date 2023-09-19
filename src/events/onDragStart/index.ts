import { SetterOrUpdater } from "recoil";
import { EventHandler } from "../eventHandler";

export default class DragStartEventHandler extends EventHandler {
  dragEvent: DragEvent;
  setSourceDrag: SetterOrUpdater<HTMLElement>;
  constructor(
    dragEvent: DragEvent,
    setSourceDrag: SetterOrUpdater<HTMLElement>
  ) {
    super();
    this.dragEvent = dragEvent;
    this.setSourceDrag = setSourceDrag;
  }

  handle() {
    this.setSourceDrag(this.dragEvent.target as HTMLElement);
  }
}
