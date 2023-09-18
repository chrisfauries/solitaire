import { EventHandler } from "../eventHandler";

export default class ClickEventHandler extends EventHandler {
  mouseEvent: MouseEvent;
  constructor(mouseEvent: MouseEvent) {
    super();
    this.mouseEvent = mouseEvent;
  }

  handle() {
    // no-op
  }
}
