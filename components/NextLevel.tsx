import { ComponentProps } from "react";

import useGameStateContext from "~hooks/useGameStateContext";

import Button from "./Button";

type Props = ComponentProps<typeof Button>;

export default function NextLevel({ className, ...props }: Props) {
  const { canSubmit, evaluating, evaluateLevel } = useGameStateContext();
  return (
    <Button
      {...props}
      disabled={!canSubmit || evaluating}
      onClick={evaluateLevel}
    >
      Evaluar respuesta
    </Button>
  );
}
