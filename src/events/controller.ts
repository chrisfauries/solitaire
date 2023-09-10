import { SetterOrUpdater } from "recoil";
import { DataType } from "../data/constants";
import { tryGetDataType } from "../data/utils";
import handleCardDragStart from "../events/onDragStart/card";
import { SetFoundation } from "../state/foundation";
import handleCardClick from "./onClick/card";
import handleFoundationDragOver from "./onDragOver/foundation";
import handleFoundationDrop from "./onDrop/foundation";

type HandlerMap = {
  [eventType in keyof DocumentEventMap]: Partial<{
    [type in DataType]: (e: DocumentEventMap[eventType]) => void;
  }>;
};

const getHandlerMap = (
  setFoundation: SetterOrUpdater<SetFoundation>
): Partial<HandlerMap> => ({
  dragstart: {
    [DataType.CARD]: (e) => handleCardDragStart(e),
  },
  click: {
    [DataType.CARD]: (e) => handleCardClick(e),
  },
  dragover: {
    [DataType.FOUNDATION]: (e) => handleFoundationDragOver(e),
  },
  drop: {
    [DataType.FOUNDATION]: (e) => handleFoundationDrop(e, setFoundation),
  },
});

const controller =
  <K extends keyof DocumentEventMap>(
    setFoundation: SetterOrUpdater<SetFoundation>
  ) =>
  (e: DocumentEventMap[K], type: K) => {
    const dataType = tryGetDataType(e.target as Element);

    if (dataType === null) {
      return;
    }

    getHandlerMap(setFoundation)[type]?.[dataType]?.(e);
  };

export default controller;
