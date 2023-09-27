import { useState } from "react";
import { Outlet } from "react-router-dom";
import { invoke } from "@tauri-apps/api/tauri";
import { MInput } from "@/components";
function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className=" h-screen bg-slate-950 text-white flex flex-col">
      <nav className="py-3 px-4 flex items-center justify-between">
        <MInput value={search} onChange={setSearch} />
        <div>
          <a href="/json">JSON</a>|
        </div>
      </nav>
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
