import { useState } from "react";

export default function GameStatus({ round, score }) {
  return (
    <div className="flex items-center justify-between gap-4 py-6">
      <div className="glass-panel px-6 py-3 rounded-2xl border-white/5 bg-white/5 flex flex-col items-center min-w-[120px]">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
          Round
        </span>
        <span className="text-xl font-black text-white">{round}/10</span>
      </div>

      {/* <div className="relative flex items-center justify-center w-20 h-20">
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="#7c3bed"
            strokeWidth="8"
            strokeDasharray="283"
            strokeDashoffset="70"
            strokeLinecap="round"
            className="animate-pulse shadow-[0_0_15px_#7c3bed]"
          />
        </svg>
        <div className="flex flex-col items-center leading-none">
          <span className="text-xl font-black text-white">45</span>
          <span className="text-[8px] font-bold text-purple-400 uppercase tracking-widest">
            Sec
          </span>
        </div>
      </div> */}

      <div className="glass-panel px-6 py-3 rounded-2xl border-white/5 bg-white/5 flex flex-col items-center min-w-[120px]">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
          Score
        </span>
        <span className="text-xl font-black text-cyan-400">
          {score.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
