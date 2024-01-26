import React from 'react'
import logo from '../img/core-img/logo2.png'
import platform1 from '../img/core-img/platform.png'
import about1 from '../img/core-img/platform3.png'
import tradingStroke from "../img/svg/trading-strokes.svg"
import joinBottom from '../img/svg/joinBottom.svg'
import part1 from '../img/ico-platforms/1.png'
import part2 from '../img/ico-platforms/2.png'
import part3 from '../img/ico-platforms/3.png'
import part4 from '../img/ico-platforms/4.png'
import part5 from '../img/ico-platforms/5.png'
import part6 from '../img/ico-platforms/6.png'
import feature1 from "../img/features/feature-1.svg"
import feature2 from "../img/features/feature-2.svg"
import feature3 from "../img/features/feature-3.svg"
import feature4 from "../img/features/feature-4.svg"
import feature5 from "../img/features/feature-5.svg"
import feature6 from "../img/features/feature-6.svg"
import feature7 from "../img/features/feature-7.svg"
import feature8 from "../img/features/feature-8.svg"
import part7 from "../img/core-img/platform.png"
import rings from "../img/core-img/rings.png"
import whitepaper from "../img/core-img/whitepaper2.png"
import sectionIcon from "../img/svg/section-icon-11.svg"
import distribution from "../img/core-img/distribution.png"

import graph1 from "../img/core-img/graph-11.png"
import f1 from "../img/features/f1.svg"
import f2 from "../img/features/f2.svg"
import f3 from "../img/features/f3.svg"
import f4 from "../img/features/f4.svg"
import f5 from "../img/features/f5.svg"
import f6 from "../img/features/f6.svg"

import faq from "../img/svg/faq3.png"
import team1 from "../img/team-img/1.jpeg"
import team2 from "../img/team-img/2.jpeg"
import team3 from "../img/team-img/3.jpeg"
import team4 from "../img/team-img/4.jpeg"

import computer from "../img/core-img/computer.png"
import { Link } from 'react-router-dom'
// import feature7 from "../img/features/feature-7.svg"
// import feature8 from "../img/features/feature-8.svg"

