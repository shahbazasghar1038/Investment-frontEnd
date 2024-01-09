import React from "react";

export default function Subscribe() {
  const [showModal, setShowModal] = React.useState(false);
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
          <div   className=" flex justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-md max-h-full">
        
        <div className="relative rounded-lg shadow bg-gray-700">
           
            <div className="flex items-center justify-between py-3 px-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold  text-white">
                      Wallet Address
                </h3>
                <button onClick={() => setShowModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crypto-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div> 
            <div className="p-3">
            <div className="px-4">
            <h3 className="text-lg font-semibold  text-red-600">
                      Important
                </h3>
                <ul className="my-3 space-y-3 text-left list-disc">
                    <li className="text-sm font-normal  text-gray-100 list-disc">
                     Copy wallet address and send amount according to plan you want to subscribe. 
                    </li> 
                    <li className="text-sm font-normal  text-gray-100 list-disc">
                     Take screenshot and upload from your profile as a proof. 
                    </li>   
                </ul>
                </div> 
                <ul className="my-4 space-y-3">
                    <li>
                        <a href="#" className="flex items-center justify-between p-3 text-xs font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            
                            <span className="   whitespace-nowrap">1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71</span>
                            <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Copy</span>
                        </a>
                    </li>   
                </ul>
                {/* <div>
                    <a href="#" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                        <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        Why do I need to connect with my wallet?</a>
                </div> */}
            </div>
        </div>
    </div>
</div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}