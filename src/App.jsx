import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import LandPage from "./pages/LandPage";
import GamePage from "./pages/GamePage";

export default function App() {
  // for opening and closing the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // false for default = sidebar open

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-[#0f172a]">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main
          className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-0" : "ml-20"}`}
        >
          <Routes>
            <Route path="/" element={<LandPage />} />
            <Route path="/gamepage" element={<GamePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
