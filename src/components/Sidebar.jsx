import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const location = useLocation();
  // useLocation returns the current location of the page, example: /translate, /

  const navItems = [
    { label: "Dashboard", path: "/", icon: "grid_view" },
    { label: "Sandbox Lab", path: "/translate", icon: "science" },
    { label: "Algorithms", path: "/algorithms", icon: "calculate" },
    { label: "History", path: "/history", icon: "history" },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-[#12122b] border-r border-white/5 flex flex-col z-50 transition-all duration-300 ${
        isSidebarOpen ? "w-20" : "w-64"
      }`}
    >
      {/* Toggle Open/Close Sidebar */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute -right-3 top-10 bg-transparent text-cyan-400 rounded-full p-1 shadow-lg hover:scale-110 transition-transform"
      >
        <span
          className={`material-symbols-outlined transition-transform duration-300 ${isSidebarOpen ? "" : "rotate-180"}`}
        >
          chevron_right
        </span>
      </button>
      {/* Brand Identity */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white shadow-lg">
          <span className="material-symbols-outlined text-2xl">security</span>
        </div>
        {!isSidebarOpen && (
          <h1 className="text-white font-black text-lg whitespace-nowrap">
            CipherMaster
          </h1>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-2 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-white/10 text-cyan-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span
                className={`material-symbols-outlined transition-colors ${
                  isActive ? "text-cyan-400" : "group-hover:text-cyan-400"
                }`}
              >
                {item.icon}
              </span>
              {!isSidebarOpen && (
                <span className="font-medium text-sm whitespace-nowrap">
                  {item.label}
                </span>
              )}{" "}
            </Link>
          );
        })}
      </nav>

      {/* Footer / Settings */}
      <div className="p-4 border-t border-white/5">
        <Link
          to="/settings"
          className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-white transition-colors group"
        >
          <span className="material-symbols-outlined group-hover:text-cyan-400 transition-colors">
            settings
          </span>
        </Link>
      </div>
    </aside>
  );
}
