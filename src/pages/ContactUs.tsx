import React from 'react'
import faq from "../img/svg/faq3.png"
import { Link } from 'react-router-dom'
const ContactUs = () => {
    return (
        <div className='px-4'>

            <div className='px-2 md:px-4'>
                <section className="spread-map tnc-header rounded-xl" >
                    <div className="container mx-auto sm:px-4">
                        <div className="flex flex-wrap  items-center">
                            <div className="lg:w-1/2 pr-4 pl-4 w-full mt-s">
                                <div className="who-we-contant">
                                    <h4 className="text-white fadeInUp font-bold" data-wow-delay="0.3s">Contact Us</h4>

                                    <form>
                                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-50 dark:text-white"> Full Name</label>
                                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                            </div>
                                            <div>
                                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-50 dark:text-white">Email</label>
                                                <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                                            </div>


                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-50 dark:text-white">You message</label>
                                            <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                                        </div>

                                        <Link className="inline-block w-full align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline more-btn mt-5 fadeInUp" data-wow-delay="0.6s" to="/plans">Submit</Link>

                                    </form>

                                </div>
                            </div>

                            <div className="lg:w-1/2 pr-4 pl-4 sm:w-full">
                                <div className="welcome-meter fadeInUp" data-wow-delay="0.7s">
                                    <img draggable="false" src={faq} className="center-block" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
}

export default ContactUs
