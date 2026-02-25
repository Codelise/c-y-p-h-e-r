export default function CypherResult({ label, text, isPigPen = false }) {
  const getIcon = (label) => {
    switch (label.toLowerCase()) {
      case "reversed":
        return "swap_horiz";
      case "encrypted":
      case "rot13 encrypt":
        return "lock";
      case "decrypted":
      case "rot13 decrypt":
        return "lock_open";
      case "pigpen cipher":
        return "grid_3x3";
      default:
        return "transform";
    }
  };

  const getIconColor = (label) => {
    switch (label.toLowerCase()) {
      case "reversed":
        return "text-cyan-400";
      case "encrypted":
      case "rot13 encrypt":
        return "text-purple-400";
      case "decrypted":
      case "rot13 decrypt":
        return "text-blue-400";
      case "pigpen cipher":
        return "text-indigo-400";
      default:
        return "text-slate-400";
    }
  };

  return (
    <div className="glass-panel rounded-2xl p-6 transition-all duration-300 hover:border-white/20 group">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${getIconColor(label)} group-hover:scale-110 transition-transform`}
        >
          <span className="material-symbols-outlined">{getIcon(label)}</span>
        </div>
        <h3 className="text-slate-200 font-bold text-sm uppercase tracking-wider">
          {label}
        </h3>
      </div>
      <div className="bg-black/20 rounded-xl p-4 min-h-30 border border-white/5 flex items-center">
        <p
          className={`w-full overflow-hidden text-ellipsis ${isPigPen ? "pigpen-text text-center" : "mono-text text-cyan-400/90"}`}
        >
          {text || (
            <span className="text-slate-600 italic text-sm">
              No output generated...
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
