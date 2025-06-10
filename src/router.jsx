import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import DisplayInfo from "./pages/DisplayInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/display",
    element: <DisplayInfo />,
  },
]);

export default router;
