import React, { PropsWithChildren, useMemo } from "react";
import useDocumentEvent from "../../hooks/useDocumentEvents";
import controller from "../../events/controller";
import foundation from "../../state/foundation";
import { useSetRecoilState } from "recoil";

const EventBoundary: React.FC<PropsWithChildren> = ({ children }) => {
  const setFoundationState = useSetRecoilState(foundation.set);

  const handler = useMemo(
    () => controller(setFoundationState),
    [setFoundationState]
  );

  useDocumentEvent("dragstart", handler);
  useDocumentEvent("click", handler);
  useDocumentEvent("drop", handler);
  useDocumentEvent("dragover", handler);
  return <>{children}</>;
};

export default EventBoundary;
