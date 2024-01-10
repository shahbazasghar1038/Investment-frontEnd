import React from 'react'
import logo from '../img/core-img/logo.png'
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
import team1 from "../img/team-img/1.png"
import team2 from "../img/team-img/2.png"
import team3 from "../img/team-img/3.png"
import team4 from "../img/team-img/4.png"

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
                <div className="flex flex-wrap  items-center">
                    {/* <!-- Welcome Content --> */}
                    <div className="w-full lg:w-2/5 pr-4 pl-4 md:w-full pr-4 pl-4">
                        <div className="welcome-content">
                            <div className="promo-section">
                                <h3 className="special-head dark text-left">Unlock Digital Wealth with GW MINING </h3>
                            </div>
                            <h1 className='light-green text-left'>Empower Your Finances through Innovative Crypto Mining Solutions </h1>
                            <p className="w-text text-left">Elevate your finances with cutting-edge Bitcoin mining. Join [Your Platform Name] for secure, transparent, and profitable opportunities. Start your journey to financial freedom today.</p>
                            <div className="dream-btn-group flex justify-start">
                                <Link to="plans" className="more-btn mr-3">Get started</Link>
                                <Link to="plans" className="more-btn mt-xx-15">Buy Plan</Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 pr-4 pl-4">
                        <div className="dotted   flex justify-center items-center" >
                            <img draggable="false" src={platform1} alt=""/>
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
                        <img draggable="false" src={about1}  alt=""/>
                    </div>
                </div>
                
                <div className="w-full lg:w-1/2 pr-4 pl-4 offset-lg-0">
                    <div className="who-we-contant mt-s">
                        <div className="dream-dots text-left fadeInUp" data-wow-delay="0.2s" >
                            <span className="gradient-text ">Decentralized Trading Platform</span>
                        </div>
                        <h4 className="fadeInUp  light-green" data-wow-delay="0.3s">Connect blockchain to the real world and start crypto tading.</h4>
                        <p className="fadeInUp" data-wow-delay="0.4s">Dive into the future of wealth creation with GW MINING. Invest in Bitcoin mining effortlessly, and amplify your gains by referring friends. Experience daily profits, secure transactions, and a user-friendly interface. Start mining and sharing the prosperity today!</p>
                        <p className="fadeInUp" data-wow-delay="0.5s"> Stay ahead of market trends, diversify your portfolio, and experience the true potential of blockchain in real-world applications. Join us in revolutionizing the way you connect, trade, and thrive in the ever-evolving landscape of digital assets. Start your crypto trading adventure with GW MINING.</p>
                        <a className="more-btn mt-30" href="#">Read More</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    {/* <!-- ##### About Us Area End ##### --> */}

    {/* <!-- ##### Our Services Area Start ##### --> */}
    <section className="join-us section-padding-0-100 clearfix">
        <div className="container mx-auto sm:px-4">
            
            <div className="section-heading text-center ">
                {/* <!-- Dream Dots --> */}
                <div className="dream-dots justify-center fadeInUp" data-wow-delay="0.2s">
                    <span>Our Services</span>
                </div>
                <h2 className="fadeInUp light-green" data-wow-delay="0.3s">How it works</h2>
                <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
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
                            <h6 className='light-green'>Start Earning</h6>
                            <p>Dive into daily profits. Witness the power of automated mining. Your earnings, your way. It's time to turn your investment into a consistent income stream.</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/3 pr-4 pl-4 md:w-1/4 hidden-md hidden-sm hidden-xs text-center">
                    <img draggable="false" src={joinBottom} className="arrow-img rotated w-full" alt=""/>
                </div>
                <div className="lg:w-1/3 pr-4 pl-4 text-center hidden-md hidden-sm hidden-xs md:w-2/4">
                    <div className="dream-dots justify-center fadeInUp" data-wow-delay="0.2s">
                        <span>Join us</span>
                    </div>
                    <h2 className="text-3xl light-green" data-wow-delay="0.3s">Contribution Cycle</h2>
                </div>
                <div className="lg:w-1/3 pr-4 pl-4 md:w-1/4 hidden-md hidden-sm hidden-xs text-center">
                    <img draggable="false" src={joinBottom} className="arrow-img w-full" alt=""/>
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
                            <p>Fund your success. Effortlessly deposit money into your account. Seamless transactions and instant access to the world of crypto mining. Your journey, your investment.</p>
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
                            <p>Harvest your profits. Withdraw your earnings hassle-free. Enjoy quick and secure transactions. Your hard-earned gains are just a click away. Welcome to financial freedom.






