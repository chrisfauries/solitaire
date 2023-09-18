import { EventHandler } from "../eventHandler";

export default class DragOverEventHandler extends EventHandler {
    dragEvent: DragEvent;
    constructor(dragEvent: DragEvent) {
        super();
        this.dragEvent = dragEvent;
    }

    handle() {
        this.dragEvent.preventDefault();
    }
}
