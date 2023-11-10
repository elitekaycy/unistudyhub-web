import React, { useEffect } from "react";
import { NavigationBar, FloatingNav } from "../components";
import {
  BaseFetch,
  downloadFile,
  getToken,
  useInitials,
} from "../utils/helper";

import img from "../assets/bg3.png";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

function FeedDetails() {
  const { state } = useLocation()
  const { user } = useAuthContext()
  // const user = [
  //   {
  //     name: "John Doe",
  //     email: "john@example.com",
  //     institution: "University XYZ",
  //     skills: ["JavaScript", "React", "Node.js"],
  //     title: "Software Engineer",
  //     image: "path/to/image.jpg",
  //     pdf: "path/to/resume.pdf",
  //   },
  // ];

  useEffect(() => {
     console.log("state ", state)
  }, [])

  return (
    <div className="w-full min-h-screen bg-gray-100 h-full overflow-y-hidden flex flex-col">
      <NavigationBar className="z-20" />
      <div className="bg-bgprimary lg:bg-[url('./src/assets/bg2.jpg')] min-h-screen bg-cover flex flex-col justify-center items-start pt-28 pb-28">
        <div className="flex flex-col w-full mx-auto lg:w-6/12 p-4 bg-bgprimary rounded-xl  backdrop-blur border border-gray-300">
          <div className="w-full flex justify-between items-center">
            {/* <div className="w-full flex flex-row items-center justify-start gap-3 font-header"> */}
            <div className="h-14 w-14 flex flex-row items-center justify-center rounded-full p-2 border-0 bg-purple-100 mr-2">
              <div className="text-2xl font-semibold text-bgsecondary font-header">
                {useInitials(user?.username)}
              </div>
            </div>

            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col font-header text-black">
                <div className="font-bold text-md">{user?.username}</div>{" "}
                {/*{user?.name}*/}
                <div className="text-gray-500 text-xs">{user?.email}</div>
              </div>
              <div className="bg-black shadow-lg rounded-full px-8 py-3 text-sm text-white font-bold text-center flex justify-center items-center space-x-1 font-header">
                {/* <div>{myResources.length}</div> */}
                <div>View Profile</div>
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="w-full flex flex-row items-center justify-start gap-3 font-body font-bold text-md border-b border-b-gray-300 pt-4 pb-1 mb-2">
            School or Institution
          </div>
          <div className="w-full font-body font-semibold text-md text-gray-400">
            University of Ghana
          </div>
          <div className="w-full flex flex-row items-center justify-start gap-3 font-body font-bold text-md border-b border-b-gray-300 pt-4 pb-1 mb-2">
            Skills and Interests
          </div>
          <div className="flex justify-start items-center space-x-2">
            <div className="font-body font-semibold text-md px-4 py-2 bg-gray-100 rounded-md">
              React
            </div>
            <div className="font-body font-semibold text-md px-4 py-2 bg-gray-100 rounded-md">
              Football
            </div>
            <div className="font-body font-semibold text-md px-4 py-2 bg-gray-100 rounded-md">
              Reading
            </div>
            <div className="font-body font-semibold text-md px-4 py-2 bg-gray-100 rounded-md">
              Anime
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mx-auto lg:w-6/12 p-4 bg-bgprimary rounded-xl  backdrop-blur border border-gray-300 mt-3">
          <div className="w-full flex justify-between items-center">
            {/* <div className="w-full flex flex-row items-center justify-start gap-3 font-header"> */}

            <div className="w-full flex justify-between items-center">
              <div className="w-full flex flex-col font-header text-black">
                <div className="font-bold text-xl text-bgsecondary pb-2">
                {state?.feed?.title}
                </div>{" "}
                {/*{user?.name}*/}
                <span className="pt-1 bg-purple-100 rounded-full w-1/3"></span>
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="w-full flex flex-row items-center justify-start gap-3 font-body font-semi text-md pt-4 pb-1 mb-2">
           {state?.feed?.description}
          </div>
          <div>
            <img src={img}></img>
          </div>

          <button
            className="flex self-start bg-purple-600 border-0 hover:bg-purple-500 font-semibold font-body p-2 px-4 rounded-full text-white flex-row space-x-2 mt-2 text-md"
            onClick={() => hiddenFileInput.current.click()}
          >
            <span className="material-symbols-outlined">cloud_download</span>
            <span>My shared resource.pdf</span>
          </button>
        </div>
      </div>
      <FloatingNav />
    </div>
  );
}

export default FeedDetails;
