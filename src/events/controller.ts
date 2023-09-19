import { SetterOrUpdater } from "recoil";
import { DataType } from "../data/constants";
import { tryGetDataType } from "../data/utils";
import { EventHandler } from "./eventHandler";
import CardClickEventHandler from "./onClick/card";
import StockClickEventHandler from "./onClick/stock";
import CardDragEndEventHandler from "./onDragEnd/card";
import WaistDragEndEventHandler from "./onDragEnd/waist";
import FoundationDragEnterEventHandler from "./onDragEnter/foundation";
import FoundationDragLeaveEventHandler from "./onDragLeave/foundation";
import FoundationDragOverEventHandler from "./onDragOver/foundation";
import CardDragStartEventHandler from "./onDragStart/card";
import WaistDragStartEventHandler from "./onDragStart/waist";
import FoundationDropEventHandler from "./onDrop/foundation";

type HandlerMap = {
  [eventType in keyof DocumentEventMap]: Partial<{
    [type in DataType]: (e: DocumentEventMap[eventType]) => EventHandler;
  }>;
};

const getHandlerMap = (
  setFoundation: SetterOrUpdater<void>,
  advanceStock: SetterOrUpdater<void>,
  setSourceDrag: SetterOrUpdater<HTMLElement>,
  setDestinationDrag: SetterOrUpdater<HTMLElement>,
  clearDestinationDrag: SetterOrUpdater<void>,
  clearDrag: SetterOrUpdater<void>,
  removeCard: SetterOrUpdater<void>
): Partial<HandlerMap> => ({
  dragstart: {
    [DataType.CARD]: (dragEvent) =>
      new CardDragStartEventHandler(dragEvent, setSourceDrag),
    [DataType.WAIST]: (dragEvent) =>
      new WaistDragStartEventHandler(dragEvent, setSourceDrag),
  },
  dragover: {
    [DataType.FOUNDATION]: (dragEvent) =>
      new FoundationDragOverEventHandler(dragEvent),
  },
  dragenter: {
    [DataType.FOUNDATION]: (dragEvent) =>
      new FoundationDragEnterEventHandler(dragEvent, setDestinationDrag),
  },
  dragleave: {
    [DataType.FOUNDATION]: (dragEvent) =>
      new FoundationDragLeaveEventHandler(dragEvent, clearDestinationDrag),
  },
  drop: {
    [DataType.FOUNDATION]: (dragEvent) =>
      new FoundationDropEventHandler(dragEvent, setFoundation),
  },
  dragend: {
    [DataType.WAIST]: (dragEvent) =>
      new WaistDragEndEventHandler(dragEvent, clearDrag, removeCard),
    [DataType.CARD]: (dragEvent) =>
      new CardDragEndEventHandler(dragEvent, clearDrag),
  },
  click: {
    [DataType.CARD]: (mouseEvent) => new CardClickEventHandler(mouseEvent),
    [DataType.STOCK]: (mouseEvent) =>
      new StockClickEventHandler(mouseEvent, advanceStock),
  },
});

const controller =
  <K extends keyof DocumentEventMap>(
    setFoundation: SetterOrUpdater<void>,
    advanceStock: SetterOrUpdater<void>,
    setSourceDrag: SetterOrUpdater<HTMLElement>,
    setDestinationDrag: SetterOrUpdater<HTMLElement>,
    clearDestinationDrag: SetterOrUpdater<void>,
    clearDrag: SetterOrUpdater<void>,
    removeCard: SetterOrUpdater<void>
  ) =>
  (e: DocumentEventMap[K], type: K) => {
    const dataType = tryGetDataType(e.target as Element);

    if (dataType === null) {
      return;
    }

    getHandlerMap(
      setFoundation,
      advanceStock,
      setSourceDrag,
      setDestinationDrag,
      clearDestinationDrag,
      clearDrag,
      removeCard
    )
      [type]?.[dataType]?.(e)
      ?.handle();
  };

export default controller;
