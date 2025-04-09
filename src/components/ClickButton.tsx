import { motion } from "framer-motion";
import { useGame } from "../context/GameContext";

export const ClickButton = () => {
  const { mine } = useGame();

  const playSound = () => {
    const audio = new Audio("/sounds/click.mp3");
    audio.volume = 0.3;
    audio.play();
  };

  const handleClick = () => {
    playSound();
    mine();
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition"
      onClick={handleClick}
    >
      Minerar
    </motion.button>
  );
};