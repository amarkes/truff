import { useGame } from "../context/GameContext";

export const Store = () => {
  const { sell, buyMachine, upgrade, machines, upgradeLevel, money } = useGame();
  const minerCosts = {
    stoneMiner: 50 + machines.stoneMiner * 50,
    goldMiner: 150 + machines.goldMiner * 50,
    diamondMiner: 500 + machines.diamondMiner * 50,
  };
  const upgradeCost = upgradeLevel * 100;

  return (
    <div className="flex flex-col gap-4 items-end">
      <p className="text-sm text-right">Dinheiro: ${money}</p>
      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded" onClick={sell}>
        Vender minérios
      </button>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded" onClick={() => buyMachine("stoneMiner")}>Comprar máquina de pedra({machines.stoneMiner}) (${minerCosts.stoneMiner})</button>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded" onClick={() => buyMachine("goldMiner")}>Comprar máquina de ouro({machines.goldMiner}) (${minerCosts.goldMiner})</button>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded" onClick={() => buyMachine("diamondMiner")}>Comprar máquina de diamante({machines.diamondMiner}) (${minerCosts.diamondMiner})</button>
      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded" onClick={upgrade}>Upgrade de venda (${upgradeCost})</button>
    </div>
  );
};