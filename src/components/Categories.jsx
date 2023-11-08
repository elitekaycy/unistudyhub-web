import React from "react";

function Categories() {
  const Catego = [
    {
      name: "School",
    },
    {
      name: "Technology",
    },
    {
      name: "Algorithms",
    },
    {
      name: "Business",
    },
    {
      name: "Languages",
    },
    {
      name: "Medicine",
    },
  ];

  return (
    <div className="w-full sm:px-32 px-10 whitespace-normal font-body font-semibold">
      <div className="flex items-center justify-start overflow-x-scroll">
        {Catego.map((categories, index) => (
          <div
            key={index}
            className="bg-white mt-6 px-5 py-2 mr-6 rounded-lg cursor-pointer hover:bg-bgsecondary hover:text-white hover:shadow-xl transition ease-in-out duration-150 border border-slate-200"
          >
            {categories.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
