import React from "react";
// import LogoDevOutlinedIcon from "@mui/icons-material/LogoDevOutlined";

function Login() {
  return (
    <div className="bg-bgprimary lg:bg-[url('./src/assets/bg2.jpg')] min-h-screen bg-cover flex justify-center items-center">
      <div
        className="flex w-full mx-auto lg:w-9/12 p-4 bg-bgprimary rounded-md  backdrop-blur
        
      "
      >
        <div className="hidden md:flex w-1/2  md:px-4 md:py-10 lg:px-6 lg:py-12 xl:px-8 xl:py-14 text-textsecondary flex-col space-y-6 relative">
          <div className="space-y-3">
            {/* <LogoDevOutlinedIcon
              className="text-textsecondary"
              sx={{ fontSize: 50 }}
            /> */}
            <div className="space-y-1">
              <h1 className="text-3xl font-header font-bold tracking-wide">
                UniStudy Hub
              </h1>
              <p className="text-lg font-normal font-header tracking-wide">
                localhosts .Inc
              </p>
            </div>
          </div>

          <p className="text-sm font-body font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            facere obcaecati dolorem culpa. Vitae dolorum dicta aliquid adipisci
            cum velit mollitia, architecto, voluptas ipsam recusandae obcaecati
            asperiores eos, illum maxime!
          </p>
          <div className="absolute space-y-2 bottom-0 text-sm font-body font-normal pb-14">
            <p>Contact</p>
            <p>reujoyamissah@gmail.com | +233 551 321 749</p>
          </div>
        </div>

        {/* login main section ----====>>> debugMQ md:border md:border-red-500 lg:border-blue-500 xl:border-green-500*/}
        <div className="w-full md:w-1/2 md:p-6 lg:p-8 xl:p-12 ">
          <div className="bg-bgtertiary h-full rounded-xl p-7 text-textsecondary">
            <div className="space-y-1 pt-3 pb-14">
              <h1 className="text-2xl font-header font-bold tracking-wide">
                Login
              </h1>
              <p className="text-sm font-normal font-secondaryheader tracking-wide">
                Welcome Back. Please login to your account
              </p>
            </div>

            <div className="flex-col space-y-5 text-xs text-bgprimary pb-6 font-body font-bold">
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="px-4 py-4 w-full rounded-md placeholder-textsecondary"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Password"
                  className="px-4 py-4 w-full rounded-md placeholder-textsecondary"
                />
              </div>
            </div>

            <div className="flex justify-between mb-10 text-sm font-body font-bold ">
              <div className="flex justify-start items-center space-x-1">
                <input type="checkbox" />
                <p className="m-0 p-0">Remember me</p>
              </div>
              <div className="cursor-pointer underline-0 hover:underline hover:underline-offset-4">
                Forgot Password
              </div>
            </div>

            <div>
              <button
                className="w-full bg-bgsecondary text-textprimary py-3 rounded-md text-sm font-body font-bold 
                hover:opacity-70 hover:text-opacity-90 transition-opacity ease-in duration-100"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
