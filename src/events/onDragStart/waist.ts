import { SetterOrUpdater } from "recoil";
import DragStartEventHandler from ".";

export default class WaistDragStartEventHandler extends DragStartEventHandler {
  constructor(
    dragEvent: DragEvent,
    setSourceDrag: SetterOrUpdater<HTMLElement>
  ) {
    super(dragEvent, setSourceDrag);
  }

  handle(): void {
    super.handle();
  }
}