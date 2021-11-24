import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export default function GamePieceSkeleton({
  children,
  className,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={
        (className ? `${className} ` : "") +
        "h-8 w-8 sm:h-16 sm:w-16 md:h-24 md:w-24"
      }
    >
      {children}
    </div>
  );
}
