import { createContext } from "react";

interface FpsCtx {
  registerInnerScroll: (handler: (delta: number) => boolean) => void;
  unregisterInnerScroll: () => void;
  prevIndex: number;
}

export const FpsContext = createContext<FpsCtx>({
  registerInnerScroll: () => {},
  unregisterInnerScroll: () => {},
  prevIndex: 0,
});
