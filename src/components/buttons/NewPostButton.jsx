import React from "react";

function NewPostButton({ onOpen }) {
  return (
    <button
      onClick={() => onOpen()}
      className="flex flex-row items-center p-2 pr-2 sm:pr-4 sm:w-full justify-center gap-2 max-w-xs w-30 text-xs sm:text-sm hover:bg-purple-500 bg-purple-600 rounded-md"
    >
      <span className="text-white w-4 sm:w-6 material-symbols-outlined">
        add
      </span>
      <span className="text-white font-semibold flex flex-row gap-1">
        <span>Share</span>
        <span className="hidden sm:flex"> Resource</span>
      </span>
    </button>
  );
}

export default NewPostButton;
