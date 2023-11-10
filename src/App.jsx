import { createBrowserRouter } from "react-router-dom";
import { Feed, Home, Login, Account, OTP, Profile, FeedDetails } from "./Pages";

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
  {
    path: "/feedDetails",
    element: <FeedDetails />,
  },
]);

export default AppRouter;
