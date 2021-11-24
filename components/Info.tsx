import { usePlaygroundContext } from "sorting-game";

export default function Info() {
  const { level } = usePlaygroundContext();
  return (
    <>
      <h1 className="text-2xl font-bold text-center text-white">Nivel {level + 1}</h1>
      <h2 className="text-xl font-bold text-center text-white">Piezas disponibles:</h2>
    </>
  );
}
