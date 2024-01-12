import React, { useState } from 'react'
import Subscribe from './Modal/Subscribe'

const Packages = () => {


  return (
    <div>
      <section >
        
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-50 dark:text-white">Elevate Your Finances with Exclusive Plans</h2>
          <p className="mb-5 font-light text-gray-100 sm:text-xl  "> Tailored Plans for Every Investor: Find the Perfect Package to Fuel Your Crypto Journey and Maximize Your Returns Today.</p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
           
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-[#5546d1] rounded-lg     shadow ">
              <h3 className="mb-4 text-2xl text-white font-semibold">Starter</h3>
              <p className="font-light text-gray-100 sm:text-lg ">Entry-level plan for beginners with basic features.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-gray-100 text-5xl font-extrabold">$50</span>
                  <span className="text-gray-100">/Lifetime</span>
              </div>
               
              <ul role="list" className="mb-8 text-gray-100 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>3% profit of $50</span>
                  </li>
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Refer only 1 friends </span>
                  </li>
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support: <span className="font-semibold">Lifetime</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Lifetime subscitption  </span>
                  </li>
              </ul>
              
          <Subscribe/>
          </div>
           
          <div className="flex flex-col text-gray-100 p-6 mx-auto max-w-lg text-center   bg-[#5546d1] rounded-lg   shadow  ">
              <h3 className="mb-4 text-2xl font-semibold text-white">Company</h3>
              <p className="mb-5 font-light text-gray-100 sm:text-xl">Balanced plan designed for growing portfolios.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl text-gray-100 font-extrabold">$100</span>
                  <span className="text-gray-100 ">/Lifetime</span>
              </div>
               
              <ul role="list" className="mb-8 text-gray-100 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>3% profit of $100</span>
                  </li>
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Refer 10 friends </span>
                  </li>
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support: <span className="font-semibold">Lifetime</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Lifetime subscitption  </span>
                  </li>
              </ul>
              <Subscribe/>
          </div>
           
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-100 bg-[#5546d1] rounded-lg   shadow  ">
              <h3 className="mb-4 text-2xl text-gray-100 font-semibold">Enterprise</h3>
              <p className="font-light  text-gray-100 sm:text-lg  ">Substantial investment with advanced features for maximum returns.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl text-gray-100 font-extrabold">$500</span>
                  <span className="text-gray-100">/Lifetime</span>
              </div>
               
              <ul role="list" className="mb-8 text-gray-100 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>3% profit of $500</span>
                  </li>
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Refer  100 friends </span>
                  </li>
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support: <span className="font-semibold">Lifetime</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Lifetime subscitption  </span>
                  </li>
              </ul> 
              <Subscribe/>
              </div>
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-100 bg-[#9302ff] rounded-lg   shadow  ">
              <h3 className="mb-4 text-2xl text-gray-100 font-semibold">Custom</h3>
              <p className="font-light  text-gray-100 sm:text-lg  ">Tailored to your needs, offering flexibility and customization.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-3xl text-gray-100 font-extrabold">Unlimited</span>
                  <span className="text-gray-100">/Lifetime</span>
              </div>
               
              <ul role="list" className="mb-8 text-gray-100 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>3% profit of Amount</span>
                  </li>
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Refer Unlimited friends </span>
                  </li>
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Ultimate flexibility  benefits </span>
                  </li>
                  <li className="flex items-center space-x-3">
                       
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Lifetime subscitption  </span>
                  </li>
              </ul>
              <Subscribe/>
               </div>

      </div>
  </div>
</section>
    </div>
  )
}

export default Packages
