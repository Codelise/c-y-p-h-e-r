import AnswerChoicesButtons from "./AnswerChoicesButtons";

export default function QuizRenderBox() {
  return (
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
        <AnswerChoicesButtons />
      </div>
    </section>
  );
}
