import { createBrowserRouter } from "react-router-dom";
import { Feed, Home } from "./Pages";
import Login from "./Pages/Login";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/feed",
    element: <Feed />
  },
  {
  path: "/login",
  element: <Login />,
  },
])


export default AppRouter;
