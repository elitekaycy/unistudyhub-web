import React from "react";

function NewPostButton({ onOpen }) {
  return (
    <button
      onClick={() => onOpen()}
      className="flex flex-row items-center p-2 pr-4 justify-center gap-2 max-w-xs w-full hover:bg-purple-500 bg-purple-600 rounded-md"
    >
      <span className="text-white material-symbols-outlined">add</span>
      <span className="text-white font-semibold">Share Resource</span>
    </button>
  );
}

export default NewPostButton;
