import { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { BaseFetch, setToken } from "../../utils/helper";
import { BASE_URL } from "../../utils/constant";
import toast from "react-hot-toast";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function VerificationModal({ open, close, accessToken, accessEmail }) {
 const [otp, setOtp] = useState("")
 const navigate = useNavigate()
 const [loading, setLoading] = useState(false)

 const submitOtp = async(e) => {
    e.preventDefault()
    setLoading(true)
    try {
    
    const response = await BaseFetch(`${BASE_URL}/users/verify_code?code=${otp}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
          },
    })

    if(!response) toast.error("could not submit otp try again!!")
    else {
        setToken(accessToken)
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

  const modalRef = useRef(null);

  return (
    <Dialog
      open={open}
      initialFocus={modalRef}
      onClose={() => close()}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-md w-full flex flex-col gap-4 items-center bg-white p-8 rounded-md">
            <div className="text-2xl font-semibold">Enter OTP</div>    
            <div className="text-xs font-gray-500">
                <span>OTP has been sent to</span>
                <span className="font-bold">{accessEmail}</span>
            </div>

            <form
            onSubmit={submitOtp}
            className="w-full">
                <div className="w-full space-y-4">
                    <label htmlFor='otp' className="font-semibold text-xs text-gray-300">
                        Enter Otp
                    </label>

                    <input
                    className="w-full p-3 rounded-md bg-gray-200"
                    placeholder="enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    />

                    <button
                    type="submit"
                    className="p-2 rounded-md w-full hover:bg-purple-500 bg-purple-600 cursor-pointer text-white">
                       {loading ? 'loading...' : 'submit'}
                    </button>

                </div>
            </form>

          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

export default VerificationModal;
