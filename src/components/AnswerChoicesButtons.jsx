export default function AnswerChoicesButtons({ choices = [], onSelect }) {
  return (
    <div className="p-8 border-t bg-black/40 border-white/5">
      <div className="grid max-w-3xl grid-cols-1 gap-4 mx-auto md:grid-cols-2">
        {choices ? ( // ternary rendering
          choices.map(
            (
              choice,
              index, // index to keep track of the buttons
            ) => (
              <button
                key={index} // keep track or btns number
                onClick={() => onSelect(choice)} // select answer
                className="flex items-center justify-between px-8 py-5 rounded-2xl border border-white/5 bg-white/5 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all text-left group active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm font-bold text-slate-500">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="font-black tracking-wider text-white">
                    {choice}
                  </span>
                </div>
                <div className="w-6 h-6 transition-colors border-2 rounded-full border-white/10 group-hover:border-cyan-400/50" />
              </button>
            ),
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
