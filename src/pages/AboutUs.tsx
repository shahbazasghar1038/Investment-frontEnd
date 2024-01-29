import React from 'react'
import faq from "../img/svg/faq3.png"
const AboutUs = () => {
    return (
        <div className='px-4'>

            <div className='px-2 md:px-4'>
                <section className="spread-map tnc-header rounded-xl" >
                    <div className="container mx-auto sm:px-4">
                        <div className="flex flex-wrap  items-center">
                            <div className="lg:w-1/2 pr-4 pl-4 sm:w-full mt-s">
                                <div className="who-we-contant">
                                    <div className="dream-dots text-left fadeInUp" data-wow-delay="0.2s">

                                    </div>
                                    <h4 className="text-white fadeInUp font-bold" data-wow-delay="0.3s">About Us</h4>
                                    <p className="text-white">
                                        Discover GW Mining, a beacon in the digital investment realm. Our vision is financial
                                        empowerment through innovative, secure, and transparent solutions.
                                        Join us on this exciting journey!
                                    </p>
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
            <div className='w-[95%] md:w-[80%] mx-auto my-10 flex flex-col gap-y-4'>
                <h5 className='sub-heading'>

                    1. About Us
                </h5>

                <p className='tnc-decs'>
                    Welcome to GW Mining, your trusted partner in the world of digital investments and cryptocurrency.
                    Our mission is to empower individuals like you to explore the exciting opportunities presented by the ever-evolving
                    landscape of financial technology. Here at GW Mining,
                    we believe in making the world of cryptocurrency accessible to everyone,
                    providing a secure platform for users to invest and earn profits.
                </p>

                <h5 className='sub-heading'>
                    2. Our Vision
                </h5>
                <p className='tnc-decs'>
                    At GW Mining, we envision a future where financial empowerment is
                    within reach for individuals worldwide. We strive to be at the forefront of
                    the digital revolution, offering innovative solutions that enable our users to
                    harness the potential of cryptocurrencies.
                </p>
                <h5 className='sub-heading'>  3. What Sets Us Apart </h5>
                <p className='tnc-decs'>
                    <p className='font-semibold text-white'> Transparency: </p>
                    We pride ourselves on transparency in every aspect of our operations.
                    From our investment plans to profit calculations, we ensure that our users have
                    a clear understanding of how our platform works.

                    <p className='font-semibold text-white'> Security: </p>
                    Your security is our top priority. We implement robust security measures
                    to safeguard your data and transactions, providing you with a safe and secure
                    environment to explore the world of cryptocurrency investments.

                    <p className='font-semibold text-white'> User-Friendly Interface:  </p>
                    Our user interface is designed with simplicity in mind.
                    Whether you are a seasoned investor or a newcomer to the world of cryptocurrencies,
                    our platform is easy to navigate, ensuring a seamless experience for all users.

                    <p className='font-semibold text-white'> Innovative Investment Plans: </p>
                    Our investment plans are crafted to suit a variety of financial goals.
                    Whether you are looking for long-term gains or a shorter investment horizon,
                    GW Mining has a plan tailored for you.
                </p>

                <h5 className='sub-heading'> 4. How It Works </h5>




                <p className='font-semibold text-white'>Sign Up and Verification:</p>

                <p className='tnc-decs'>  Getting started with GW Mining is easy. Simply sign up, verify your email,
                    and you're ready to explore the world of digital investments.

                    <p className='font-semibold text-white'> Select Your Plan: </p>

                    Choose from our range of investment plans based on your preferences and financial objectives.

                    <p className='font-semibold text-white'> Payment and Proof: </p>
                    After selecting a plan, make the required payment manually to the provided wallet address.
                    Upload proof of payment through your dashboard to initiate your investment.

                    <p className='font-semibold text-white'>  Daily Profits:  </p>
                    Sit back and watch as you receive daily profits of 3% of your chosen investment package.
                    Your earnings will be calculated and credited to your account balance.

                    <p className='font-semibold text-white'>  Withdrawal:  </p> Once your account balance exceeds $20,
                    you can request a withdrawal. The approved amount will be transferred to the wallet address you provide.
                </p>



                <h5 className='sub-heading'> 5. Our Commitment to You</h5>
                <p className='tnc-decs'>
                    At GW Mining, we are committed to your success and financial well-being.
                    We believe in fostering a community of informed investors who can confidently navigate
                    the world of cryptocurrency. Rest assured, your data is kept confidential, and our team is
                    dedicated to providing you with exceptional support on your investment journey.





                </p>
                <p className='tnc-decs'>
                    Thank you for choosing GW Mining as your partner in the exciting world of digital
                    investments. We look forward to helping you achieve your financial goals!
                </p>
            </div>

        </div>
    )
}

export default AboutUs