</p>
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
                        <a className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline more-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Read More</a>
                    </div>
                </div>

                <img draggable="false" className="supportImg" src={tradingStroke} alt="image"/>
                <div className="w-full lg:w-1/2 pr-4 pl-4 offset-lg-0 md:w-full pr-4 pl-4 mt-30 no-padding-left">
                    <div className="welcome-meter floating-anim fadeInUp" data-wow-delay="0.7s">
                        <img draggable="false" src={computer}  alt=""/>
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
                            <img draggable="false" src={part1} alt=""/>
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
                            <img draggable="false" src={part2} alt=""/>
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
                            <img draggable="false" src={part3} alt=""/>
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
                            <img draggable="false" src={part4} alt=""/>
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
                            <img draggable="false" src={part5} alt=""/>
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
                            <img draggable="false" src={part6} alt=""/>
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
                            <img draggable="false" src={feature1} alt=""/>
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
                            <img draggable="false" src={feature2} alt=""/>
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
                            <img draggable="false" src={feature3} alt=""/>
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
                            <img draggable="false" src={feature4} alt=""/>
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
                            <img draggable="false" src={feature5} alt=""/>
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
                            <img draggable="false" src={feature6} alt=""/>
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
                            <img draggable="false" src={feature7} alt=""/>
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
                            <img draggable="false" src={feature8} alt=""/>
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
                        <img draggable="false" src={part7} className="center-block img-responsive phone-img" alt=""/>
                        <img draggable="false" src={rings} className="center-block img-responsive rings " alt=""/>
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
                        <span>1 ETH = 500 Token</span> 
                        <div className="pricing">15,000,000 Token</div> 
                        <label><strong>42% bonus</strong></label>
                    </div>
                </div> 
                <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 w-full pr-4 pl-4">
                    <div className="pricing-item ">
                        <h4>Plan 2</h4> 
                        <h3 className='light-green'><strong className="xzc-1-month">100$</strong></h3> 
                        <span>1 ETH = 500 Token</span> 
                        <div className="pricing">15,000,000 Token</div> 
                        <label><strong>35% bonus</strong></label>
                    </div>
                </div> 
                <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 w-full pr-4 pl-4">
                    <div className="pricing-item ">
                        <h4>Plan 3</h4> 
                        <h3 className='light-green'><strong className="xzc-1-month">500$</strong></h3> 
                        <span>1 ETH = 500 Token</span> 
                        <div className="pricing">15,000,000 Token</div> 
                        <label><strong>25% bonus</strong></label>
                    </div>
                </div> 
                <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 w-full pr-4 pl-4">
                    <div className="pricing-item ">
                        <h4>Plan 4</h4> 
                        <h3 className='light-green'><strong className="xzc-1-month">Unlimited</strong></h3> 
                        <span>1 ETH = 500 Token</span> 
                        <div className="pricing">15,000,000 Token</div> 
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
                        <img draggable="false" src={faq} className="center-block" alt=""/>
                    </div>
                </div> 
                <div className="lg:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4 mt-s">
                    <div className="who-we-contant">
                        <div className="dream-dots text-left fadeInUp" data-wow-delay="0.2s">
                            <img draggable="false" src={sectionIcon} alt=""/>
                        </div>
                        <h4 className="text-white fadeInUp" data-wow-delay="0.3s">Utilize our servers</h4>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore qui iste asperiores harum maiores praesentium facere ullam blanditiis, odio dolorum. Officia quisquam eaque suscipit facere ducimus, sit quaerat. Numquam, corrupti?</p>
                        <a className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline dream-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">
                            Subscribe plan
                        </a>
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
                <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
            </div>

            <div className="flex flex-wrap  items-center">
                <div className="lg:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
                    <div className=" ">
                        <h2 className="text-center text-2xl mb-30 fadeInUp light-green" data-wow-delay="0.3s">Funds Allocation</h2>
                        <img draggable="false" src={distribution} className="center-block" alt=""/>
                    </div>
                </div>
                <div className="lg:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4 mt-s">
                    <h2 className="text-center text-2xl mb-30 fadeInUp light-green" data-wow-delay="0.3s">Token Distribution</h2>
                    <div className="flex flex-wrap ">
                        <div className="w-full sm:w-1/3 pr-4 pl-4">
                            <div className="">
                                <img draggable="false" src={graph1} className="center-block m-auto" alt=""/>
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
            <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
        </div>
        <div className="container mx-auto sm:px-4">
            <div className="flex flex-wrap ">
                <div className="md:w-full pr-4 pl-4">
                    <div className="main-timeline">
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer"> <span className="date"> <span className="month">22 Sept</span> <span className="year">2022</span> </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="light-green title">Listing to the major exchanges</h5>
                                <p className="description text-light-gray"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.</p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer"> <span className="date"> <span className="month">27 Nov</span> <span className="year">2022</span> </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="light-green title">integration to marketplaces</h5>
                                <p className="description text-light-gray"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.</p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer"> <span className="date"> <span className="month">19 Dec</span> <span className="year">2022</span> </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="light-green title">Crypto Wallet version release</h5>
                                <p className="description text-light-gray"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.</p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer"> <span className="date"> <span className="month">25 Jan</span> <span className="year">2022</span> </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="light-green title">Platform ealier development</h5>
                                <p className="description text-light-gray"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.</p>
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
                                    <h3 className="w-text text-center">TOKEN SALE ENDS IN</h3>
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
                                          <div className="progress-bar has-gradient" style={{width: "75%"}}></div>
                                       </div>
                                       <span className="pull-left">Softcap in 103 days</span>
                                       <span className="pull-right">Token Hardcap</span>
                                    </div>
                                    <div className="text-center">
                                        <a className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline dream-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Buy More tokens</a>
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
                                <img draggable="false" src={f1} alt=""/>
                            </div>
                            <h3><a href="#">Delivery Reports</a></h3>
                            <div className="text">Lorem ipsum dolor sit amet, conse ctetur ipsum dolor sit amet, conse.</div>
                        </div>
                    </div>
                    <div className="services-block-four v2">
                        <div className="inner-box">
                            <div className="icon-img-box">
                                <img draggable="false" src={f2} alt=""/>
                            </div>
                            <h3><a href="#">Branded Sender</a></h3>
                            <div className="text">Lorem ipsum dolor sit amet, conse ctetur ipsum dolor sit amet, conse.</div>
                        </div>
                    </div>
                    <div className="services-block-four v2">
                        <div className="inner-box">
                            <div className="icon-img-box">
                                <img draggable="false" src={f3} alt=""/>
                            </div>
                            <h3><a href="#">SMS Messaging</a></h3>
                            <div className="text">Lorem ipsum dolor sit amet, conse ctetur ipsum dolor sit amet, conse.</div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 pr-4 pl-4 sm:w-full pr-4 pl-4 mt-md-30 mt-smy-0">
                    <div className="services-block-four v2">
                        <div className="inner-box">
                            <div className="icon-img-box">
                                <img draggable="false" src={f4} alt=""/>
                            </div>
                            <h3><a href="#">Marketing Plans</a></h3>
                            <div className="text">Lorem ipsum dolor sit amet, conse ctetur ipsum dolor sit amet, conse.</div>
                        </div>
                    </div>
                    <div className="services-block-four v2">
                        <div className="inner-box">
                            <div className="icon-img-box">
                                <img draggable="false" src={f5} alt=""/>
                            </div>
                            <h3><a href="#">Seed Routing</a></h3>
                            <div className="text">Lorem ipsum dolor sit amet, conse ctetur ipsum dolor sit amet, conse.</div>
                        </div>
                    </div>
                    <div className="services-block-four v2">
                        <div className="inner-box">
                            <div className="icon-img-box">
                                <img draggable="false" src={f6} alt=""/>
                            </div>
                            <h3><a href="#">Traking API</a></h3>
                            <div className="text">Lorem ipsum dolor sit amet, conse ctetur ipsum dolor sit amet, conse.</div>
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
	            <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
	        </div>
            <div className="flex flex-wrap  items-center">
                <div className="w-full lg:w-1/2 pr-4 pl-4 offset-lg-0 md:w-2/3 pr-4 pl-4 md:mx-1/5 sm:w-full pr-4 pl-4">
                    <img draggable="false" src={faq} alt="" className="mx-auto"/>
                </div>
                <div className="w-full lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4">
                    <div className="dream-faq-area mt-s ">
                        <dl style={{marginBottom:"0"}}>
                            {/* <!-- Single FAQ Area --> */}
                            <dt className="wave fadeInUp" data-wow-delay="0.2s">What are the objectives of this Token?</dt>
                            <dd className="fadeInUp" data-wow-delay="0.3s">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
                            </dd>
                            {/* <!-- Single FAQ Area --> */}
                            <dt className="wave fadeInUp" data-wow-delay="0.3s">What is the best features and services we deiver?</dt>
                            <dd>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
                            </dd>
                            {/* <!-- Single FAQ Area --> */}
                            <dt className="wave fadeInUp" data-wow-delay="0.4s">Why this ICO important to me?</dt>
                            <dd>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
                            </dd>
                            {/* <!-- Single FAQ Area --> */}
                            <dt className="wave fadeInUp" data-wow-delay="0.5s">how may I take part in and purchase this Token?</dt>
                            <dd>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
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
                            <span>Our Team</span>
                        </div>
                        <h2 className="fadeInUp light-green" data-wow-delay="0.3s">Awesome Team</h2>
                        <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo. </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap ">
                {/* <!-- Single Team Member --> */}
                <div className="w-full sm:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                    <div className="single-team-member fadeInUp" data-wow-delay="0.2s">
                        {/* <!-- Image --> */}
                        <div className="team-member-thumb">
                            <img draggable="false" src={team1} className="center-block" alt=""/>
                        </div>
                        {/* <!-- Team Info --> */}
                        <div className="team-info">
                            <h5 className="w-text">Joman Helal</h5>
                            <p className="g-text">Executive Officer</p>
                        </div>
                        {/* <!-- Social Icon --> */}
                        <div className="team-social-icon">
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Team Member --> */}
                <div className="w-full sm:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                    <div className="single-team-member fadeInUp" data-wow-delay="0.3s">
                        {/* <!-- Image --> */}
                        <div className="team-member-thumb">
                            <img draggable="false" src={team2} className="center-block" alt=""/>
                        </div>
                        {/* <!-- Team Info --> */}
                        <div className="team-info">
                            <h5 className="w-text">Slans Alons</h5>
                            <p className="g-text">Business Development</p>
                        </div>
                        {/* <!-- Social Icon --> */}
                        <div className="team-social-icon">
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Team Member --> */}
                <div className="w-full sm:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                    <div className="single-team-member fadeInUp" data-wow-delay="0.4s">
                        {/* <!-- Image --> */}
                        <div className="team-member-thumb">
                            <img draggable="false" src={team3} className="center-block" alt=""/>
                        </div>
                        {/* <!-- Team Info --> */}
                        <div className="team-info">
                            <h5 className="w-text">Josha Michal</h5>
                            <p className="g-text">UX/UI Designer</p>
                        </div>
                        {/* <!-- Social Icon --> */}
                        <div className="team-social-icon">
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Team Member --> */}
                <div className="w-full sm:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                    <div className="single-team-member fadeInUp" data-wow-delay="0.5s">
                        {/* <!-- Image --> */}
                        <div className="team-member-thumb">
                            <img draggable="false" src={team4} className="center-block" alt=""/>
                        </div>
                        {/* <!-- Team Info --> */}
                        <div className="team-info">
                            <h5 className="w-text">Johan Wright</h5>
                            <p className="g-text">Head of Marketing</p>
                        </div>
                        {/* <!-- Icon --> */}
                        <div className="team-social-icon">
                            <a href="#"><i className="fa fa-linkedin"></i></a>
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
                            <h2 className="wow fadeInUp" data-wow-delay="0.3s">Don’t Miss ICO News And Updates!</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                        </div>
                        <div className="service-text text-center">
                            
                            <div className="subscribe-section has-shadow">
                                <div className="input-wrapper">
                                    <i className="fa fa-home"></i>
                                    <input type="email" placeholder="Enter your Email"/>
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
                                    <a href="#"><img draggable="false" src={logo} alt="logo"/> GW Mining </a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad.</p>
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

                    <div className="w-full lg:w-1/5 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
                        <div className="contact_info_area sm:flex justify-between">
                            {/* <!-- Content Info --> */}
                            <div className="contact_info mt-x text-center fadeInUp" data-wow-delay="0.3s">
                                <h5 className='light-green'>PRIVACY & TOS</h5>
                                <a href="#"><p>Advertiser Agreement</p></a>
                                <a href="#"><p>Acceptable Use Policy</p></a>
                                <a href="#"><p>Privacy Policy</p></a>
                                <a href="#"><p>Technology Privacy</p></a>
                                <a href="#"><p>Developer Agreement</p></a>
                            </div>
                        </div>
                    </div>
                      
                    <div className="w-full lg:w-1/5 pr-4 pl-4 md:w-1/2 pr-4 pl-4 ">
                        {/* <!-- Content Info --> */}
                        <div className="contact_info_area sm:flex justify-between">
                            <div className="contact_info mt-s text-center fadeInUp" data-wow-delay="0.2s">
                                <h5 className='light-green'>NAVIGATE</h5>
                                <a href="#"><p>Advertisers</p></a>
                                <a href="#"><p>Developers</p></a>
                                <a href="#"><p>Resources</p></a>
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
                                <p>+999 90932 627</p>
                                <p>support@yourdomain.com</p>
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
