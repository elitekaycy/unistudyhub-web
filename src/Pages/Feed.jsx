import React from "react";
import { FloatingNav, NavigationBar, FeedContent } from "../components";

function Feed() {
  return (
    <div className="w-full min-h-screen bg-gray-100 h-full overflow-y-hidden flex flex-col">
      <NavigationBar />
      <FeedContent />
      <FloatingNav />
    </div>
  );
}

export default Feed;
