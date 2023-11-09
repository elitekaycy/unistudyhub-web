import React from "react";
import { Link } from "react-router-dom";

function OTP() {
  return (
    <div className="bg-bgprimary lg:bg-[url('./src/assets/bg2.jpg')] min-h-screen bg-cover flex justify-center items-center">
      <div
        className="flex-col w-full mx-auto lg:w-4/12 p-4 bg-bgprimary rounded-xl  backdrop-blur border border-gray-300
    
  "
      >
        <header className="w-full flex justify-between items-center cursor-pointer ">
          <Link to="/login">
            <div className="flex justify-start item-center font-header text-md font-semibold space-x-2 text-bgsecondary cursor-pointer hover:text-black delay-100">
              <span class="material-symbols-outlined">keyboard_backspace</span>
              <div>back</div>
            </div>
          </Link>

          <div className="font-header text-3xl font-bold">Enter OTP</div>
          <div className="flex justify-start item-center font-header text-md font-semibold space-x-2 text-white">
            <span class="material-symbols-outlined">keyboard_backspace</span>
            <div>back</div>
          </div>
        </header>

        <div className="w-full flex flex-col justify-center items-center font-header text-md font-semibold pt-4 ">
          <div className="text-gray-600">OTP has been sent to</div>
          <div>reujoyamissah@gmail.com</div>
        </div>

        <div className="pt-8 font-body">
          <div className=" text-md font-semibold text-gray-600 pb-2">
            Enter OTP
          </div>
          <input
            type="text"
            name="OTP"
            className="bg-gray-100 border border-gray-300 w-full p-3 font-semibold text-md rounded-md mb-6"
          ></input>
          <Link to="/feed">
            <button className="w-full p-4 rounded-md bg-bgsecondary text-white font-semibold">
              Submit
            </button>
          </Link>
        </div>

        <div className="w-full flex justify-center items-center font-body font-semibold text-md py-8 space-x-1">
          <p className="text-gray-600">Didn't receive the message?</p>
          <p className=" hover:underline hover:underline-offset-4 cursor-pointer">
            Resend it
          </p>
        </div>
      </div>
    </div>
  );
}

export default OTP;
