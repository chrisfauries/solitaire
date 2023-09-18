import { EventHandler } from "../eventHandler";

export default class DropEventHandler extends EventHandler {
  dragEvent: DragEvent;
  constructor(dragEvent: DragEvent) {
    super();
    this.dragEvent = dragEvent;
  }

  handle(): void {
      // no-op
  }
}
