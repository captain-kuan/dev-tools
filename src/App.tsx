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
    <div className=" h-screen bg-slate-950 flex flex-col">
      <nav className="py-3 px-4 flex items-center justify-between ">
        <MInput value={search} onChange={setSearch} />
        <div className=" text-white ">
          <a className="p-1" href="/json">
            json
          </a>
          |
          <a className="p-1" href="/benchmark">
            benchmark
          </a>
        </div>
      </nav>
      <div className="flex-1 rounded-xl flex flex-col mt-0 m-3 p-2 bg-slate-900">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
