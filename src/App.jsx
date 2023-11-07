import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])


export default AppRouter