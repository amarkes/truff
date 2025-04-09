import { useGame } from "../context/GameContext";

export const Store = () => {
  const { sell, buyMachine, upgrade, machines, upgradeLevel, money, buyMachineMultiple, upgradeMultiple } =
    useGame();
  const minerCosts = {
    stoneMiner:  (machines.stoneMiner * machines.stoneMiner) * 50,
    goldMiner: (machines.goldMiner * machines.goldMiner) * 150,
    diamondMiner: (machines.diamondMiner * machines.diamondMiner) * 500,
  };
  const upgradeCost = (upgradeLevel * upgradeLevel) * 100;

  return (
    <div className="flex flex-col gap-4 items-end">
      <p className="text-sm text-right">Dinheiro: ${money}</p>
      <button
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-xs cursor-pointer"
        onClick={sell}
      >
        Vender minérios
      </button>
      <div className="w-full flex gap-2">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-xs w-full cursor-pointer"
          onClick={() => buyMachine("stoneMiner")}
        >
          Comprar máquina de pedra({machines.stoneMiner}) ($
          {minerCosts.stoneMiner})
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-xs cursor-pointer"
          onClick={() => buyMachineMultiple("stoneMiner", 10)}
        >
          + 10
        </button>
      </div>
      <div className="w-full flex gap-2">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-xs w-full cursor-pointer"
          onClick={() => buyMachine("goldMiner")}
        >
          Comprar máquina de ouro({machines.goldMiner}) (${minerCosts.goldMiner}
          )
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-xs cursor-pointer"
          onClick={() => buyMachineMultiple("goldMiner", 10)}
        >
          + 10
        </button>
      </div>
      <div className="w-full flex gap-2">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-xs w-full cursor-pointer"
          onClick={() => buyMachine("diamondMiner")}
        >
          Comprar máquina de diamante({machines.diamondMiner}) ($
          {minerCosts.diamondMiner})
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-xs cursor-pointer"
          onClick={() => buyMachineMultiple("diamondMiner", 10)}
        >
          + 10
        </button>
      </div>
      <div className="w-full flex gap-2">
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-xs w-full cursor-pointer"
          onClick={upgrade}
        >
          Upgrade de venda({upgradeLevel}) (${upgradeCost})
        </button>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-xs cursor-pointer"
          onClick={upgradeMultiple}
        >
          + 10
        </button>
      </div>
    </div>
  );
};
