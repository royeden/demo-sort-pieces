import type { ExtendedPieceType } from "~utils/levels";
import type { HTMLAttributes } from "react";

import GamePieceSkeleton from "./GamePieceSkeleton";

type Props = HTMLAttributes<HTMLDivElement> & { piece: ExtendedPieceType };

export default function GamePiece({ children, piece, ...props }: Props) {
  return (
    <GamePieceSkeleton
      className={`rounded ${
        piece.data.type === "acción"
          ? "bg-mustard text-black"
          : piece.data.type === "año"
          ? "bg-indigo text-white"
          : piece.data.type === "lugar"
          ? "bg-gold text-white"
          : piece.data.type === "objeto"
          ? "bg-violet text-white"
          : "bg-purple text-white"
      }`}
    >
      {children}
    </GamePieceSkeleton>
  );
}
