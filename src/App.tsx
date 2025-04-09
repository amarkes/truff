import { GameProvider } from "./context/GameContext";
import { ClickButton } from "./components/ClickButton";
import { ResourceDisplay } from "./components/ResourceDisplay";
import { Store } from "./components/Store";
import { MiningProgress } from "./components/MiningProgress";

function App() {
  return (
    <GameProvider>
      <div className="justify-center content-center flex">
        <main className="w-5/12 flex flex-col min-h-screen p-4 bg-gray-100 dark:bg-zinc-900 text-black dark:text-white transition-all">
          <h1 className="text-4xl font-bold text-center mb-6">
            🪨 Truff Miner
          </h1>
          <div className="flex flex-1 gap-6">
            <div className="flex flex-col gap-6 flex-1">
              <ClickButton />
              <MiningProgress />
              <ResourceDisplay />
            </div>
            <Store />
          </div>
        </main>
      </div>
    </GameProvider>
  );
}

export default App;
