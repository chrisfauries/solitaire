import { SetterOrUpdater } from "recoil";

export default class DragEnterEventHandler {
  dragEvent: DragEvent;
  setDestinationDrag: SetterOrUpdater<HTMLElement>;

  constructor(
    dragEvent: DragEvent,
    setDestinationDrag: SetterOrUpdater<HTMLElement>
  ) {
    this.dragEvent = dragEvent;
    this.setDestinationDrag = setDestinationDrag;
  }

  handle() {
    this.setDestinationDrag(this.dragEvent.target as HTMLElement);
  }
}
