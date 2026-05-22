import { createContext } from "react";

interface FpsCtx {
  registerInnerScroll: (handler: (delta: number) => boolean) => void;
  unregisterInnerScroll: () => void;
}

export const FpsContext = createContext<FpsCtx>({
  registerInnerScroll: () => {},
  unregisterInnerScroll: () => {},
});
