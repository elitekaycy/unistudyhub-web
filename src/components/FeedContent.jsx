import React from "react";
import Categories from "./Categories";
import Resource from "./Resource";

function FeedContent() {
  return (
    <div className="w-full flex-col mt-24 mb-8">
      <Categories />
      <Resource />
    </div>
  );
}

export default FeedContent;
