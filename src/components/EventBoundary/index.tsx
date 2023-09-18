import React, { PropsWithChildren, useMemo } from "react";
import useDocumentEvent from "../../hooks/useDocumentEvents";
import controller from "../../events/controller";
import foundation from "../../state/foundation";
import stockState from "../../state/stock";
import dragState from "../../state/drag";
import { useSetRecoilState } from "recoil";
import deckState from "../../state/deck";

const EventBoundary: React.FC<PropsWithChildren> = ({ children }) => {
  const setFoundationState = useSetRecoilState(foundation.set);
  const advanceStock = useSetRecoilState(stockState.advance);
  const setSourceDrag = useSetRecoilState(dragState.source);
  const setDestinationDrag = useSetRecoilState(dragState.destination);
  const clearDestinationDrag = useSetRecoilState(dragState.clearDestination);
  const clearDrag = useSetRecoilState(dragState.clear);
  const removeCard = useSetRecoilState(deckState.remove);

  const handler = useMemo(
    () =>
      controller(
        setFoundationState,
        advanceStock,
        setSourceDrag,
        setDestinationDrag,
        clearDestinationDrag,
        clearDrag,
        removeCard
      ),
    [
      setFoundationState,
      advanceStock,
      setSourceDrag,
      setDestinationDrag,
      clearDestinationDrag,
      clearDrag,
      removeCard,
    ]
  );

  useDocumentEvent("dragstart", handler);
  useDocumentEvent("dragover", handler);
  useDocumentEvent("dragenter", handler);
  useDocumentEvent("dragleave", handler);
  useDocumentEvent("drop", handler);
  useDocumentEvent("dragend", handler);
  useDocumentEvent("click", handler);
  return <>{children}</>;
};

export default EventBoundary;
