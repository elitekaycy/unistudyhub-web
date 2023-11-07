import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages";
import Login from "./Pages/Login";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default AppRouter;
