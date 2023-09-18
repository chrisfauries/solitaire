import { SetterOrUpdater } from "recoil";
import { DragEndEventHandler } from ".";

export default class CardDragEndEventHandler extends DragEndEventHandler {
    constructor(dragEvent: DragEvent, clearDrag: SetterOrUpdater<void>) {
        super(dragEvent, clearDrag);
    }

    handle() {
        super.handle();
    }
}