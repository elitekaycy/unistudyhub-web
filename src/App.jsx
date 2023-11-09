import { createBrowserRouter } from "react-router-dom";
import { Feed, Home, Login, Account, Report, OTP } from "./Pages";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user",
    element: <Account />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/OTP",
    element: <OTP />,
  },
]);

export default AppRouter;
