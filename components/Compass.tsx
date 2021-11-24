import type { HTMLAttributes } from "react";

import useGameStateContext from "~hooks/useGameStateContext";

type Props = HTMLAttributes<HTMLDivElement>;

export default function Compass({ className, ...props }: Props) {
  const { evaluating } = useGameStateContext();
  return (
    <div
      className={`${
        className || ""
      } flex flex-col items-center justify-center rounded-full border-8 border-[#232830] bg-steel h-56 w-56 md:h-60 md:w-60 lg:h-80 lg:w-80 ${
        evaluating && "animate-spin"
      }`}
      {...props}
    >
      <span className="absolute origin-bottom transform translate-x-[10%] -translate-y-3/4 rotate-12 w-0 h-0 border-b-[4rem] border-l-[1rem] border-r-[1rem] triangle" />
      <span className="relative rounded-full h-12 w-12 bg-[#ce2525]" />
      <span className="absolute origin-top transform -translate-x-[10%] translate-y-3/4 rotate-12 w-0 h-0 border-t-[4rem] border-l-[1rem] border-r-[1rem] triangle-inverted" />
      <style jsx>{`
        .triangle {
          height: 0;
          width: 0;
          border-left-color: transparent;
          border-right-color: transparent;
          border-bottom-color: #ce2525;
        }
        .triangle-inverted {
          height: 0;
          width: 0;
          border-left-color: transparent;
          border-right-color: transparent;
          border-top-color: #ce2525;
        }
      `}</style>
    </div>
  );
}
