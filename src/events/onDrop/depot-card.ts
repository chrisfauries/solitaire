import { SetterOrUpdater } from "recoil";
import DropEventHandler from ".";

export default class DepotCardDropEventHandler extends DropEventHandler {
  setDepot: SetterOrUpdater<void>;
  constructor(dragEvent: DragEvent, setDepot: SetterOrUpdater<void>) {
    super(dragEvent);
    this.setDepot = setDepot;
  }

  handle(): void {
    this.setDepot();
  }
}