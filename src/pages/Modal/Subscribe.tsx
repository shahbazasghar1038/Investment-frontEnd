import { useAuth } from "@/hooks/useAuth";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Subscribe() {
  const [showModal, setShowModal] = React.useState(false);

  const [isCopied, setIsCopied] = useState(false);
  const referralCode = '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71'
  const handleCopyClick = () => {

    if (referralCode) {
      navigator.clipboard.writeText(referralCode);
      setIsCopied(true);

      // Reset the "Copied" state after a certain duration if needed
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  const { user } = useAuth();
  return (
    <>
      <button
        className="text-[#4033b7] button-bg  font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Subscribe
      </button>

      {showModal ? (
        <>
          <div className=" flex justify-center   fixed top-0 right-0 left-0 z-[91] items-center     h-[100%] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full z-[99]">

              <div className="relative rounded-lg shadow bg-[#100f43] ">

                <div className="flex items-center justify-between py-3 px-5 border-b rounded-t dark:border-gray-600">

                  <h3 className="text-lg font-semibold  text-[#f8f517]">
                    {user ? 'Wallet Address' : 'Please Login'}
                  </h3>

                  <button onClick={() => setShowModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crypto-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {user ?
                  <div className="p-3">
                    <div className="px-4">
                      <h3 className="text-lg font-semibold  text-red-600">
                        Important
                      </h3>
                      <ul className="my-3 space-y-3 text-left list-disc text-[#00ffeb]">
                        <li className="text-sm font-normal    list-disc">
                          Copy wallet address and send amount according to plan you want to subscribe.
                        </li>
                        <li className="text-sm font-normal    list-disc">
                          Take screenshot and upload from your Dashboard as a proof.
                        </li>
                      </ul>
                    </div>
                    <div className="my-4 space-y-3">

                      <div className=" relative flex items-center justify-between p-3 text-xs font-bold text-gray-50 rounded-lg bg-[#252471]   ">

                        <div className="w-[80%] overflow-hidden">{referralCode}</div>
                        <span
                          className={`absolute inline-flex items-center justify-center px-2 py-0.5 right-3  text-xs font-medium  bg-gray-400 rounded cursor-pointer ${isCopied ? 'bg-green-400 text-white' : 'text-gray-100'}`}
                          onClick={handleCopyClick}
                        >
                          {isCopied ? 'Copied!' : 'Copy'}
                        </span>
                      </div>

                    </div>
                  </div>
                  :
                  <div className="py-5">
                    <div className="inline-flex items-center text-lg font-semibold text-[#00ffeb] hover:underline  ">

                      Please Login first to Subscribe any package</div>
                    <Link to="/login" className="more-btn mr-3 mt-5">Login</Link>

                  </div>
                }
              </div>
            </div>
            {showModal && <div onClick={() => { setShowModal(false) }} className="opacity-40 fixed inset-0 z-[50] bg-blue-500"></div>}
          </div>
        </>
      ) : null}
    </>
  );
}