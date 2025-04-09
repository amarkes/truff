import { useGame } from "../context/GameContext";

export const ResourceDisplay = () => {
  const { ores, machines } = useGame();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center gap-4">
        <div className="bg-[url('/img/stone.png')] bg-cover bg-center text-white p-4 rounded-lg w-32 h-24 flex flex-col justify-center items-center">
          <p>🪨 Pedra</p>
          <p>{ores.stone}</p>
        </div>
        <div className="bg-[url('/img/gold.png')] bg-cover bg-center text-white p-4 rounded-lg w-32 h-24 flex flex-col justify-center items-center">
          <p>🥇 Ouro</p>
          <p>{ores.gold}</p>
        </div>
        <div className="bg-[url('/img/diamond.png')] bg-cover bg-center text-white p-4 rounded-lg w-32 h-24 flex flex-col justify-center items-center">
          <p>💎 Diamante</p>
          <p>{ores.diamond}</p>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <div className="bg-gray-700 text-white p-4 rounded-lg w-32 h-24 flex flex-col justify-center items-center">
          <p>⚙️ Pedra</p>
          <p>{machines.stoneMiner}</p>
        </div>
        <div className="bg-yellow-700 text-white p-4 rounded-lg w-32 h-24 flex flex-col justify-center items-center">
          <p>⚙️ Ouro</p>
          <p>{machines.goldMiner}</p>
        </div>
        <div className="bg-blue-900 text-white p-4 rounded-lg w-32 h-24 flex flex-col justify-center items-center">
          <p>⚙️ Diamante</p>
          <p>{machines.diamondMiner}</p>
        </div>
      </div>
    </div>
  );
};