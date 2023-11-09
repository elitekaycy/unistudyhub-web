import { createBrowserRouter } from "react-router-dom";
import { Feed, Home, Login, Account, OTP, Profile } from "./Pages";

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
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login/otp",
    element: <OTP />,
  },
]);

export default AppRouter;
