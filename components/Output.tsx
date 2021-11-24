import type { ExtendedPieceType } from "~utils/levels";

import { usePlaygroundContext } from "sorting-game";

export default function Output() {
  const { targets } = usePlaygroundContext();
  return (
    <p className="flex justify-around w-full p-4 font-bold uppercase border-t-2 border-b-2 border-black bg-dark-steel">
      {targets.map(({ piece }, index) => (
        <span
          key={piece?.id || index.toString()}
          className="flex items-center justify-center flex-1"
        >
          <span
            className={`text-center px-2 py-1 ${
              piece !== null
                ? (piece as ExtendedPieceType).data.type === "acción"
                  ? "bg-mustard text-black"
                  : (piece as ExtendedPieceType).data.type === "año"
                  ? "bg-indigo text-white"
                  : (piece as ExtendedPieceType).data.type === "lugar"
                  ? "bg-gold text-white"
                  : (piece as ExtendedPieceType).data.type === "objeto"
                  ? "bg-violet text-white"
                  : "bg-purple text-white"
                : "bg-white text-black"
            }`}
          >
            {piece?.data?.text ?? "___"}
          </span>
        </span>
      ))}
    </p>
  );
}
