import useGameStateContext from "~hooks/useGameStateContext";

import Button from "./Button";
import Modal from "./Modal";

export default function LoseModal() {
  const { reset, lost } = useGameStateContext();

  return (
    <Modal visible={lost}>
      <h1 className="text-2xl">Perdiste</h1>
      <h2 className="font-bold text-center">:(</h2>
      <div className="flex justify-center mt-4">
        <Button onClick={reset}>Intentar de nuevo</Button>
      </div>
    </Modal>
  );
}
