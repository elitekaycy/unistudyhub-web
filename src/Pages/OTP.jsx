import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { BaseFetch, setToken } from "../utils/helper";
import { BASE_URL } from "../utils/constant";
import toast from "react-hot-toast";

function OTP() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { state } = useLocation()

  const [otp, setOtp] = useState("")
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const resendVerificationCode = async() => {
    try {
      let resend = await BaseFetch(`${BASE_URL}/users/send_verification_code`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${state?.token}`
        }
      })

      if(!resend) throw Error("unable to send verification")
      toast.success(`sent verification code to ${searchParams?.get("email")}`)
    }
    catch(err) {
      toast.error(String(err))
    }

  }
 
  const submitOtp = async(e) => {
     e.preventDefault()
     setLoading(true)
     try {
     
     const response = await BaseFetch(`${BASE_URL}/users/verify_code?code=${otp}`, {
         method: 'POST',
         headers: {
             Authorization: `Bearer ${state?.token}`,
           },
     })

     if(!response) toast.error("could not submit otp try again!!")
     else {

         setToken(state?.token)
         toast("verified user successfully")
         navigate("/feed", { replace: true})
         
     }
 
     }
     catch(err) {
         toast.error(String(err))
     }
     finally {
         setLoading(false)
     }
 
  }
 
  return (
    <div className="bg-bgprimary lg:bg-[url('./src/assets/bg2.jpg')] min-h-screen bg-cover flex justify-center items-center">
      <div
        className="flex-col w-full mx-auto lg:w-4/12 p-4 bg-bgprimary rounded-xl  backdrop-blur border border-gray-300"
      >
        <header className="w-full flex justify-between items-center cursor-pointer ">
          <Link to="/login">
            <div className="flex justify-start item-center font-header text-md font-semibold space-x-2 text-bgsecondary cursor-pointer hover:text-black delay-100">
              <span className="material-symbols-outlined">keyboard_backspace</span>
              <div>back</div>
            </div>
          </Link>

          <div className="font-header text-3xl font-bold">Enter OTP</div>
          <div className="flex justify-start item-center font-header text-md font-semibold space-x-2 text-white">
            <span className="material-symbols-outlined">keyboard_backspace</span>
            <div>back</div>
          </div>
        </header>

        <div className="w-full flex flex-col justify-center items-center font-header text-md font-semibold pt-4 ">
          <div className="text-gray-600">OTP has been sent to</div>
          <div>{searchParams.get('email')}</div>
        </div>
        <form
        onSubmit={submitOtp}
        >
        <div className="pt-8 font-body">
          <div className=" text-md font-semibold text-gray-600 pb-2">
            Enter OTP
          </div>
          <input
            type="text"
            name="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="bg-gray-100 border border-gray-300 w-full p-3 font-semibold text-md rounded-md mb-6"
          ></input>
            <button
            type="submit"
            className="w-full p-4 rounded-md bg-bgsecondary hover:bg-purple-500 text-white font-semibold">
              {loading ? 'loading..' : 'Submit'}
            </button>
        </div>

        <div className="w-full flex justify-center items-center font-body font-semibold text-md py-8 space-x-1">
          <p className="text-gray-600">Didn't receive the message?</p>
          <p 
          onClick={resendVerificationCode}
          className=" hover:underline hover:underline-offset-4 cursor-pointer">
            Resend it
          </p>
        </div>
        </form>
      </div>
    </div>
  );
}

export default OTP;
