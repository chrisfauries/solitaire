import { SetterOrUpdater } from "recoil";
import DragStartEventHandler from ".";

export default class DepotCardDragStartEventHandler extends DragStartEventHandler {
  constructor(
    dragEvent: DragEvent,
    setSourceDrag: SetterOrUpdater<HTMLElement>
  ) {
    super(dragEvent, setSourceDrag);
  }
}
