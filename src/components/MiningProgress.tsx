import { useEffect, useState } from "react";

export const MiningProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md bg-gray-300 dark:bg-gray-700 h-4 rounded overflow-hidden">
      <div
        className="h-full bg-green-500 transition-all"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};