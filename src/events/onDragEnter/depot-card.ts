import { SetterOrUpdater } from "recoil";
import DragEnterEventHandler from ".";
import { Attribute } from "../../data/utils";

export default class DepotCardDragEnterEventHandler extends DragEnterEventHandler {
  constructor(
    dragEvent: DragEvent,
    setDestinationDrag: SetterOrUpdater<HTMLElement>
  ) {
    super(dragEvent, setDestinationDrag);
  }

  handle(): void {
    Attribute.getIsDropable(this.dragEvent.target) && super.handle();
  }
}
