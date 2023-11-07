import React, { useState } from "react";
import NewPostButton from "./buttons/NewPostButton";
import { useInitials } from "../utils/helper";
import NewPostModal from "./Modals/NewPostModal";

function NavigationBar() {
  const [openNewPostModal, setOpenNewPostModal] = useState(false);

  const [user, setUser] = useState({
    username: "dickson",
    email: "dicksonanyaele@gmail.com",
  });

  return (
    <>
      <div className="sticky w-full flex flex-row items-center justify-between p-2 sm:p-6 sm:px-56 px-4 bg-white shadow-sm">
        <div className="tracking-tighter text-2xl sm:text-3xl font-bold">UniStudy</div>
        <div className="flex flex-row items-center justify-evenly space-x-6">
          <div className="w-12 p-3 sm:flex hidden flex-row items-center justify-center hover:border-purple-600 hover:text-purple-600 h-12 rounded-full border border-gray-200">
            <span className="cursor-pointer material-symbols-outlined">
              notifications
            </span>
          </div>
          <NewPostButton onOpen={() => setOpenNewPostModal(true)} />
          <div className="w-12 h-12 p-4 flex flex-row items-center justify-center rounded-full bg-purple-100">
            <div className="font-bold text-lg text-purple-600">
              {useInitials(user?.username)}
            </div>
          </div>
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
