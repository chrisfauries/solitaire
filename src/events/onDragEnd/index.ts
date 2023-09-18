import { SetterOrUpdater } from "recoil";
import { EventHandler } from "../eventHandler";

export class DragEndEventHandler extends EventHandler {
    dragEvent: DragEvent;
    clearDrag: SetterOrUpdater<void>;
    constructor(dragEvent: DragEvent, clearDrag: SetterOrUpdater<void>) {
        super();
        this.dragEvent = dragEvent;
        this.clearDrag = clearDrag;
    }

    handle() {
        this.clearDrag();
    }
}