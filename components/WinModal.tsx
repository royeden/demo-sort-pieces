import useGameStateContext from "~hooks/useGameStateContext";

import Button from "./Button";
import Modal from "./Modal";

export default function WinModal() {
  const { reset, won } = useGameStateContext();

  return (
    <Modal visible={won}>
      <h1 className="text-2xl">Ganaste</h1>
      <h2 className="font-bold text-center">¡Felicitaciones!</h2>
      <div className="flex justify-center mt-4">
        <Button onClick={reset}>Volver a jugar</Button>
      </div>
    </Modal>
  );
}
