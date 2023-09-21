import { SetterOrUpdater } from "recoil";
import { DataType } from "../data/constants";
import { tryGetDataType } from "../data/utils";
import { EventHandler } from "./eventHandler";
import StockClickEventHandler from "./onClick/stock";
import DepotCardDragEndEventHandler from "./onDragEnd/depot-card";
import FoundationDragEndEventHandler from "./onDragEnd/foundation";
import WaistDragEndEventHandler from "./onDragEnd/waist";
import DepotCardDragEnterEventHandler from "./onDragEnter/depot-card";
import FoundationDragEnterEventHandler from "./onDragEnter/foundation";
import DepotCardDragLeaveEventHandler from "./onDragLeave/depot-card";
import FoundationDragLeaveEventHandler from "./onDragLeave/foundation";
import DepotCardDragOverEventHandler from "./onDragOver/depot-card";
import FoundationDragOverEventHandler from "./onDragOver/foundation";
import DepotCardDragStartEventHandler from "./onDragStart/depot-card";
import FoundationDragStartEventHandler from "./onDragStart/foundation";
import WaistDragStartEventHandler from "./onDragStart/waist";
import DepotCardDropEventHandler from "./onDrop/depot-card";
import FoundationDropEventHandler from "./onDrop/foundation";

type HandlerMap = {
  [eventType in keyof DocumentEventMap]: Partial<{
    [type in DataType]: (e: DocumentEventMap[eventType]) => EventHandler;
  }>;
};

const getHandlerMap = (
  setFoundation: SetterOrUpdater<void>,
  setDepot: SetterOrUpdater<void>,
  advanceStock: SetterOrUpdater<void>,
  setSourceDrag: SetterOrUpdater<HTMLElement>,
  setDestinationDrag: SetterOrUpdater<HTMLElement>,
  clearDestinationDrag: SetterOrUpdater<void>,
  clearDrag: SetterOrUpdater<void>,
  removeWaistCard: SetterOrUpdater<void>,
  removeDepotCard: SetterOrUpdater<void>,
  removeFoundationCard: SetterOrUpdater<void>

): Partial<HandlerMap> => ({
  dragstart: {
    [DataType.FOUNDATION]: (dragEvent) =>
      new FoundationDragStartEventHandler(dragEvent, setSourceDrag),
    [DataType.WAIST]: (dragEvent) =>
      new WaistDragStartEventHandler(dragEvent, setSourceDrag),
    [DataType.DEPOT_CARD]: (dragEvent) =>
      new DepotCardDragStartEventHandler(dragEvent, setSourceDrag),
  },
  dragover: {
    [DataType.FOUNDATION]: (dragEvent) =>
      new FoundationDragOverEventHandler(dragEvent),
    [DataType.DEPOT_CARD]: (dragEvent) =>
      new DepotCardDragOverEventHandler(dragEvent),
  },
  dragenter: {
    [DataType.FOUNDATION]: (dragEvent) =>
      new FoundationDragEnterEventHandler(dragEvent, setDestinationDrag),
    [DataType.DEPOT_CARD]: (dragEvent) =>
      new DepotCardDragEnterEventHandler(dragEvent, setDestinationDrag),
  },
  dragleave: {
    [DataType.FOUNDATION]: (dragEvent) =>
      new FoundationDragLeaveEventHandler(dragEvent, clearDestinationDrag),
    [DataType.DEPOT_CARD]: (dragEvent) =>
      new DepotCardDragLeaveEventHandler(dragEvent, clearDestinationDrag),
  },
  drop: {
    [DataType.FOUNDATION]: (dragEvent) =>
      new FoundationDropEventHandler(dragEvent, setFoundation),
    [DataType.DEPOT_CARD]: (dragEvent) =>
      new DepotCardDropEventHandler(dragEvent, setDepot),
  },
  dragend: {
    [DataType.FOUNDATION]: (dragEvent) =>
      new FoundationDragEndEventHandler(dragEvent, clearDrag, removeFoundationCard),
    [DataType.WAIST]: (dragEvent) =>
      new WaistDragEndEventHandler(dragEvent, clearDrag, removeWaistCard),
    [DataType.DEPOT_CARD]: (dragEvent) =>
      new DepotCardDragEndEventHandler(dragEvent, clearDrag, removeDepotCard),
  },
  click: {
    [DataType.STOCK]: (mouseEvent) =>
      new StockClickEventHandler(mouseEvent, advanceStock),
  },
});

const controller =
  <K extends keyof DocumentEventMap>(
    setFoundation: SetterOrUpdater<void>,
    setDepot: SetterOrUpdater<void>,
    advanceStock: SetterOrUpdater<void>,
    setSourceDrag: SetterOrUpdater<HTMLElement>,
    setDestinationDrag: SetterOrUpdater<HTMLElement>,
    clearDestinationDrag: SetterOrUpdater<void>,
    clearDrag: SetterOrUpdater<void>,
    removeWaistCard: SetterOrUpdater<void>,
    removeDepotCard: SetterOrUpdater<void>,
    removeFoundationCard: SetterOrUpdater<void>,
    
  ) =>
  (e: DocumentEventMap[K], type: K) => {
    const dataType = tryGetDataType(e.target as Element);

    if (dataType === null) {
      return;
    }

    getHandlerMap(
      setFoundation,
      setDepot,
      advanceStock,
      setSourceDrag,
      setDestinationDrag,
      clearDestinationDrag,
      clearDrag,
      removeWaistCard,
      removeDepotCard,
      removeFoundationCard
    )
      [type]?.[dataType]?.(e)
      ?.handle();
  };

export default controller;
