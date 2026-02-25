import { useState, useEffect } from "react";
import rot from "rot"; // ROT13
import CypherResult from "../components/CypherResult";

// encryptText function
const encryptText = (inputText) => rot(inputText);

// decryptText function
const decryptText = (encryptedText) => rot(encryptedText);

export default function GamePage() {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [displayEncryptedText, setDisplayEncryptedText] = useState("");
  const [displayDecryptedText, setDisplayDecryptedText] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // loads the recent saved pigpen cipher from localStorage
  const [displayPigPenText, setDisplayPigPenText] = useState(() => {
    const loadStorage = localStorage.getItem("pigpen");
    return loadStorage || "";
  });

  useEffect(() => {
    localStorage.setItem("pigpen", displayPigPenText);
  }, [displayPigPenText]);

  function getText(e) {
    setText(e.target.value);
  }

  function submitText(event) {
    if (event) event.preventDefault();
    const dataText = text;
    const reverse = reverseText(dataText);
    const encrypt = encryptText(dataText);
    const decrypt = decryptText(encrypt);
    const pigPenText = dataText.toUpperCase();

    setDisplayText(reverse);
    setDisplayEncryptedText(encrypt);
    setDisplayDecryptedText(decrypt);
    setDisplayPigPenText(pigPenText);
  }

  function EnterShiftKeySubmit(e) {
    // if Enter was pressed = submit, if enter and shift is pressed = next line
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitText(e);
    }
  }

  function reverseText(inputText) {
    return inputText.split("").reverse().join("");
  }

  function clearForm() {
    setText("");
    setDisplayText("");
    setDisplayEncryptedText("");
    setDisplayDecryptedText("");
    setDisplayPigPenText("");
    localStorage.removeItem("pigpen");
  }

  return (
    <div className="flex min-h-screen bg-[#0b0b18] text-slate-200">
      <main
        className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-20" : "ml-20"} p-10`}
      >
        {" "}
        {/* Header Section */}
        <header className="flex justify-between items-end mb-12 border-b border-white/5 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-4xl font-black tracking-tight text-white">
                Sandbox<span className="text-cyan-400">Lab</span>
              </h2>
            </div>
            <p className="text-slate-500 font-medium">
              Real-time cryptographic transformation environment.
            </p>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
              System Online
            </span>
          </div>
        </header>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          {/* Input Panel */}
          <section className="xl:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl overflow-hidden border-white/10 shadow-2xl">
              <div className="px-6 py-4 bg-white/5 border-b border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em]">
                    Input Vector
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={submitText}
                    className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-cyan-400 transition-colors"
                    title="Transform"
                  >
                    <span className="material-symbols-outlined text-sm">
                      play_arrow
                    </span>
                  </button>
                  <button
                    onClick={() => setText("")}
                    className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-red-400 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">
                      delete_forever
                    </span>
                  </button>
                </div>
              </div>

              <div className="p-6 h-125 relative">
                <textarea
                  value={text}
                  onChange={getText}
                  onKeyDown={EnterShiftKeySubmit}
                  placeholder="Enter secret transmission data here..."
                  className="w-full h-full bg-transparent border-none focus:ring-0 resize-none mono-text text-lg text-cyan-400/90 placeholder:text-slate-700 leading-relaxed"
                />
              </div>

              <div className="px-6 py-3 bg-black/40 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Chars: {text.length}
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                  UTF-8
                </span>
              </div>
            </div>
          </section>

          {/* Transformations Grid */}
          <section className="xl:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-purple-500 animate-spin-slow">
                hub
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Active Transformations
              </h3>
              <button className="ml-auto text-[10px] font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-sm">
                  add_circle
                </span>
                Add Module
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CypherResult label="Reversed" text={displayText} />
              <CypherResult label="ROT13 Encrypt" text={displayEncryptedText} />
              <CypherResult label="ROT13 Decrypt" text={displayDecryptedText} />
              <CypherResult
                label="Pigpen Cipher"
                text={displayPigPenText}
                isPigPen={true}
              />
            </div>

            {/* Bottom Actions */}
            <div className="mt-12 flex justify-end">
              <button
                onClick={clearForm}
                className="flex items-center gap-3 px-8 py-4 bg-white/5 border-b border-white/5 hover:bg-cyan-500 text-white rounded-2xl font-bold transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95"
              >
                <span className="material-symbols-outlined">delete_sweep</span>
                Clear Workspace
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
