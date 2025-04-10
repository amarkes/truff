import { createContext, useContext, useEffect, useState } from "react";

export type OreType = "stone" | "gold" | "diamond";
export type MachineType = "stoneMiner" | "goldMiner" | "diamondMiner";

type GameContextType = {
  ores: Record<OreType, number>;
  money: number;
  mine: () => void;
  sell: () => void;
  machines: Record<MachineType, number>;
  buyMachine: (type: MachineType) => void;
  buyMachineMultiple: (type: MachineType, qtd: number) => void;
  upgradeLevel: number;
  upgrade: () => void;
  upgradeMultiple: () => void;
};

const GameContext = createContext({} as GameContextType);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [ores, setOres] = useState<Record<OreType, number>>({
    stone: 0,
    gold: 0,
    diamond: 0,
  });

  const [money, setMoney] = useState(0);
  const [upgradeLevel, setUpgradeLevel] = useState(1);

  const [machines, setMachines] = useState<Record<MachineType, number>>({
    stoneMiner: 0,
    goldMiner: 0,
    diamondMiner: 0,
  });

  const mine = () => {
    const rng = Math.random();
    if (rng < 0.7) {
      setOres((prev) => ({ ...prev, stone: prev.stone + 1 }));
    } else if (rng < 0.95) {
      setOres((prev) => ({ ...prev, gold: prev.gold + 1 }));
    } else {
      setOres((prev) => ({ ...prev, diamond: prev.diamond + 1 }));
    }
  };

  const sell = () => {
    const total =
      (ores.stone * 2 + ores.gold * 10 + ores.diamond * 50) * (upgradeLevel / 2);
    setMoney((prev) => prev + total);
    setOres({ stone: 0, gold: 0, diamond: 0 });
  };

  const buyMachine = (type: MachineType) => {
    console.log(machines[type])
    const baseCosts = {
      stoneMiner: 50 * (machines[type] * machines[type]),
      goldMiner: 150 * (machines[type] * machines[type]),
      diamondMiner: 500 * (machines[type] * machines[type]),
    };
    const cost = baseCosts[type];
    if (money >= cost) {
      setMoney((prev) => prev - cost);
      setMachines((prev) => ({ ...prev, [type]: prev[type] + 1 }));
    }
  };

  const buyMachineMultiple = (type: MachineType, qtd: number) => {
    const baseCosts = {
      stoneMiner: 50 * (machines[type] * machines[type]),
      goldMiner: 150 * (machines[type] * machines[type]),
      diamondMiner: 500 * (machines[type] * machines[type]),
    };

    const cost = baseCosts[type] * qtd;
    if (money >= cost) {
      setMoney((prev) => prev - cost);
      setMachines((prev) => ({ ...prev, [type]: prev[type] + qtd}));
    }
  };

  const upgrade = () => {
    const cost = (upgradeLevel * upgradeLevel) * 100;
    if (money >= cost) {
      setMoney((prev) => prev - cost);
      setUpgradeLevel((prev) => prev + 1);
    }
  };
  const upgradeMultiple = () => {
    const cost = ((upgradeLevel * upgradeLevel) * 100) * 10;
    if (money >= cost) {
      setMoney((prev) => prev - cost);
      setUpgradeLevel((prev) => prev + 10);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setOres((prev) => ({
        stone: prev.stone + machines.stoneMiner,
        gold: prev.gold + machines.goldMiner,
        diamond: prev.diamond + machines.diamondMiner,
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, [machines]);

  return (
    <GameContext.Provider
      value={{ ores, money, mine, sell, machines, buyMachine, upgradeLevel, upgrade, buyMachineMultiple, upgradeMultiple }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);