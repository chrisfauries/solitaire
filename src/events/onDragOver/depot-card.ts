import DragOverEventHandler from ".";
import { Attribute } from "../../data/utils";

export default class DepotCardDragOverEventHandler extends DragOverEventHandler {
  constructor(dragEvent: DragEvent) {
    super(dragEvent);
  }

  handle(): void {
    Attribute.getIsDropable(this.dragEvent.target) && super.handle();
  }
}
