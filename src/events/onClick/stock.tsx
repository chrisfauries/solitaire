import { SetterOrUpdater } from "recoil";
import ClickEventHandler from ".";

export default class StockClickEventHandler extends ClickEventHandler {
  advanceStock: SetterOrUpdater<void>;
  constructor(mouseEvent: MouseEvent, advanceStock: SetterOrUpdater<void>) {
    super(mouseEvent);
    this.advanceStock = advanceStock;
  }

  handle() {
    this.advanceStock();
  }
}
