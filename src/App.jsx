import { createBrowserRouter } from "react-router-dom";
import { Feed, Home, Login, Account, OTP, Profile } from "./Pages";
import { ProtectedRoute } from "./components";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/feed",
    element: (
      <ProtectedRoute>
        <Feed />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <Login />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <Account />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/login/otp",
    element: (
      <ProtectedRoute>
        <OTP />,
      </ProtectedRoute>
    ),
  },
]);

export default AppRouter;
