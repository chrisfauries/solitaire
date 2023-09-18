import { SetterOrUpdater } from "recoil";
import DragEnterEventHandler from ".";

export default class FoundationDragEnterEventHandler extends DragEnterEventHandler {
  constructor(
    dragEvent: DragEvent,
    setDestinationDrag: SetterOrUpdater<HTMLElement>
  ) {
    super(dragEvent, setDestinationDrag);
  }
}
