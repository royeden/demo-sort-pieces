import useGameStateContext from "~hooks/useGameStateContext";

import Button from "./Button";
import Modal from "./Modal";

export default function Presentation() {
  const { canPlay, lost, won, play } = useGameStateContext();

  return (
    <Modal visible={!(canPlay || lost || won)}>
      <h1 className="text-2xl font-bold text-center">¡Bienvenidx a la máquina del tiempo!</h1>
      <p className="font-bold text-center">
        Arrastrá los bloques correctamente para formar el hecho histórico.
      </p>
      <p className="font-bold text-center">
        Una vez que lo hagas, evaluá tu respuesta para validar si es correcta.
        Si es correcta, avanzás de nivel. Si fallás, vas a tener que empezar de
        vuelta.
      </p>
      <div className="flex justify-center mt-4">
        <Button onClick={play}>Comenzar</Button>
      </div>
    </Modal>
  );
}
