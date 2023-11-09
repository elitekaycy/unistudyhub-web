import React, { useEffect } from "react";
import { FloatingNav, NavigationBar, FeedContent } from "../components";
import { useAuthContext } from "../Context/AuthContext";

function Feed() {
  const { user, isAuth } = useAuthContext()

  return (
    <div className="w-full min-h-screen bg-gray-100 h-full overflow-y-hidden flex flex-col">
      <NavigationBar />
      <FeedContent />
      <FloatingNav />
    </div>
  );
}

export default Feed;
