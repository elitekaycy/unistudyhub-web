import { createBrowserRouter } from "react-router-dom";
import { Feed, Home } from "./Pages";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/feed",
    element: <Feed />
  }
])


export default AppRouter