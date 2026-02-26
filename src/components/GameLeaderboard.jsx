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

export default function GameLeaderboard() {
  return (
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
  );
}
