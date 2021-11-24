import { GameStateContext } from "~components/context/GameState";
import { useContext } from "react";

export default function useGameStateContext() {
  return useContext(GameStateContext);
}
