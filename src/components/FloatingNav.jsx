import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import SearchResourceModal from "./Modals/SearchResourceModal";

function FloatingNav() {
  const [location, setLocation] = useState("");
  const [openSearchResource, setSearchResource] = useState(false)
  const navigate = useNavigate();

  const navTabs = [
    {
      name: "feed",
      iconClassName: "material-symbols-outlined",
      link: "/feed",
      tagname: "home",
    },
    {
      name: "user",
      iconClassName: "material-symbols-outlined",
      link: "/user",
      tagname: "manage_accounts",
    },
    {
      name: "report",
      iconClassName: "material-symbols-outlined",
      link: "/report",
      tagname: "overview",
    },
  ];

  useEffect(() => {
    setLocation(window.location.pathname.substring(1));
  }, [location]);

  return (
    <>
    <nav className="fixed scale-[0.8] xxl:scale-50 shadow-lg w-full sm:max-w-md p-4 bottom-16 flex flex-row items-center justify-evenly gap-3 left-1/2 transform -translate-x-1/2 rounded-full bg-purple-700 ">
      {navTabs &&
        navTabs.map((navItem) => (
          <div
            key={navItem?.tagname}
            onClick={() => navigate(navItem?.link, { replace: true })}
            className={`flex flex-col items-center cursor-pointer hover:text-white ${
              location === navItem?.name ? "text-white" : "text-gray-400"
            }  scale-100 hover:scale-105 transition ease-in-out duration-150`}
          >
            <span className={`${navItem?.iconClassName}`}>
              {navItem?.tagname}
            </span>
            <span className="hidden sm:flex font-semibold">{navItem?.name}</span>
          </div>
        ))}

      <div
         onClick={() => setSearchResource(true)}
        className={`flex flex-col items-center cursor-pointer hover:text-white text-gray-400 scale-100 hover:scale-105 transition ease-in-out duration-150`}
      >
        <span className="material-symbols-outlined">search</span>
        <span className="hidden sm:flex font-semibold">search</span>
      </div>
    </nav>
    <SearchResourceModal open={openSearchResource} close={() => setSearchResource(false)} />
    </>
  );
}

export default FloatingNav;
