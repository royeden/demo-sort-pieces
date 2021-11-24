import type { PropsWithChildren } from "react";
import {} from "sorting-game";
import { createContext, useEffect, useRef, useState } from "react";
import { usePlaygroundContext } from "sorting-game";

type Status = {
  canPlay: boolean;
  evaluating: boolean;
  lost: boolean;
  won: boolean;
};

export type GameStateContextType = Status & {
  canSubmit: boolean;
  evaluateLevel: () => void;
  play: () => void;
  reset: () => void;
};

export const GameStateContext = createContext<GameStateContextType>(null!);

export default function GameStateProvider({ children }: PropsWithChildren<{}>) {
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const { dispatch, level, levels, targets } = usePlaygroundContext();
  const [{ canPlay, evaluating, lost, won }, setStatus] = useState<Status>({
    canPlay: false,
    evaluating: false,
    won: false,
    lost: false,
  });

  const canSubmit = targets.every(({ piece }) => !!piece);
  const lastLevel = level === levels.length - 1;

  const reset = () => {
    setStatus({ canPlay: true, lost: false, won: false, evaluating: false });
    dispatch({ type: "SET_LEVEL", payload: { level: 0 } });
  };
  const play = () => {
    setStatus((prevStatus) => ({ ...prevStatus, canPlay: true }));
  };

  const evaluateLevel = async () => {
    if (canSubmit && !evaluating) {
      setStatus((prevStatus) => ({ ...prevStatus, evaluating: true }));
      const hasWon = levels[level].winstate.reduce((won, { id }, index) => {
        return won && id === targets[index].piece.id;
      }, true);
      await new Promise(
        (resolve) =>
          (timeoutRef.current = setTimeout(resolve, 2500 + Math.random() * 100))
      );
      setStatus((prevStatus) => ({ ...prevStatus, evaluating: false }));
      if (hasWon) {
        if (lastLevel)
          setStatus((prevStatus) => ({ ...prevStatus, won: true }));
        else dispatch({ type: "SET_LEVEL", payload: { level: level + 1 } });
      } else setStatus((prevStatus) => ({ ...prevStatus, lost: true }));
    }
  };

  useEffect(() => {
    const timeout = timeoutRef.current;
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <GameStateContext.Provider
      value={{
        canPlay,
        canSubmit,
        evaluating,
        evaluateLevel,
        lost,
        play,
        reset,
        won,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
}
