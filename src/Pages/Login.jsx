import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import LogoDevOutlinedIcon from "@mui/icons-material/LogoDevOutlined";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLoginSubmit = (data) => {
    const user = {};
    user["username"] = data["login_username"];
    user["password"] = data["login_password"];
    console.log("login deatail data i s ", user);
  };

  const onSignUpSubmit = (data) => {
    const user = {};
    user["username"] = data["signup_username"];
    user["email"] = data["signup_email"];
    user["password"] = data["signup_password"];
    user["university"] = data["signup_university"]
    console.log("signup data ", user);
  };

  const universities = [
    {
      value: "knust",
      label: "Kwame Nkrumah University of Science and Technology (KNUST)",
    },
    { value: "ug", label: "University of Ghana (UG)" },
    { value: "ucc", label: "University of Cape Coast (UCC)" },
    { value: "uhas", label: "University of Health and Allied Sciences (UHAS)" },
    {
      value: "legon",
      label: "University of Professional Studies, Accra (UPSA)",
    },
    {
      value: "upsa",
      label: "University of Energy and Natural Resources (UENR)",
    },
    { value: "gtuc", label: "Ghana Technology University College (GTUC)" },
    {
      value: "gimpa",
      label: "Ghana Institute of Management and Public Administration (GIMPA)",
    },
    {
      value: "uccs",
      label: "University of Cape Coast - School of Medical Sciences (UCCSMS)",
    },
    { value: "uds", label: "University for Development Studies (UDS)" },
    { value: "kpoly", label: "Koforidua Technical University (KPoly)" },
    { value: "takoradi", label: "Takoradi Technical University (TTU)" },
    { value: "kstu", label: "Kumasi Technical University (KSTU)" },
    {
      value: "wiuc",
      label: "Wisconsin International University College (WIUC)",
    },
    { value: "cktu", label: "Cape Coast Technical University (CCTU)" },
    {
      value: "wa",
      label: "University for Development Studies, Wa Campus (UDS-Wa)",
    },
  ];

  function setLogin() {
    setIsLogin(!isLogin);
  }

  return (
    <div className="bg-bgprimary lg:bg-[url('./src/assets/bg2.jpg')] min-h-screen bg-cover flex justify-center items-center">
      <div className="flex w-full mx-auto lg:w-9/12 p-4 bg-bgprimary rounded-md  backdrop-blur">
        <div className="hidden md:flex w-1/2  md:px-4 md:py-10 lg:px-6 lg:py-12 xl:px-8 xl:py-14 text-textsecondary flex-col space-y-6 relative">
          <div className="space-y-3">
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
          {isLogin ? (
            <form onSubmit={handleSubmit(onLoginSubmit)}>
              <div className="bg-bgtertiary h-full rounded-xl p-7 text-textsecondary">
                <div className="space-y-1 pt-3 pb-14">
                  <h1 className="text-2xl font-header font-bold tracking-wide">
                    Login
                  </h1>
                  <p className="text-sm font-normal font-secondaryheader tracking-wide">
                    Welcome Back. Please login to your account
                  </p>
                </div>

                <div className="flex-col space-y-5 text-xs text-textsecondary pb-6 font-body font-medium">
                  <div>
                    <input
                      type="text"
                      placeholder="Username"
                      className="px-4 py-4 w-full rounded-md placeholder-textsecondary"
                      {...register("login_username", { required: true })}
                      defaultValue={""}
                    />

                    {errors["login_username"] && (
                      <p className="text-red-600">
                        {errors["login_username"].message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Password"
                      className="px-4 py-4 w-full rounded-md placeholder-textsecondary"
                      {...register("login_password", { required: true })}
                      defaultValue={""}
                    />
                    {errors["login_password"] && (
                      <p className="text-red-600">
                        {errors["login_password"].message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-between mb-10 text-sm font-body font-bold text-gray-400">
                  <div className="flex justify-start items-center space-x-1">
                    <input type="checkbox" />
                    <p className="m-0 p-0 font-medium">Remember me</p>
                  </div>
                  <div className="cursor-pointer underline-0 hover:underline hover:underline-offset-4 text-gray-400 font-medium">
                    Forgot Password
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-bgsecondary text-textprimary py-3 rounded-md text-sm font-body font-bold 
                hover:opacity-70 hover:text-opacity-90 transition-opacity ease-in duration-100"
                  >
                    Login
                  </button>
                </div>

                <div className="text-sm font-secondaryheader font-normal tracking-wide mt-7 flex space-x-2 justify-start">
                  <p className="text-gray-400 font-medium">Not a member? </p>
                  <p
                    className="text-bgsecondary cursor-pointer hover:underline hover:underline-offset-4 font-medium"
                    onClick={setLogin}
                  >
                    Sign Up
                  </p>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit(onSignUpSubmit)}>
              <div className="bg-bgtertiary h-full rounded-xl p-7 text-textsecondary">
                <div className="space-y-1 pt-3 pb-14">
                  <h1 className="text-2xl font-header font-bold tracking-wide">
                    Sign Up
                  </h1>
                  <p className="text-sm font-normal font-secondaryheader tracking-wide">
                    Don't worry, this would take just a minute
                  </p>
                </div>

                <div className="flex-col space-y-5 text-xs text-textsecondary mb-14 font-body font-medium">
                  <div>
                    <input
                      type="text"
                      placeholder="Username"
                      className="px-4 py-4 w-full rounded-md placeholder-textsecondary"
                      {...register("signup_username", {
                        required: true,
                        minLength: 4,
                      })}
                    />
                    {errors["signup_username"] && (
                      <p>{errors["signup_username"].message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="email"
                      className="px-4 py-4 w-full rounded-md placeholder-textsecondary"
                      {...register("signup_email", {
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address",
                        },
                      })}
                    />
                    {errors["signup_email"] && (
                      <p className="text-red-600">
                        {errors["signup_email"].message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="px-4 py-4 w-full rounded-md placeholder-textsecondary"
                      {...register("signup_password", {
                        required: true,
                        minLength: {
                          value: 8,
                          message: "Password must have at least 8 characters",
                        },
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                          message:
                            "Password must contain at least one uppercase letter, one lowercase letter, and one number and one symbol atleast.",
                        },
                      })}
                    />
                    {errors["signup_password"] && (
                      <p className="text-red-600">
                        {errors["signup_password"].message}
                      </p>
                    )}
                  </div>
                  <div className="text-textsecondary">
                    <select
                      name="universities"
                      {...register("signup_university", { required: true })}
                      className="px-4 py-4 w-full rounded-md placeholder-textsecondary appearance-none"
                    >
                      <option value="" disabled>
                        Select your University
                      </option>
                      {universities.map((university) => (
                        <option key={university.value} value={university.value}>
                          {university.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* <div className="flex justify-between mb-10 text-sm font-body font-bold text-gray-400">
                <div className="flex justify-start items-center space-x-1">
                  <input type="checkbox" />
                  <p className="m-0 p-0 font-medium">Remember me</p>
                </div>
                <div className="cursor-pointer underline-0 hover:underline hover:underline-offset-4 text-gray-400 font-medium">
                  Forgot Password
                </div>
              </div> */}

                <div>
                  <button
                    className="w-full bg-bgsecondary text-textprimary py-3 rounded-md text-sm font-body font-bold 
                hover:opacity-70 hover:text-opacity-90 transition-opacity ease-in duration-100"
                  >
                    Sign Up
                  </button>
                </div>

                <div className="text-sm font-secondaryheader font-normal tracking-wide mt-7 flex space-x-2 justify-start">
                  <p className="text-gray-400 font-medium">
                    Already a member?{" "}
                  </p>
                  <p
                    className="text-bgsecondary cursor-pointer hover:underline hover:underline-offset-4 font-medium"
                    onClick={setLogin}
                  >
                    Login
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
