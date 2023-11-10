import React, { useState } from "react";
import NewPostButton from "./button/NewPostButton.jsx";
import { useInitials } from "../utils/helper";
import NewPostModal from "./Modals/NewPostModal";
import { useAuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function NavigationBar() {
  const { user } = useAuthContext();
  const { logout } = useAuthContext();
  const [openNewPostModal, setOpenNewPostModal] = useState(false);
  const [search, setSearch] = useState(false);
  const [userMenu, setUserMenu] = useState(false);

  const navigate = useNavigate();

  function handleSearchState() {
    setSearch(!search);
  }

  function logouty() {
    logout();
    navigate("/login");
  }

  function userDropdown() {
    setUserMenu(!userMenu);
  }

  return (
    <>
      <div className="fixed top-0 bg-opacity-70 backdrop-blur-sm w-full flex flex-row items-center justify-between p-4 sm:p-6 sm:px-20 px-10 bg-white shadow-sm">
        <Link to={"/"}>
          <div className="tracking-tighter text-2xl sm:text-3xl font-bold font-header text-black">
            UniStudyHub
          </div>
        </Link>
        <div className="flex flex-row items-center justify-evenly space-x-6 font-header">
          {search ? (
            <div
              className={`flex items-center justify-between bg-state-100 p-2 rounded-md border border-slate-100 mr-2 transtion ease-in duration-150 ${
                search ? "w-2/3" : "w-fit"
              }`}
            >
              <input
                type="text"
                placeholder="search "
                className="focus:outline-none outline-none border-transparent bg-transparent p-1 text-sm font-light"
              />
              <div
                onClick={handleSearchState}
                className="cursor-pointer flex items-center"
              >
                <span className={`material-symbols-outlined text-md `}>
                  close
                </span>
              </div>
            </div>
          ) : (
            <div
              className="mr-3 flex items-center cursor-pointer"
              onClick={handleSearchState}
            >
              <span className={`material-symbols-outlined text-md `}>
                search
              </span>
            </div>
          )}
          <div className="w-12 p-3 sm:flex hidden flex-row items-center justify-center hover:border-bgsecondary hover:text-bgsecondary h-12 rounded-full border border-gray-200">
            <span className="cursor-pointer material-symbols-outlined">
              notifications
            </span>
          </div>
          <NewPostButton onOpen={() => setOpenNewPostModal(true)} />
          <div
            className="w-12 h-12 p-4 flex flex-row items-center justify-center rounded-full bg-purple-100 cursor-pointer hover:shadow-md"
            onClick={userDropdown}
          >
            <div className="font-bold text-lg text-bgsecondary">
              {useInitials(user?.username)}
            </div>
          </div>

          {userMenu && (
            <div className="fixed top-28 right-12 flex flex-col justify-center items-center bg-white rounded-md p-4 space-y-5 z-10 border border-gray-300">
              <div className="border-b border-b-gray-300 pb-3 space-y-1">
                <div className="font-semibold text-md ">{user?.username}</div>
                <div className="font-semibold text-sm text-gray-600">
                  {user?.email}
                </div>
              </div>
              <div
                class="py-2 border border-red-600 w-full text-center rounded-sm text-red-600 hover:bg-red-600 hover:text-white transition-colors delay-100 font-semibold cursor-pointer"
                onClick={logouty}
              >
                Sign out
              </div>
            </div>
          )}
        </div>
      </div>
      <NewPostModal
        open={openNewPostModal}
        close={() => setOpenNewPostModal(false)}
      />
    </>
  );
}

export default NavigationBar;
