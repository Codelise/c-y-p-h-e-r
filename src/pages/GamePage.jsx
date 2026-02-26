import { useState } from "react";
import GameStatus from "../components/GameStatus";
import QuizRenderBox from "../components/QuizRenderBox";

export default function GamePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0b0b18] text-slate-200 overflow-hidden font-inter">
      <main
        className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-20" : "ml-64"} p-8 flex flex-col xl:flex-row gap-8`}
      >
        {/* Left Column: Game Area */}
        <div className="flex-1 flex flex-col gap-8">
          <GameStatus />
          {/* Center Area: Challenge Box */}
          <QuizRenderBox />
        </div>

        {/* Right Column: Leaderboard / Info  SA SUSUNOD NA YAN} */}
      </main>
    </div>
  );
}
