import { SetterOrUpdater } from "recoil";
import DropEventHandler from ".";

export default class FoundationDropEventHandler extends DropEventHandler {
  setFoundation: SetterOrUpdater<void>;
  constructor(dragEvent: DragEvent, setFoundation: SetterOrUpdater<void>) {
    super(dragEvent);
    this.setFoundation = setFoundation;
  }

  handle(): void {
    this.setFoundation();
  }
}
