import { MInput, MSelect } from "@/components";
import { useState } from "react";

function benchmark() {
  const [path, setPath] = useState("");
  const [method, setMethod] = useState("GET");
  const METHOD_OPTIONS = [
    { label: "GET", value: "GET" },
    { label: "POST", value: "POST" },
    { label: "PUT", value: "PUT" },
  ];
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 flex flex-col mb-2">
        <div className=" bg-slate-950 mb-2 p-1 flex items-center">
          <div className="w-32 mr-3">
            <MSelect
              options={METHOD_OPTIONS}
              value={method}
              onChange={setMethod}
            />
          </div>
          <MInput value={path} onChange={setPath} />
        </div>
        <div className="flex mb-2 flex-1">
          <div className="flex-1  flex flex-col mr-1">
            <div className="flex-1 bg-slate-950 mb-2 p-1">params</div>
            <div className="flex-1 bg-slate-950 p-1">headers</div>
          </div>
          <div className="flex-1 bg-slate-950 p-1">body</div>
        </div>
      </div>

      <div className="bg-slate-950 flex-1 p-1">result</div>
    </div>
  );
}

export default benchmark;
