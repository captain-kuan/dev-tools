import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import JsonFormatter from "@/views/JsonFormatter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/json", element: <JsonFormatter /> }],
  },
]);

export default router;
