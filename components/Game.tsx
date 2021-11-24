import { PlaygroundProvider, PiecesContainer, Targets } from "sorting-game";

import type { ExtendedPieceType } from "~utils/levels";
import type { LevelType } from "sorting-game";

import BoltedNut from "./Svg/BoltedNut";
import Compass from "./Compass";
import GamePiece from "./GamePiece";
import GamePieceContainer from "./GamePieceContainer";
import GameStateProvider from "./context/GameState";
import Info from "./Info";
import NextLevel from "./NextLevel";
import Output from "./Output";
import Presentation from "./Presentation";
import LoseModal from "./LoseModal";
import WinModal from "./WinModal";

type Props = {
  levels: LevelType[];
};

export default function Game({ levels }: Props) {
  return (
    <PlaygroundProvider
      className="flex flex-col max-h-full space-y-8"
      levels={levels}
    >
      <GameStateProvider>
        <Presentation />
        <LoseModal />
        <WinModal />
        <div className="flex flex-col items-center py-4 space-y-4 rounded-lg bg-dark-steel">
          <Info />
          <PiecesContainer
            component={(props) => (
              <GamePiece piece={props.piece as ExtendedPieceType} />
            )}
            className="z-20 flex flex-wrap items-center justify-around w-full"
          />
        </div>
        <div className="relative z-10 flex items-start justify-center w-full max-h-full p-4 bg-dark-steel rounded-2xl sm:p-8 md:p-16">
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 pointer-events-none">
            <div className="flex items-center self-start justify-center w-6 h-6 col-span-1 row-span-1 sm:h-10 sm:w-10 md:w-20 md:h-20 justify-self-start">
              <BoltedNut height="100%" width="100%" />
            </div>
            <div className="flex items-center justify-center w-6 h-6 col-span-1 row-span-1 sm:h-10 sm:w-10 md:w-20 md:h-20 justify-self-end">
              <BoltedNut height="100%" width="100%" />
            </div>
            <div className="flex items-center self-end justify-center w-6 h-6 col-span-1 row-span-1 sm:h-10 sm:w-10 md:w-20 md:h-20 justify-self-start">
              <BoltedNut height="100%" width="100%" />
            </div>
            <div className="flex items-center self-end justify-center w-6 h-6 col-span-1 row-span-1 sm:h-10 sm:w-10 md:w-20 md:h-20 justify-self-end">
              <BoltedNut height="100%" width="100%" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full border-4 border-black divide-y-4 divide-black">
            <Targets
              component={(props) => (
                <GamePiece piece={props.piece as ExtendedPieceType} />
              )}
              wrapper={({ children, index }) => (
                <GamePieceContainer index={index}>
                  {children}
                </GamePieceContainer>
              )}
              className="flex flex-wrap items-center justify-around w-full h-full p-4 bg-steel"
            />
            <Output />
            <div className="flex flex-col items-center justify-center w-full py-4 space-y-4 bg-blue-steel">
              <Compass />
              <NextLevel />
            </div>
          </div>
        </div>
      </GameStateProvider>
    </PlaygroundProvider>
  );
}
