export default function AnswerChoicesButtons() {
  return (
    <div className="p-8 bg-black/40 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {["HELLO WORLD", "SECRET CODE", "CIPHER TEXT", "HIDDEN KEY"].map(
          (option, idx) => (
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
          ),
        )}
      </div>
    </div>
  );
}
