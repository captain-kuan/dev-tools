import Editor from "@/components/Editor";
import { useState } from "react";
const JsonFormatter = () => {
  const [value, setValue] = useState(`{"a":"1"}`);
  return (
    <>
      <div className="flex flex-1 ">
        <div className="flex-1 p-2 h-screen">
          <Editor
            value={value}
            onChange={setValue}
            options={{ language: "json" }}
          />
        </div>
      </div>
    </>
  );
};

export default JsonFormatter;
