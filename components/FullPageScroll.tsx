"use client";

import { useState, useEffect, useRef, Children, ReactNode, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FpsContext } from "@/lib/FpsContext";

const DURATION = 1.4;
const ease = [0.76, 0, 0.24, 1] as const;

interface Props {
  children: ReactNode | ReactNode[];
  onComplete?: () => void;
}

export default function FullPageScroll({ children, onComplete }: Props) {
  const sections = Children.toArray(children);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const currentRef = useRef(0);
  const locked = useRef(false);
  const innerScrollHandler = useRef<((delta: number) => boolean) | null>(null);
  const completed = useRef(false);

  const navigate = (next: number) => {
    if (locked.current || next < 0 || next >= sections.length) return;
    locked.current = true;
    const dir = next > currentRef.current ? 1 : -1;
    currentRef.current = next;
    setDirection(dir);
    setCurrent(next);
    setTimeout(() => { locked.current = false; }, DURATION * 1000 + 100);
  };

  const registerInnerScroll = useCallback((handler: (delta: number) => boolean) => {
    innerScrollHandler.current = handler;
  }, []);

  const unregisterInnerScroll = useCallback(() => {
    innerScrollHandler.current = null;
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const finish = () => {
      if (completed.current) return;
      completed.current = true;
      document.body.style.overflow = "";
      onComplete?.();
    };

    const onWheel = (e: WheelEvent) => {
      if (completed.current) return;
      e.preventDefault();
      if (locked.current) return;

      if (currentRef.current === sections.length - 1) {
        if (innerScrollHandler.current) {
          const handled = innerScrollHandler.current(e.deltaY);
          if (handled) return;
        }
        if (e.deltaY > 0) { finish(); return; }
        navigate(currentRef.current - 1);
        return;
      }

      navigate(e.deltaY > 0 ? currentRef.current + 1 : currentRef.current - 1);
    };

    const onKey = (e: KeyboardEvent) => {
      const isDown = e.key === "ArrowDown" || e.key === "PageDown";
      const isUp   = e.key === "ArrowUp"   || e.key === "PageUp";
      if (!isDown && !isUp) return;

      if (currentRef.current === sections.length - 1 && innerScrollHandler.current) {
        const handled = innerScrollHandler.current(isDown ? 200 : -200);
        if (!handled) {
          if (isDown) finish();
          else navigate(currentRef.current - 1);
        }
      } else {
        navigate(isDown ? currentRef.current + 1 : currentRef.current - 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, [sections.length, onComplete]);

  const variants = {
    enter:  (dir: number) => ({ x: `${dir * 100}%`  }),
    center:                  ({ x: "0%"              }),
    exit:   (dir: number) => ({ x: `${dir * -100}%` }),
  };

  return (
    <FpsContext.Provider value={{ registerInnerScroll, unregisterInnerScroll }}>
      <div className="relative h-screen w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: DURATION, ease }}
            className="absolute inset-0"
          >
            {sections[current]}
          </motion.div>
        </AnimatePresence>
      </div>
    </FpsContext.Provider>
  );
}
