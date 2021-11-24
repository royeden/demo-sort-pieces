import type { ExtendedPieceType } from "~utils/levels";
import type { HTMLAttributes } from "react";
import { usePlaygroundContext } from "sorting-game";

import GamePieceSkeleton from "./GamePieceSkeleton";

type Props = HTMLAttributes<HTMLDivElement> & { index: number };

export default function GamePieceContainer({
  children,
  index,
  ...props
}: Props) {
  const { level, levels } = usePlaygroundContext();
  const winPieceType = (levels[level].winstate[index] as ExtendedPieceType).data
    .type;

  return (
    <GamePieceSkeleton
      className={`rounded bg-opacity-25 ${
        winPieceType === "acción"
          ? "bg-mustard text-black"
          : winPieceType === "año"
          ? "bg-indigo text-white"
          : winPieceType === "lugar"
          ? "bg-gold text-white"
          : winPieceType === "objeto"
          ? "bg-violet text-white"
          : "bg-purple text-white"
      }`}
      {...props}
    >
      {children}
    </GamePieceSkeleton>
  );
}
