import { SetterOrUpdater } from "recoil";
import DragStartEventHandler from ".";

export default class CardDragStartEventHandler extends DragStartEventHandler {
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
