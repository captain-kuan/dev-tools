import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import JsonFormatter from "@/views/JsonFormatter";
import Benchmark from "@/views/Benchmark";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/json", element: <JsonFormatter /> },
      { path: "/benchmark", element: <Benchmark /> }
  ],
  },
]);

export default router;
