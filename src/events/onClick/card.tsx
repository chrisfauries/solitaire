import ClickEventHandler from ".";

export default class CardClickEventHandler extends ClickEventHandler {
  constructor(mouseEvent: MouseEvent) {
    super(mouseEvent);
  }

  handle(): void {
    // no-op
  }
}
