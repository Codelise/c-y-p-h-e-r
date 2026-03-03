import { useState, useEffect } from "react";
import GameStatus from "../components/GameStatus";
import QuizRenderBox from "../components/QuizRenderBox";
import {
  encryptorFunctions,
  generateNewGame,
} from "../utils/gameLogicFunction";

export default function GamePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentChallenge, setcurrentChallenge] = useState(null);
  const [score, setScore] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);

  const startNewcurrentChallenge = async () => {
    const data = await generateNewGame();
    setcurrentChallenge(data);
  };

  useEffect(() => {
    startNewcurrentChallenge();
  }, []);

  //  I LOVE THIS SHIT "????????"
  const handleGameProcess = (selectedAnswer) => {
    // for right/wrong answer
    if (selectedAnswer === currentChallenge?.rightAnswer) {
      alert("Correct");
      setScore((score) => score + 100);
    } else {
      alert("Wrong Answer");
    }

    // for round checking
    if (currentRound < 10) {
      setCurrentRound(currentRound + 1);
      startNewcurrentChallenge();
    } else {
      alert("Game Over");
      setCurrentRound(1);
      setScore(0);
      startNewcurrentChallenge();
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0b0b18] text-slate-200 overflow-hidden font-inter">
      <main
        className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-20" : "ml-64"} p-8 flex flex-col xl:flex-row gap-8`}
      >
        {/* Left Column: Game Area */}
        <div className="flex flex-col flex-1 gap-8">
          <GameStatus round={currentRound} score={score} />
          {/* Center Area: Challenge Box */}
          {/* optional chaining "?", returns "undefined" to prevent error */}
          <QuizRenderBox
            display={currentChallenge?.display}
            type={currentChallenge?.type}
            choices={currentChallenge?.choices}
            handleGameProcess={handleGameProcess}
          />
        </div>

        {/* Right Column: Leaderboard / Info  SA SUSUNOD NA YAN} */}
      </main>
    </div>
  );
}