const Lander = () => {
    return (
        <div>
            {/* <!-- Preloader --> */}
            {/* <div id="preloader">
        <div className="preload-content">
            <div id="new-load"></div>
        </div>
    </div> */}



            {/* <!-- ##### Welcome Area Start ##### --> */}
            <section className="hero-section moving   section-padding" id="home">
                <div className="moving-bg"></div>
                {/* <!-- Hero Content --> */}
                <div className="hero-section-content">

                    <div className="container mx-auto sm:px-4 ">
                        <div className="flex flex-wrap items-center">
                            {/* <!-- Welcome Content --> */}
                            <div className="w-full lg:w-2/5   md:w-full px-4 ">
                                <div className="welcome-content px-1">
                                    <div className="promo-section">
                                        <h3 className="special-head dark text-left">Unlock Digital Wealth with GW MINING </h3>
                                    </div>
                                    <h1 className='light-green text-left px-2'>Empower Your Finances through Innovative Crypto Mining Solutions </h1>
                                    <p className="w-text text-left px-2">Elevate your finances with cutting-edge Bitcoin mining. Join GW MINING for secure, transparent, and profitable opportunities. Start your journey to financial freedom today.</p>
                                    <div className="dream-btn-group flex justify-start">
                                        <Link to="plans" className="more-btn mr-3">Get started</Link>
                                        <Link to="plans" className="more-btn ">Buy Plan</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 pr-4 pl-4">
                                <div className="dotted   flex justify-center items-center" >
                                    <img draggable="false" src={platform1} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ##### Welcome Area End ##### --> */}

            {/* <!-- ##### About Us Area Start ##### --> */}
            <section className="about-us-area section-padding-100 clearfix" id="about">

                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap  items-center">
                        <div className="w-full lg:w-1/2 pr-4 pl-4 offset-lg-0 md:w-full pr-4 pl-4 no-padding-left">
                            <div className="welcome-meter fadeInUp" data-wow-delay="0.7s">
                                <img draggable="false" src={about1} alt="" />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 pr-4 pl-4 offset-lg-0">
                            <div className="who-we-contant mt-s">
                                <div className="dream-dots text-left fadeInUp" data-wow-delay="0.2s" >
                                    <span className="gradient-text ">Decentralized Trading Platform</span>
                                </div>
                                <h4 className="fadeInUp  light-green" data-wow-delay="0.3s">Connect blockchain to the real world and start crypto trading.</h4>
                                <p className="fadeInUp" data-wow-delay="0.4s">Dive into the future of wealth creation with GW MINING. Invest in Bitcoin mining effortlessly, and amplify your gains by referring friends. Experience daily profits, secure transactions, and a user-friendly interface. Start mining and sharing the prosperity today!</p>
                                <p className="fadeInUp" data-wow-delay="0.5s"> Stay ahead of market trends, diversify your portfolio, and experience the true potential of blockchain in real-world applications. Join us in revolutionizing the way you connect, trade, and thrive in the ever-evolving landscape of digital assets. Start your crypto trading adventure with GW MINING.</p>
                                <Link className="more-btn mt-30" to="/plans"> More About Plans</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- ##### About Us Area End ##### --> */}

            {/* <!-- ##### Our Services Area Start ##### --> */}
            <section id='howitworks' className="join-us section-padding-0-100 clearfix">
                <div className="container mx-auto sm:px-4">

                    <div className="section-heading text-center ">
                        {/* <!-- Dream Dots --> */}
                        <div className="dream-dots justify-center fadeInUp" data-wow-delay="0.2s">
                            <span>Our Services</span>
                        </div>
                        <h2 className="fadeInUp light-green" data-wow-delay="0.3s">How it works</h2>
                        <p className="fadeInUp" data-wow-delay="0.4s"> Explore our comprehensive guide through 6 cards. Learn how to start, invest, earn, secure, refer, and thrive in cryptocurrency mining.</p>
                    </div>


                    <div className="flex flex-wrap  dark-row pt-12">
                        <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/3 pr-4 pl-4">
                            <div className="contribution-c-wapper has-arrow-right-lg has-arrow-top-md has-arrow-right-md has-arrow-down-sm">
                                {/* <!-- Content --> */}
                                <div className="service_single_content text-center mb-30 fadeInUp" data-wow-delay="0.2s">
                                    {/* <!-- Icon --> */}
                                    <div className="cycle_icon">
                                        <span className="gradient-t orange">1</span>
                                    </div>
                                    <h6 className='light-green'>Sign Up Platform</h6>
                                    <p>Join our platform in minutes. Unlock exclusive benefits and access advanced features. Your gateway to a seamless and rewarding crypto journey.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 mt-sm-30">
                            <div className="contribution-c-wapper has-arrow-right-lg has-arrow-bottom-md has-arrow-down-sm">
                                <div className="service_single_content text-center mb-30 fadeInUp" data-wow-delay="0.3s">
                                    {/* <!-- Icon --> */}
                                    <div className="cycle_icon">
                                        <span className="gradient-t pink">2</span>
                                    </div>
                                    <h6 className='light-green'>Buy Plan</h6>
                                    <p>Explore tailored investment plans. Choose the perfect package to kickstart your mining journey. Invest securely and watch your earnings grow.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-full pr-4 pl-4 lg:w-1/3 pr-4 pl-4 mt-s">
                            <div className="contribution-c-wapper has-arrow-top-md has-arrow-down-sm">
                                <div className="service_single_content text-center mb-30 fadeInUp" data-wow-delay="0.4s">
                                    {/* <!-- Icon --> */}
                                    <div className="cycle_icon">
                                        <span className="gradient-t blue">3</span>
                                    </div>
                                    <h6 className='light-green'>Capture Your Success</h6>
                                    <p> After choosing a plan, take a screenshot as proof of your investment. Upload it through your dashboard for a transparent and secure transaction.</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/3 pr-4 pl-4 md:w-1/4 hidden-md hidden-sm hidden-xs text-center">
                            <img draggable="false" src={joinBottom} className="arrow-img rotated w-full" alt="" />
                        </div>
                        <div className="lg:w-1/3 pr-4 pl-4 text-center hidden-md hidden-sm hidden-xs md:w-2/4">
                            <div className="dream-dots justify-center fadeInUp" data-wow-delay="0.2s">
                                <span>Join us</span>
                            </div>
                            <h2 className="text-3xl light-green" data-wow-delay="0.3s">Contribution Cycle</h2>
                        </div>
                        <div className="lg:w-1/3 pr-4 pl-4 md:w-1/4 hidden-md hidden-sm hidden-xs text-center">
                            <img draggable="false" src={joinBottom} className="arrow-img w-full" alt="" />
                        </div>

                        <div className="w-full md:w-full pr-4 pl-4 lg:w-1/3 pr-4 pl-4 mt-30">
                            <div className="contribution-c-wapper has-arrow-left-lg has-arrow-bottom-md has-arrow-down-sm">
                                {/* <!-- Content --> */}
                                <div className="service_single_content text-center mb-30 fadeInUp" data-wow-delay="0.2s">
                                    {/* <!-- Icon --> */}
                                    <div className="cycle_icon">
                                        <span className="gradient-t green">6</span>
                                    </div>
                                    <h6 className='light-green'>Invite Friends</h6>
                                    <p>Share the wealth! Invite friends to join and earn together. Unlock bonuses and watch your network grow. It's not just mining; it's a community of prosperity.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 mt-30">
                            <div className="contribution-c-wapper has-arrow-left-lg has-arrow-left-md has-arrow-down-sm">
                                <div className="service_single_content text-center mb-30 fadeInUp" data-wow-delay="0.3s">
                                    {/* <!-- Icon --> */}
                                    <div className="cycle_icon">
                                        <span className="gradient-t green">5</span>
                                    </div>
                                    <h6 className='light-green'>Deposit Money</h6>
                                    <p>Choose your desired plan, copy the wallet address, and effortlessly deposit money to kickstart your crypto mining journey. Seamless transactions for instant access.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 mt-30">
                            <div className="contribution-c-wapper ">
                                <div className="service_single_content text-center mb-30 fadeInUp" data-wow-delay="0.4s">
                                    {/* <!-- Icon --> */}
                                    <div className="cycle_icon">
                                        <span className="gradient-t pink">4</span>
                                    </div>
                                    <h6 className='light-green'>Withdraw Money</h6>
                                    <p>User-friendly withdrawals, anytime. Submit a request to the admin panel, and your funds will be processed within 24 hours. Enjoy hassle-free and secure transactions.                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* <!-- ##### About Us Area Start ##### --> */}
            <section className="about-us-area section-padding-0-100 clearfix">

                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap  items-center">

                        <div className="w-full lg:w-1/2 pr-4 pl-4 offset-lg-0">
                            <div className="who-we-contant">
                                <div className="dream-dots text-left fadeInUp" data-wow-delay="0.2s">
                                    <span className="gradient-text ">Invest with Confidence</span>
                                </div>
                                <h4 className="fadeInUp light-green" data-wow-delay="0.3s">Build Your Network, Multiply Your Gains.</h4>
                                <p className="fadeInUp" data-wow-delay="0.4s">Dive into secure cryptocurrency mining, ensuring a steady and reliable return on your investment. Our platform combines financial growth with peace of mind, providing a seamless and rewarding experience for every investor.</p>
                                <p className="fadeInUp" data-wow-delay="0.5s">Experience hassle-free financial transactions on our platform. Securely deposit funds to start your mining journey and withdraw your profits with ease whenever you desire. Your financial transactions, simplified and secure.</p>
                                <Link className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline more-btn mt-30 fadeInUp" data-wow-delay="0.6s" to="/plans">About Plans</Link>
                            </div>
                        </div>

                        <img draggable="false" className="supportImg" src={tradingStroke} alt="image" />
                        <div className="w-full lg:w-1/2 pr-4 pl-4 offset-lg-0 md:w-full pr-4 pl-4 mt-30 no-padding-left">
                            <div className="welcome-meter floating-anim fadeInUp" data-wow-delay="0.7s">
                                <img draggable="false" src={computer} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- ##### Platform About Us Area End ##### --> */}

            <div className="trust-section section-padding-0-70">
                <div className="section-heading text-center">
                    {/* <!-- Dream Dots --> */}
                    <div className="dream-dots justify-center wow fadeInUp" data-wow-delay="0.2s">
                        <span>ICO Rating</span>
                    </div>
                    <h2 className="wow fadeInUp light-green" data-wow-delay="0.3s">We are trusted</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.4s">Explore success with industry leaders. These trusted partnerships amplify our commitment to excellence and innovation in cryptocurrency mining.</p>
                </div>
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap ">
                        <div className="w-full sm:w-1/2 pr-4 pl-4 md:w-1/4 pr-4 pl-4 lg:w-1/6 pr-4 pl-4">
                            {/* <!-- Single Cool Fact --> */}
                            <div className="trust-item text-center wow fadeInUp" data-wow-delay="0.2s">
                                <div className="ico-platform-logo">
                                    <img draggable="false" src={part1} alt="" />
                                </div>
                                {/* <!-- Single Cool Detail --> */}
                                <div className="check">
                                    {/* <!-- <div className="value">8.9</div> --> */}
                                    <div className="check-icon"></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 pr-4 pl-4 md:w-1/4 pr-4 pl-4 lg:w-1/6 pr-4 pl-4">
                            {/* <!-- Single Cool Fact --> */}
                            <div className="trust-item text-center wow fadeInUp" data-wow-delay="0.3s">
                                <div className="ico-platform-logo">
                                    <img draggable="false" src={part2} alt="" />
                                </div>
                                {/* <!-- Single Cool Detail --> */}
                                <div className="check">
                                    <div className="value">8.9</div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 pr-4 pl-4 md:w-1/4 pr-4 pl-4 lg:w-1/6 pr-4 pl-4">
                            {/* <!-- Single Cool Fact --> */}
                            <div className="trust-item text-center wow fadeInUp" data-wow-delay="0.4s">
                                <div className="ico-platform-logo">
                                    <img draggable="false" src={part3} alt="" />
                                </div>
                                {/* <!-- Single Cool Detail --> */}
                                <div className="check">
                                    {/* <!-- <div className="value">8.9</div> --> */}
                                    <div className="check-icon"></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 pr-4 pl-4 md:w-1/4 pr-4 pl-4 lg:w-1/6 pr-4 pl-4">
                            {/* <!-- Single Cool Fact --> */}
                            <div className="trust-item text-center wow fadeInUp" data-wow-delay="0.5s">
                                <div className="ico-platform-logo">
                                    <img draggable="false" src={part4} alt="" />
                                </div>
                                {/* <!-- Single Cool Detail --> */}
                                <div className="check">
                                    {/* <!-- <div className="value">8.9</div> --> */}
                                    <div className="check-icon"></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 pr-4 pl-4 md:w-1/4 pr-4 pl-4 lg:w-1/6 pr-4 pl-4">
                            {/* <!-- Single Cool Fact --> */}
                            <div className="trust-item text-center wow fadeInUp" data-wow-delay="0.6s">
                                <div className="ico-platform-logo">
                                    <img draggable="false" src={part5} alt="" />
                                </div>
                                {/* <!-- Single Cool Detail --> */}
                                <div className="check">
                                    <div className="value">7.4</div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 pr-4 pl-4 md:w-1/4 pr-4 pl-4 lg:w-1/6 pr-4 pl-4">
                            {/* <!-- Single Cool Fact --> */}
                            <div className="trust-item text-center wow fadeInUp" data-wow-delay="0.7s">
                                <div className="ico-platform-logo">
                                    <img draggable="false" src={part6} alt="" />
                                </div>
                                {/* <!-- Single Cool Detail --> */}
                                <div className="check">
                                    {/* <!-- <div className="value">8.9</div> --> */}
                                    <div className="check-icon"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <!-- ##### why choose us Our Main feature  ##### --> */}
            <section className="our_services_area section-padding-0-70 clearfix" id="services">
                <div className="container mx-auto sm:px-4">

                    <div className="section-heading text-center">
                        {/* <!-- Dream Dots --> */}
                        <div className="dream-dots justify-center fadeInUp" data-wow-delay="0.2s">
                            <span>Why choose us</span>
                        </div>
                        <h2 className="fadeInUp light-green" data-wow-delay="0.3s">Our Main Features</h2>
                        <p className="fadeInUp" data-wow-delay="0.4s">Your Gateway to Prosperity. Explore unparalleled security, cutting-edge technology, and approach for a rewarding cryptocurrency mining experience.


                        </p>
                    </div>


                    <div className="flex flex-wrap ">
                        <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                            {/* <!-- Content --> */}
                            <div className="service_single_content text-left px-4 py-6 mb-30 fadeInUp" data-wow-delay="0.2s">
                                {/* <!-- Icon --> */}
                                <div className="service_icon">
                                    <img draggable="false" src={feature1} alt="" />
                                </div>
                                <h6 className='light-green'>Instant settlement</h6>
                                <p>Swiftly access your earnings with our instant settlement feature, ensuring your profits are readily available when you need them.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                            {/* <!-- Content --> */}
                            <div className="service_single_content text-left px-4 py-6 mb-30" data-wow-delay="0.3s">
                                {/* <!-- Icon --> */}
                                <div className="service_icon">
                                    <img draggable="false" src={feature2} alt="" />
                                </div>
                                <h6 className='light-green'>Flexibility</h6>
                                <p>Tailor your investment strategy with flexible options, adapting to your financial goals and preferences seamlessly for maximum convenience.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                            {/* <!-- Content --> */}
                            <div className="service_single_content text-left px-4 py-6 mb-30" data-wow-delay="0.4s">
                                {/* <!-- Icon --> */}
                                <div className="service_icon">
                                    <img draggable="false" src={feature3} alt="" />
                                </div>
                                <h6 className='light-green'>Blockchain technology</h6>
                                <p>Harness the power of blockchain for secure, transparent, and efficient transactions, guaranteeing the integrity of your mining experience.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                            {/* <!-- Content --> */}
                            <div className="service_single_content text-left px-4 py-6 mb-30" data-wow-delay="0.5s">
                                {/* <!-- Icon --> */}
                                <div className="service_icon">
                                    <img draggable="false" src={feature4} alt="" />
                                </div>
                                <h6 className='light-green'>Experienced team</h6>
                                <p>Trust in our seasoned team's expertise, guiding you through the dynamic world of cryptocurrency mining with precision and reliability.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                            {/* <!-- Content --> */}
                            <div className="service_single_content text-left px-4 py-6 mb-30" data-wow-delay="0.6s">
                                {/* <!-- Icon --> */}
                                <div className="service_icon">
                                    <img draggable="false" src={feature5} alt="" />
                                </div>
                                <h6 className='light-green'>Connect free</h6>
                                <p>Seamlessly join our platform without hidden fees. Experience the freedom of connection without unnecessary financial constraints.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                            {/* <!-- Content --> */}
                            <div className="service_single_content text-left px-4 py-6 mb-30" data-wow-delay="0.7s">
                                {/* <!-- Icon --> */}
                                <div className="service_icon">
                                    <img draggable="false" src={feature6} alt="" />
                                </div>
                                <h6 className='light-green'>AI matching</h6>
                                <p>Maximize returns with our AI-driven matching system, ensuring optimal profitability by intelligently aligning your investments.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                            {/* <!-- Content --> */}
                            <div className="service_single_content text-left px-4 py-6 mb-30" data-wow-delay="0.7s">
                                {/* <!-- Icon --> */}
                                <div className="service_icon">
                                    <img draggable="false" src={feature7} alt="" />
                                </div>
                                <h6 className='light-green'>Low cost</h6>
                                <p>Get cost-effective solutions, minimizing expenses while maximizing the potential for robust returns on your investments.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                            {/* <!-- Content --> */}
                            <div className="service_single_content text-left px-4 py-6 mb-30" data-wow-delay="0.7s">
                                {/* <!-- Icon --> */}
                                <div className="service_icon">
                                    <img draggable="false" src={feature8} alt="" />
                                </div>
                                <h6 className='light-green'>Highest Profit Ratio</h6>
                                <p>Experience a high profit ratio, optimizing your earnings through our platform's advanced technology and strategic investment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- #####Powerfull platform  ##### --> */}
            <section className="features section-padding-0-100 ">

                <div className="container mx-auto sm:px-4">
                    <div className="section-heading text-center">
                        {/* <!-- Dream Dots --> */}
                        <div className="dream-dots justify-center fadeInUp" data-wow-delay="0.2s">
                            <span>Try our Platform</span>
                        </div>
                        <h2 className="fadeInUp light-green" data-wow-delay="0.3s">Our Trading Platform</h2>
                        <p className="fadeInUp" data-wow-delay="0.4s">Innovative solutions. Unleash the power of our platform, tailored for efficient and profitable cryptocurrency trading.</p>
                    </div>
                    <div className="flex flex-wrap  items-center">

                        <div className="service-img-wrapper lg:w-2/5 pr-4 pl-4 md:w-full pr-4 pl-4 sm:w-full pr-4 pl-4 no-padding-right">
                            <div className="features-list">
                                <div className="who-we-contant">

                                    <h4 className="w-text fadeInUp" data-wow-delay="0.3s">Powerful platform.</h4>
                                    <p className="w-text fadeInUp" data-wow-delay="0.4s">We are dedicated to providing professional service with the highest degree of honesty and integrity, and strive to add value to our tax and consulting services.</p>
                                </div>
                                <ul className="list-marked">
                                    <li className="text-white"><i className="fa fa-check"></i>Competent Professionals</li>
                                    <li className="text-white"><i className="fa fa-check"></i>Affordable Prices</li>
                                    <li className="text-white"><i className="fa fa-check"></i>High Successful Recovery</li>
                                    <li className="text-white"><i className="fa fa-check"></i>Creative Layout</li>
                                </ul>
                                <a className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline more-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Read More</a>
                            </div>
                        </div>

                        <div className="service-img-wrapper lg:w-3/5 pr-4 pl-4 md:w-full pr-4 pl-4 sm:w-full pr-4 pl-4 mt-s">
                            <div className="image-box">
                                <img draggable="false" src={part7} className="center-block img-responsive phone-img" alt="" />
                                <img draggable="false" src={rings} className="center-block img-responsive rings " alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Token price */}
            <section className="features section-padding-0-70 ">

                <div className="container mx-auto sm:px-4">
                    <div className="section-heading text-center">
                        {/* <!-- Dream Dots --> */}
                        <div className="dream-dots justify-center fadeInUp" data-wow-delay="0.2s">
                            <span>Token Prices</span>
                        </div>
                        <h2 className="fadeInUp light-green" data-wow-delay="0.3s">Our Plans</h2>
                        <p className="fadeInUp" data-wow-delay="0.4s">Tailored for success. Discover transparent and competitive pricing plans, designed to maximize your profits in cryptocurrency mining.






                        </p>
                    </div>
                    <div className="flex flex-wrap  items-center">
                        <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 w-full pr-4 pl-4">
                            <div className="pricing-item ">
                                <h4>Plan 1</h4>
                                <h3 className='light-green'><strong className="xzc-1-month">50$</strong></h3>
                                <span>Lifetime</span>
                                <div className="pricing">$1.5 / Day </div>
                                <label><strong>3% bonus</strong></label>
                            </div>
                        </div>
                        <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 w-full pr-4 pl-4">
                            <div className="pricing-item ">
                                <h4>Plan 2</h4>
                                <h3 className='light-green'><strong className="xzc-1-month">100$</strong></h3>
                                <span>Lifetime</span>
                                <div className="pricing">$3.0 / Day</div>
                                <label><strong>3% bonus</strong></label>
                            </div>
                        </div>
                        <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 w-full pr-4 pl-4">
                            <div className="pricing-item ">
                                <h4>Plan 3</h4>
                                <h3 className='light-green'><strong className="xzc-1-month">500$</strong></h3>
                                <span>Lifetime</span>
                                <div className="pricing">$15 / Day</div>
                                <label><strong>3% bonus</strong></label>
                            </div>
                        </div>
                        <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 w-full pr-4 pl-4">
                            <div className="pricing-item ">
                                <h4>Plan 4</h4>
                                <h3 className='light-green'><strong className="xzc-1-month">Unlimited</strong></h3>
                                <span>Lifetime</span>
                                <div className="pricing">custom</div>
                                <label><strong>3% Profit</strong></label>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* <!-- ##### White paper download ##### --> */}
            <section className="spread-map download" >
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap  items-center">

                        <div className="lg:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
                            <div className="welcome-meter fadeInUp" data-wow-delay="0.7s">
                                <img draggable="false" src={faq} className="center-block" alt="" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4 mt-s">
                            <div className="who-we-contant">
                                <div className="dream-dots text-left fadeInUp" data-wow-delay="0.2s">
                                    <img draggable="false" src={sectionIcon} alt="" />
                                </div>
                                <h4 className="text-white fadeInUp" data-wow-delay="0.3s">Utilize our servers</h4>
                                <p className="text-white">
                                    Maximize mining efficiency with our robust server infrastructure.
                                    Seamless integration ensures optimal performance,
                                    reliability, and rapid processing, enabling you to harness the
                                    full potential of cryptocurrency mining effortlessly.
                                </p>
                                <Link className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline dream-btn mt-30 fadeInUp" data-wow-delay="0.6s" to="/plans">
                                    Subscribe plan
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* <!-- Our ICO  --> */}

            <section className="token-distribution section-padding-100-85">
                <div className="container mx-auto sm:px-4">

                    <div className="section-heading text-center">
                        <div className="dream-dots justify-center fadeInUp " data-wow-delay="0.2s">
                            <span>ICO Distribution</span>
                        </div>
                        <h2 className="fadeInUp light-green" data-wow-delay="0.3s">Our ICO Distribution</h2>
                        <p className="fadeInUp" data-wow-delay="0.4s">Explore our Initial Coin Offering (ICO) distribution plan, designed for fairness and inclusivity. Secure your share of innovative tokens, fostering community growth.</p>
                    </div>

                    <div className="flex flex-wrap  items-center">
                        <div className="lg:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
                            <div className=" ">
                                <h2 className="text-center text-2xl mb-30 fadeInUp light-green" data-wow-delay="0.3s">Funds Allocation</h2>
                                <img draggable="false" src={distribution} className="center-block" alt="" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4 mt-s">
                            <h2 className="text-center text-2xl mb-30 fadeInUp light-green" data-wow-delay="0.3s">Token Distribution</h2>
                            <div className="flex flex-wrap ">
                                <div className="w-full sm:w-1/3 pr-4 pl-4">
                                    <div className="">
                                        <img draggable="false" src={graph1} className="center-block m-auto" alt="" />
                                    </div>
                                </div>
                                <div className="sm:w-2/3 pr-4 pl-4">
                                    <div className="token-info mt-x">
                                        <div className="info-wrapper one">
                                            <div className="token-icon">12</div>
                                            <div className="token-descr">Overhead Token Distribution</div>
                                        </div>
                                    </div>
                                    <div className="token-info">
                                        <div className="info-wrapper two">
                                            <div className="token-icon">23</div>
                                            <div className="token-descr">Supporting Blockchain </div>
                                        </div>
                                    </div>

                                    <div className="token-info">
                                        <div className="info-wrapper four">
                                            <div className="token-icon">08</div>
                                            <div className="token-descr">Engineers and R&D</div>
                                        </div>
                                    </div>
                                    <div className="token-info">
                                        <div className="info-wrapper five">
                                            <div className="token-icon">07</div>
                                            <div className="token-descr"> Paltform Operations</div>
                                        </div>
                                    </div>
                                    <div className="token-info">
                                        <div className="info-wrapper three">
                                            <div className="token-icon">05</div>
                                            <div className="token-descr">Network Growth Marketing</div>
                                        </div>
                                    </div>
                                    <div className="token-info">
                                        <div className="info-wrapper six">
                                            <div className="token-icon">08</div>
                                            <div className="token-descr">Oracle Network Developers</div>
                                        </div>
                                    </div>
                                    <div className="token-info">
                                        <div className="info-wrapper seven">
                                            <div className="token-icon">05</div>
                                            <div className="token-descr">Engineers and R&D</div>
                                        </div>
                                    </div>
                                    <div className="token-info">
                                        <div className="info-wrapper eight">
                                            <div className="token-icon">27</div>
                                            <div className="token-descr"> Paltform Operations</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="roadmap section-padding-0-0" id="roadmap">
                <div className="section-heading text-center">
                    {/* <!-- Dream Dots --> */}
                    <div className="dream-dots justify-center fadeInUp" data-wow-delay="0.2s">
                        <span>ICO Roadmap</span>
                    </div>
                    <h2 className="fadeInUp light-green" data-wow-delay="0.3s">Our ICO Roadmap</h2>
                    <p className="fadeInUp" data-wow-delay="0.4s">Navigate our path to success. Discover milestones, innovations, and growth as we journey together through our Initial Coin Offering.</p>
                </div>
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap ">
                        <div className="md:w-full pr-4 pl-4">
                            <div className="main-timeline">
                                <div className="timeline">
                                    <div className="icon"></div>
                                    <div className="date-content">
                                        <div className="date-outer"> <span className="date"> <span className="month">Join us</span> <span className="year">Free</span> </span>
                                        </div>
                                    </div>
                                    <div className="timeline-content">
                                        <h5 className="light-green title">Create Account in minutes</h5>
                                        <p className="description text-light-gray"> Join effortlessly. Sign up in minutes, unlocking exclusive features. Your gateway to seamless cryptocurrency investment begins here.</p>
                                    </div>
                                </div>
                                <div className="timeline">
                                    <div className="icon"></div>
                                    <div className="date-content">
                                        <div className="date-outer"> <span className="date"> <span className="month">Deposit </span> <span className="year">Money </span> </span>
                                        </div>
                                    </div>
                                    <div className="timeline-content">
                                        <h5 className="light-green title">Subscribe Desire Plan</h5>
                                        <p className="description text-light-gray"> Securely fund your account. Hassle-free deposits, ensuring your investments are ready to generate substantial returns.</p>
                                    </div>
                                </div>
                                <div className="timeline">
                                    <div className="icon"></div>
                                    <div className="date-content">
                                        <div className="date-outer"> <span className="date"> <span className="month">Earn </span> <span className="year">Profit</span> </span>
                                        </div>
                                    </div>
                                    <div className="timeline-content">
                                        <h5 className="light-green title">Unlock Profit Genratinge</h5>
                                        <p className="description text-light-gray"> Dive into daily profits. Our advanced mining solutions guarantee returns, making your investment journey profitable and rewarding.</p>
                                    </div>
                                </div>
                                <div className="timeline">
                                    <div className="icon"></div>
                                    <div className="date-content">
                                        <div className="date-outer"> <span className="date"> <span className="month">Create </span> <span className="year">Team</span> </span>
                                        </div>
                                    </div>
                                    <div className="timeline-content">
                                        <h5 className="light-green title">Amplify gains by inviting friends</h5>
                                        <p className="description text-light-gray"> Amplify gains by inviting friends. Building a community of prosperity, share the wealth, and grow together. Your network, your success.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ##### Token Info Start ##### --> */}
            <div className="features2 section-padding-100-70" >
                <div className="container mx-auto sm:px-4">

                    <div className="flex flex-wrap  items-center">

                        <div className="w-full lg:w-1/3 pr-4 pl-4 offset-lg-0 md:w-2/3 pr-4 pl-4 md:mx-1/5 sm:w-4/5 pr-4 pl-4 sm:mx-1/6">
                            <div className="ico-counter dotted-bg mb-30">
                                <div className="counter-down">

                                    <div className="content">
                                        <div className="conuter-header">
                                            <h3 className="w-text text-center">MINING SERVER SALE ENDS IN</h3>
                                        </div>
                                        <div className="counterdown-content">

                                            {/* <!-- Countdown  --> */}
                                            <div className="count-down titled circled text-center">
                                                <div className="simple_timer"></div>
                                            </div>
                                            <div className="ico-progress">
                                                <ul className="list-unstyled list-inline clearfix mb-10">
                                                    <li className="title">33m</li>
                                                    <li className="strength">75m</li>
                                                </ul>
                                                {/* <!-- skill strength --> */}
                                                <div className="current-progress">
                                                    <div className="progress-bar has-gradient" style={{ width: "75%" }}></div>
                                                </div>
                                                <span className="pull-left">Softcap in 103 days</span>
                                                <span className="pull-right">Token Hardcap</span>
                                            </div>
                                            <div className="text-center">
                                                <Link className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline dream-btn mt-30 fadeInUp" data-wow-delay="0.6s" to='plans'>Buy Server</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/3 pr-4 pl-4 sm:w-full pr-4 pl-4 mt-md-30">
                            <div className="services-block-four v2">
                                <div className="inner-box">
                                    <div className="icon-img-box">
                                        <img draggable="false" src={f1} alt="" />
                                    </div>
                                    <h3><a href="#">Secure Your Investments</a></h3>
                                    <div className="text">Secure your investments with our advanced encryption. Your assets, our priority.</div>
                                </div>
                            </div>
                            <div className="services-block-four v2">
                                <div className="inner-box">
                                    <div className="icon-img-box">
                                        <img draggable="false" src={f2} alt="" />
                                    </div>
                                    <h3><a href="#">Unlock Exclusive Benefits</a></h3>
                                    <div className="text">Unlock exclusive opportunities and benefits with your personalized access keys.</div>
                                </div>
                            </div>
                            <div className="services-block-four v2">
                                <div className="inner-box">
                                    <div className="icon-img-box">
                                        <img draggable="false" src={f3} alt="" />
                                    </div>
                                    <h3><a href="#">Seamless Integration</a></h3>
                                    <div className="text">Seamlessly integrate with our platform, utilizing the power of efficient and optimized processes</div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 pr-4 pl-4 sm:w-full pr-4 pl-4 mt-md-30 mt-smy-0">
                            <div className="services-block-four v2">
                                <div className="inner-box">
                                    <div className="icon-img-box">
                                        <img draggable="false" src={f4} alt="" />
                                    </div>
                                    <h3><a href="#">Robust Security Measures</a></h3>
                                    <div className="text">Robust security measures ensuring a shielded environment for your financial</div>
                                </div>
                            </div>
                            <div className="services-block-four v2">
                                <div className="inner-box">
                                    <div className="icon-img-box">
                                        <img draggable="false" src={f5} alt="" />
                                    </div>
                                    <h3><a href="#">User-Friendly Interface</a></h3>
                                    <div className="text">User-friendly interface empowering everyone to navigate the platform with ease.</div>
                                </div>
                            </div>
                            <div className="services-block-four v2">
                                <div className="inner-box">
                                    <div className="icon-img-box">
                                        <img draggable="false" src={f6} alt="" />
                                    </div>
                                    <h3><a href="#">Visualize Your Growth</a></h3>
                                    <div className="text">Track and visualize your growth with comprehensive graphs. Transparent insights into your investment progress</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <!-- ##### Token FAQ & Timeline Area S/tart ##### --> */}
            <div className="faq-timeline-area section-padding-0-85" id="faq">
                <div className="container mx-auto sm:px-4">
                    <div className="section-heading text-center">
                        {/* <!-- Dream Dots --> */}
                        <div className="dream-dots justify-center fadeInUp" data-wow-delay="0.2s">
                            <span>Token FAQ</span>
                        </div>
                        <h2 className="fadeInUp light-green" data-wow-delay="0.3s">  Frequently Questions</h2>
                        <p className="fadeInUp" data-wow-delay="0.4s">Explore essential queries. Learn about account creation, secure deposits, profit earning, and team building. Your guide to seamless cryptocurrency engagement.</p>
                    </div>
                    <div className="flex flex-wrap  items-center">
                        <div className="w-full lg:w-1/2 pr-4 pl-4 offset-lg-0 md:w-2/3 pr-4 pl-4 md:mx-1/5 sm:w-full pr-4 pl-4">
                            <img draggable="false" src={faq} alt="" className="mx-auto" />
                        </div>
                        <div className="w-full lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4">
                            <div className="dream-faq-area mt-s ">
                                <dl style={{ marginBottom: "0" }}>
                                    {/* <!-- Single FAQ Area --> */}
                                    <dt className="wave fadeInUp" data-wow-delay="0.2s">How to create an account?</dt>
                                    <dd className="fadeInUp" data-wow-delay="0.3s">
                                        <p>Visit our website, click 'Sign Up,' and follow the simple registration process. Your account will be ready to explore the world of cryptocurrency.</p>
                                    </dd>
                                    {/* <!-- Single FAQ Area --> */}
                                    <dt className="wave fadeInUp" data-wow-delay="0.3s">How can I deposit money?</dt>
                                    <dd>
                                        <p>Select your plan, copy the wallet address, transfer funds, and upload a screenshot via your dashboard's deposit request tab for seamless and secure transactions.</p>
                                    </dd>
                                    {/* <!-- Single FAQ Area --> */}
                                    <dt className="wave fadeInUp" data-wow-delay="0.4s">How can I earn profits?</dt>
                                    <dd>
                                        <p>  Dive into our advanced mining solutions. Daily returns are guaranteed, making your investment journey profitable and rewarding.</p>
                                    </dd>
                                    {/* <!-- Single FAQ Area --> */}
                                    <dt className="wave fadeInUp" data-wow-delay="0.5s">Can I build a referral team?</dt>
                                    <dd>
                                        <p>Yes! Invite friends, build your community, and amplify gains. Share the wealth, foster collaboration, and grow together in a thriving network of prosperity.</p>
                                    </dd>
                                </dl>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- ##### FAQ & Timeline Area End ##### --> */}


            {/* <!-- ##### Team Area Start ##### --> */}
            <section className="our_team_area section-padding-100-0 clearfix" id="team">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap ">
                        <div className="w-full">
                            <div className="section-heading text-center">
                                {/* <!-- Dream Dots --> */}
                                <div className="dream-dots justify-center fadeInUp" data-wow-delay="0.2s">
                                    <span>Top Members</span>
                                </div>
                                <h2 className="fadeInUp light-green" data-wow-delay="0.3s">Month of Outstanding Contributions</h2>
                                <p className="fadeInUp" data-wow-delay="0.4s">These experts navigate the dynamic landscape, maximizing returns and shaping the future of mining excellence. </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap ">
                        {/* <!-- Single Team Member --> */}
                        <div className="w-full sm:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                            <div className="single-team-member fadeInUp" data-wow-delay="0.2s">
                                {/* <!-- Image --> */}
                                <div className="team-member-thumb">
                                    <img draggable="false" src={team1} className="center-block" alt="" />
                                </div>
                                {/* <!-- Team Info --> */}
                                <div className="team-info">
                                    <h5 className="w-text">Joman Helal</h5>
                                    {/* <p className="g-text">Executive Officer</p> */}
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Team Member --> */}
                        <div className="w-full sm:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                            <div className="single-team-member fadeInUp" data-wow-delay="0.3s">
                                {/* <!-- Image --> */}
                                <div className="team-member-thumb">
                                    <img draggable="false" src={team2} className="center-block" alt="" />
                                </div>
                                {/* <!-- Team Info --> */}
                                <div className="team-info">
                                    <h5 className="w-text">Slans Alons</h5>
                                    {/* <p className="g-text">Business Development</p> */}
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Team Member --> */}
                        <div className="w-full sm:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                            <div className="single-team-member fadeInUp" data-wow-delay="0.4s">
                                {/* <!-- Image --> */}
                                <div className="team-member-thumb">
                                    <img draggable="false" src={team3} className="center-block" alt="" />
                                </div>
                                {/* <!-- Team Info --> */}
                                <div className="team-info">
                                    <h5 className="w-text">Josha Michal</h5>
                                    {/* <p className="g-text">UX/UI Designer</p> */}
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Team Member --> */}
                        <div className="w-full sm:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                            <div className="single-team-member fadeInUp" data-wow-delay="0.5s">
                                {/* <!-- Image --> */}
                                <div className="team-member-thumb">
                                    <img draggable="false" src={team4} className="center-block" alt="" />
                                </div>
                                {/* <!-- Team Info --> */}
                                <div className="team-info">
                                    <h5 className="w-text">Saim </h5>
                                    {/* <p className="g-text">Head of Marketing</p> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- ##### Team Area End ##### --> */}

            <section className="container mx-auto sm:px-4" >
                <div className="subscribe section-padding-0-100">
                    <div className="flex flex-wrap ">
                        <div className="w-full pr-4 pl-4">
                            <div className="subscribe-wrapper">
                                <div className="section-heading text-center">
                                    <h2 className="wow fadeInUp" data-wow-delay="0.3s">stay Update!</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.4s">Don’t Miss ICO News And Updates.</p>
                                </div>
                                <div className="service-text text-center">

                                    <div className="subscribe-section has-shadow">
                                        <div className="input-wrapper">
                                            <i className="fa fa-home"></i>
                                            <input type="email" placeholder="Enter your Email" />
                                        </div>
                                        <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline more-btn mt-x-15">Subscribe</button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* <!-- ##### Footer Area Start ##### --> */}
            <footer className="footer-area bg-img">
                {/* <!-- ##### Contact Area Start ##### --> */}
                {/* <div className="contact_us_area section-padding-0-0" id="contact">
            <div className="container mx-auto sm:px-4">
                <div className="flex flex-wrap ">
                    <div className="w-full">
                        <div className="section-heading text-center">
                           
                            <div className="dream-dots justify-center fadeInUp" data-wow-delay="0.2s">
                                <span className="gradient-text">Contact us</span>
                            </div>
                            <h2 className="fadeInUp" data-wow-delay="0.3s">Contact With Us</h2>
                            <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                        </div>
                    </div>
                </div>

              
                <div className="flex flex-wrap  justify-center">
                    <div className="w-full md:w-4/5 pr-4 pl-4 lg:w-2/3 pr-4 pl-4">
                        <div className="contact_form">
                            <form action="#" method="post" id="main_contact_form"  >
                                <div className="flex flex-wrap ">
                                    <div className="w-full">
                                        <div id="success_fail_info"></div>
                                    </div>

                                    <div className="w-full md:w-1/2 pr-4 pl-4">
                                        <div className="group fadeInUp" data-wow-delay="0.2s">
                                            <input type="text" name="name" id="name" required/>
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Name</label>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 pr-4 pl-4">
                                        <div className="group fadeInUp" data-wow-delay="0.3s">
                                            <input type="text" name="email" id="email" required/>
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Email</label>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="group fadeInUp" data-wow-delay="0.4s">
                                            <input type="text" name="subject" id="subject" required/>
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Subject</label>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="group fadeInUp" data-wow-delay="0.5s">
                                            <textarea name="message" id="message" required></textarea>
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Message</label>
                                        </div>
                                    </div>
                                    <div className="w-full text-center fadeInUp" data-wow-delay="0.6s">
                                        <button type="submit" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline more-btn">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
                {/* <!-- ##### Contact Area End ##### --> */}

                <div className="footer-content-area ">
                    <div className="container mx-auto sm:px-4">
                        <div className="flex flex-wrap  ">
                            <div className="w-full lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
                                <div className="footer-copywrite-info">
                                    {/* <!-- Copywrite --> */}
                                    <div className="copywrite_text fadeInUp" data-wow-delay="0.2s">
                                        <div className="footer-logo">
                                            <a href="#"><img draggable="false" src={logo} alt="logo" className='h-16' /> </a>
                                        </div>
                                        <p> Innovative crypto solutions. Cutting-edge technology. Secure investments. Daily profits. Build a prosperous team. Explore the future of cryptocurrency with GW Mining.</p>
                                    </div>
                                    {/* <!-- Social Icon --> */}
                                    <div className="footer-social-info fadeInUp" data-wow-delay="0.4s">
                                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="#"> <i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/5 pr-4 pl-4 md:w-1/2 ">
                                <div className="contact_info_area sm:flex justify-between">
                                    {/* <!-- Content Info --> */}
                                    <div className="contact_info mt-x text-center fadeInUp" data-wow-delay="0.3s">
                                        <h5 className='light-green'>NAVIGATE</h5>
                                        <a href="#"><p>Home</p></a>
                                        <a href="#"><p>Plans</p></a>
                                        <a href="#"><p>How it Works</p></a>
                                        <a href="#"><p>Roadmap</p></a>
                                        <a href="#"><p>Support</p></a>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/5 pr-4 pl-4 md:w-1/2 pr-4 pl-4 ">
                                {/* <!-- Content Info --> */}
                                <div className="contact_info_area sm:flex justify-between">
                                    <div className="contact_info mt-s text-center fadeInUp" data-wow-delay="0.2s">
                                        <h5 className='light-green'>PRIVACY & TOS</h5>

                                        <p>
                                            <Link to='terms-of-services' className='text-white'>Terms of Services</Link>
                                        </p>
                                        <p>
                                            <Link to='about-us' className='text-white'>About Us</Link>
                                        </p>
                                        <a href="#"><p>Company</p></a>
                                        <a href="#"><p>Connect</p></a>
                                    </div>
                                </div>
                            </div>


                            <div className="w-full lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 ">
                                <div className="contact_info_area sm:flex justify-between">
                                    {/* <!-- Content Info --> */}
                                    <div className="contact_info mt-s text-center fadeInUp" data-wow-delay="0.4s">
                                        <h5 className='light-green'>CONTACT US</h5>
                                        <p>Mailing Address:xx00 E. Union Ave</p>
                                        <p>Suite 1100. Denver, CO 80237</p>
                                        {/* <p>+999 90932 627</p> */}
                                        <p>info@gwmining.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Lander
