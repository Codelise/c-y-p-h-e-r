import AnswerChoicesButtons from "./AnswerChoicesButtons";

export default function QuizRenderBox({ display, type }) {
  // for determining if PigPen is the type of quiz
  const isPigPen =
    type === "PIGPEN"
      ? "pigpen-text text-white text-4xl tracking-[0.4em]"
      : "text-white text-3xl font-mono tracking-wider";

  return (
    <section className="flex flex-col flex-1">
      <div className="glass-panel rounded-[32px] overflow-hidden border-white/10 shadow-2xl flex flex-col flex-1 bg-[#161633]/40">
        <div className="flex items-center justify-between px-8 py-4 border-b bg-white/5 border-white/5">
          <div className="flex items-center gap-3">
            <span className="text-sm material-symbols-outlined text-cyan-400">
              lock
            </span>
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em]">
              {type}
            </span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/20 border border-red-400/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20 border border-yellow-400/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/20 border border-green-400/30" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 p-12 text-center">
          <h4 className="mb-12 text-lg font-medium text-slate-400">
            Decipher the hidden message below:
          </h4>

          <div className="relative p-12 bg-black/20 rounded-3xl border border-white/5 group transition-all hover:bg-black/30 w-full max-w-2xl min-h-[250px] flex items-center justify-center">
            {/* Corner accents */}
            <div className="absolute w-8 h-8 border-t-2 border-l-2 rounded-tl-lg top-6 left-6 border-cyan-400/30" />
            <div className="absolute w-8 h-8 border-b-2 border-r-2 rounded-br-lg bottom-6 right-6 border-cyan-400/30" />

            <p className={isPigPen}>{display}</p>
          </div>
        </div>

        {/* Multiple Choice Grid */}
        <AnswerChoicesButtons />
      </div>
    </section>
  );
}
