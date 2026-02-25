import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function TranslatePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Mock data for the leaderboard
  const topAgents = [
    {
      name: "CipherKing",
      xp: "24,500 XP",
      rank: 1,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CipherKing",
    },
    {
      name: "NullPointer",
      xp: "21,200 XP",
      rank: 2,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=NullPointer",
    },
    {
      name: "AdaLovelace",
      xp: "19,850 XP",
      rank: 3,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AdaLovelace",
    },
    {
      name: "BinaryWitch",
      xp: "18,100 XP",
      rank: 4,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BinaryWitch",
    },
    {
      name: "AlanT",
      xp: "17,450 XP",
      rank: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AlanT",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0b0b18] text-slate-200 overflow-hidden font-inter">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <main
        className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-20" : "ml-64"} p-8 flex flex-col xl:flex-row gap-8`}
      >
        {/* Left Column: Game Area */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Top Bar: Round, Timer, Score */}
          <div className="flex justify-between items-center gap-4 py-6">
            <div className="glass-panel px-6 py-3 rounded-2xl border-white/5 bg-white/5 flex flex-col items-center min-w-[120px]">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                Round
              </span>
              <span className="text-xl font-black text-white">1 / 10</span>
            </div>

            <div className="relative w-20 h-20 flex items-center justify-center">
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
            </div>

            <div className="glass-panel px-6 py-3 rounded-2xl border-white/5 bg-white/5 flex flex-col items-center min-w-[120px]">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                Score
              </span>
              <span className="text-xl font-black text-cyan-400">1,250</span>
            </div>
          </div>

          {/* Center Area: Challenge Box */}
          <section className="flex-1 flex flex-col">
            <div className="glass-panel rounded-[32px] overflow-hidden border-white/10 shadow-2xl flex flex-col flex-1 bg-[#161633]/40">
              <div className="px-8 py-4 bg-white/5 border-b border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-sm">
                    lock
                  </span>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em]">
                    Pigpen Cipher
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/20 border border-red-400/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20 border border-yellow-400/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/20 border border-green-400/30" />
                </div>
              </div>

              <div className="p-12 flex flex-col items-center justify-center flex-1 text-center">
                <h4 className="text-slate-400 font-medium text-lg mb-12">
                  Decipher the hidden message below:
                </h4>

                <div className="relative p-12 bg-black/20 rounded-3xl border border-white/5 group transition-all hover:bg-black/30 w-full max-w-2xl min-h-[250px] flex items-center justify-center">
                  {/* Corner accents */}
                  <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-lg" />
                  <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-cyan-400/30 rounded-br-lg" />

                  <p className="pigpen-text text-white leading-relaxed tracking-[0.3em]">
                    HELLO
                    <br />
                    WORLD
                  </p>
                </div>

                <button className="mt-12 flex items-center gap-2 text-purple-400/60 hover:text-purple-400 transition-all font-medium text-sm group">
                  <span className="material-symbols-outlined text-lg group-hover:animate-bounce">
                    lightbulb
                  </span>
                  <span>Need a hint? (-50 pts)</span>
                </button>
              </div>

              {/* Multiple Choice Grid */}
              <div className="p-8 bg-black/40 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  {[
                    "HELLO WORLD",
                    "SECRET CODE",
                    "CIPHER TEXT",
                    "HIDDEN KEY",
                  ].map((option, idx) => (
                    <button
                      key={option}
                      className="flex items-center justify-between px-8 py-5 rounded-2xl border border-white/5 bg-white/5 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all text-left group active:scale-[0.98]"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 font-bold font-mono text-sm">
                          {String.fromCharCode(65 + idx)}.
                        </span>
                        <span className="text-white font-black tracking-wider">
                          {option}
                        </span>
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-white/10 group-hover:border-cyan-400/50 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Leaderboard / Info */}
        <aside className="w-full xl:w-80 flex flex-col gap-6">
          <div className="glass-panel flex-1 rounded-[32px] border-white/5 bg-[#12122b] overflow-hidden flex flex-col">
            <div className="flex p-1">
              <button className="flex-1 py-4 text-sm font-bold border-b-2 border-cyan-400 text-white bg-white/5 rounded-tl-[31px]">
                Top Agents
              </button>
              <button className="flex-1 py-4 text-sm font-bold text-slate-500 hover:text-slate-300">
                Recent
              </button>
            </div>

            <div className="p-6 space-y-4 flex-1">
              {topAgents.map((agent) => (
                <div
                  key={agent.name}
                  className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-colors group"
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                      agent.rank === 1
                        ? "bg-yellow-400/20 text-yellow-400"
                        : agent.rank === 2
                          ? "bg-slate-400/20 text-slate-400"
                          : agent.rank === 3
                            ? "bg-orange-400/20 text-orange-400"
                            : "bg-white/5 text-slate-600"
                    }`}
                  >
                    {agent.rank}
                  </div>
                  <img
                    src={agent.avatar}
                    alt=""
                    className="w-10 h-10 rounded-xl bg-slate-800 border border-white/10"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold text-white truncate">
                      {agent.name}
                    </span>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                      {agent.xp}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white/5 border-t border-white/5 mt-auto">
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 relative group">
                <div className="w-8 h-8 rounded-lg bg-cyan-400 flex items-center justify-center font-bold text-white text-xs shadow-lg shadow-cyan-400/20">
                  42
                </div>
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Neo"
                  alt=""
                  className="w-10 h-10 rounded-xl bg-slate-800 border border-cyan-400/30"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">You</span>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                    1,250 XP
                  </span>
                </div>
                <span className="material-symbols-outlined absolute right-4 text-green-400 text-sm group-hover:translate-y-[-2px] transition-transform">
                  arrow_upward
                </span>
              </div>
            </div>
          </div>

          {/* Daily Tip Card */}
          <div className="glass-panel p-6 rounded-[32px] border-white/5 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border border-indigo-500/20">
            <h5 className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-3">
              Daily Tip
            </h5>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              Look for frequency analysis patterns in substitution ciphers. High
              frequency letters like E, T, and A are often the key.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}
