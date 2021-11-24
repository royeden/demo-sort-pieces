import type { LevelType, PieceType } from "sorting-game";
import { arrayShuffle } from "sorting-game";

import { capitalize } from "./strings";

export type GamePieceType = "personaje" | "acción" | "año" | "objeto" | "lugar";

export type GamePiece = {
  id: string;
  type: string;
};

export type LevelResponse = {
  levels: GamePiece[][];
  fakes: GamePiece[];
};

export type ExtendedPieceType = Omit<PieceType, "data"> & {
  data: { text: string; type: GamePieceType };
};

export type ExtendedLevelType = {
  pieces: ExtendedPieceType[];
  winstate: ExtendedPieceType[];
};

export function buildLevels(
  levelsResponse: LevelResponse
): ExtendedLevelType[] {
  const { fakes, levels } = levelsResponse;
  const levelList: ExtendedLevelType[] = levels.map((level, index) => {
    let pieces = level.map(({ id, type }) => ({
      id,
      name: `(${capitalize(type)}) ${id
        .split("-")
        .map((s) => capitalize(s))
        .join(" ")}`,
      data: {
        text: id.replace(/-/g, " "),
        type: type as GamePieceType,
      },
    }));
    const winstate = pieces.slice(0);

    if (index > 2) {
      pieces = pieces.concat(
        arrayShuffle(
          fakes.map(({ id, type }) => ({
            id,
            name: `(${capitalize(type)}) ${id
              .split("-")
              .map((s) => capitalize(s))
              .join(" ")}`,
            data: {
              text: id.replace(/-/g, " "),
              type: type as GamePieceType,
            },
          }))
        ).slice(0, Math.floor(index / 3))
      );
    }

    return { pieces, winstate };
  });

  return levelList;
}
