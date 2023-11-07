import React from "react";
import { FloatingNav, NavigationBar } from "../components";

function Feed() {
  return (
    <div className="w-screen min-h-screen bg-gray-100 h-full overflow-y-hidden flex flex-col">
      <NavigationBar />
      <FloatingNav />
    </div>
  );
}

export default Feed;
