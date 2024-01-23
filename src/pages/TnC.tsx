import React from 'react'
import faq from "../img/svg/faq3.png"
const TnC = () => {
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
                                    <h4 className="text-white fadeInUp font-bold" data-wow-delay="0.3s">Terms of Services</h4>
                                    <p className="text-white">
                                        Creating an account is crucial for personalized access. Users are responsible for maintaining confidentiality,
                                        ensuring a secure environment.
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

                    1. Introduction
                </h5>

                <p className='tnc-decs'>
                    Welcome to GW Mining! These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our services.
                </p>

                <h5 className='sub-heading'>
                    2. Registration and Account
                </h5>
                <p className='tnc-decs'>
                    To access certain features of our website, you must register for an account. During the registration process, you will be required to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
                <h5 className='sub-heading'>  3. Verification and Security </h5>
                <p className='tnc-decs'>
                    Upon registration, users are required to verify their email address. This step is essential for account security and ensures the integrity of our user base. We employ industry-standard security measures to protect your data; however, you are responsible for maintaining the security of your account.
                </p>
                <h5 className='sub-heading'> 4. User Dashboard and Landing Page </h5>
                <p className='tnc-decs'>
                    Once registered and logged in, users will be directed to their personalized dashboard and landing page. Here, you can access information about our investment plans, view your earnings, and manage your account settings.
                </p>
                <h5 className='sub-heading'> 5. Investment Plans </h5>
                <p className='tnc-decs'>
                    Our platform offers various investment plans for users interested in earning profits through cryptocurrency mining, specifically Bitcoin (BTC). Users can choose a plan based on their preferences and financial goals.
                </p>
                <h5 className='sub-heading'> 6. Payment Process</h5>
                <p className='tnc-decs'>
                    Upon selecting a plan, users will be provided with a wallet address to manually transfer the specified fee. Payments must be made promptly, and users are required to upload proof of payment in the form of a screenshot from their dashboard.
                </p>
                <h5 className='sub-heading'> 7. Profit Distribution</h5>
                <p className='tnc-decs'>
                    Users will receive a daily profit of 3% of their chosen investment package. Profits are calculated and credited to the user's account balance.
                </p>
                <h5 className='sub-heading'> 8. Withdrawals</h5>
                <p className='tnc-decs'>
                    Users are eligible to withdraw their profits once the account balance exceeds $20. Withdrawal requests can be made through the designated withdrawal process, and the approved amount will be transferred to the user's provided wallet address.
                </p>
                <h5 className='sub-heading'> 9. Confidentiality</h5>
                <p className='tnc-decs'>
                    We prioritize the confidentiality and security of your data. Under no circumstances will your information be shared with third parties. Our commitment to data privacy ensures a secure and trustworthy experience for our users.
                </p>
                <h5 className='sub-heading'> 10. Compliance</h5>
                <p className='tnc-decs'>
                    Users are required to comply with all applicable laws and regulations while using our services. Any violation of these Terms may result in the suspension or termination of your account.
                </p>
                <h5 className='sub-heading'> 11. Modification of Terms</h5>
                <p className='tnc-decs'>
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. It is your responsibility to review these Terms regularly.
                </p>
                <h5 className='sub-heading'>12. Contact Information</h5>
                <p className='tnc-decs'>
                    If you have any questions or concerns regarding these Terms, please contact us at info@gwmining.com.

                    By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>



            </div>

        </div>
    )
}

export default TnC
