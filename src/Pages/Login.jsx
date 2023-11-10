import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BASE_URL } from "../utils/constant";
import { BaseFetch } from "../utils/helper";
import { useAuthContext } from "../Context/AuthContext";
import VerificationModal from "../components/Modals/VerificationModal";
import { useEffect } from "react";
// import LogoDevOutlinedIcon from "@mui/icons-material/LogoDevOutlined";

function Login() {
  const { login } = useAuthContext();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [OpenVerificationModal, setIsVerificationModal] = useState(false);
  const [verificationToken, setVerificationToken] = useState("");
  const [universities, setUniversities] = useState([])

  const fetchUniversities = async() => {
    return await BaseFetch(`${BASE_URL}/universities`)
  }

  useEffect(() => {
    fetchUniversities().then(uni => {
      setUniversities(uni)
    })
  }, [])

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const resetForm = () => {
    setValue("signup_username", "");
    setValue("signup_password", "");
    setValue("signup_email", "");
    setValue("login_password", "");
    setValue("login_email", "");
    setValue("signup_university", "");
  };

  const onLoginSubmit = async (data) => {
    setLoading(true);
    const userFormData = new FormData();
    userFormData.append("username", data?.login_email);
    userFormData.append("password", data?.login_password);

    try {
      const loginUser = await BaseFetch(`${BASE_URL}/login/access-token`, {
        method: "POST",
        body: userFormData,
      });

      if (!loginUser) throw new Error("user does not exist");
      console.log(":ks ", loginUser)
      const getUser = await BaseFetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${loginUser.access_token}`,
        },
      });

      if (!getUser) throw Error("could not get user");
      if (!getUser.is_verified) {
        const sendVerificationEmail = await BaseFetch(
          `${BASE_URL}/users/send_verification_code`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${loginUser.access_token}`,
            },
          }
        );

        if (!sendVerificationEmail)
          throw Error("unable to send verification email");
        setVerificationToken(loginUser.access_token);
        navigate(`/login/otp?email=${getUser?.email}`, {
          replace: true,
          state: { token: loginUser.access_token },
        });
      } else {
        login(loginUser.access_token, getUser);
        toast.success("login succesful");
        navigate("/feed", { replace: true });
      }
    } catch (err) {
      toast.error(`login err ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const onSignUpSubmit = async (data) => {
    setLoading(true);
    const user = {
      username: data?.signup_username,
      email: data?.signup_email,
      password: data?.signup_password,
      university_id: data?.signup_university
    };

    try {
      const createUser = await fetch(`${BASE_URL}/users/open`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!createUser.ok) throw new Error("not created");

      toast.success("created user successfully");
      setIsLogin(true);
    } catch (err) {
      toast.error("unable to login ", String(err));
    } finally {
      setLoading(false);
      resetForm();
    }
  };

  function setLogin() {
    setIsLogin(!isLogin);
  }

  return (
    <>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus facere obcaecati dolorem culpa. Vitae dolorum dicta
              aliquid adipisci cum velit mollitia, architecto, voluptas ipsam
              recusandae obcaecati asperiores eos, illum maxime!
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
                        placeholder="email"
                        className="px-4 py-4 w-full rounded-md placeholder-textsecondary"
                        {...register("login_email", { required: true })}
                        defaultValue={""}
                      />

                      {errors["login_email"] && (
                        <p className="text-red-600">
                          {errors["login_email"].message}
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
                      {loading ? "loading..." : "Login"}
                    </button>
                  </div>

                  <div className="text-sm font-secondaryheader font-normal tracking-wide mt-7 flex space-x-1 justify-start">
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
                        defaultValue={""}
                      >
                        <option value="" disabled>
                          Select your University
                        </option>
                        {universities.map((university) => (
                          <option
                            key={university.id}
                            value={university.id}
                          >
                            {university.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
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
      <VerificationModal
        open={OpenVerificationModal}
        close={() => setIsVerificationModal(false)}
        accessToken={verificationToken}
        accessEmail={getValues("login_email")}
      />
    </>
  );
}

export default Login;
