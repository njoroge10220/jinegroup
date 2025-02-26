
import {React} from "react";

import MultiNavBar from "./multiNavbar";
import Footer from "./footer";
import Button from "./button";
import TechStackCard from "./techStackCard";

import { About_us, mainLinks,TechStack } from "./getArrays";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';         
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 
import 'swiper/css/scrollbar';  
import 'swiper/css/autoplay';

import { CgEditStraight } from "react-icons/cg";
import { GrServices } from "react-icons/gr";
import { FcCustomerSupport } from "react-icons/fc";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowCircleRight, FaHandshake, FaBrain } from "react-icons/fa";


import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

import stack from '../assets/stack.jpg'
import abt1 from '../assets/about.png'


function AboutUsPage() {

    const about_us = About_us()
    const mainItems = mainLinks()
    const techStack = TechStack()  
    
    const Cons = [
      {id:1,text:'We Provide Best Solutions',},
      {id:2,text:'Keeping your systems running smoothly',},
      {id:3,text:'Transforming Businesses with our IT services',},
      {id:4,text:'Providing Scalable IT Infastructure',},
    ]

    return(
        <>
           <body>
                <div>
                    <MultiNavBar pageTitle={'About Us'} />
                </div>
                <section>
                    <div>
                    <section className=' '>
    <div className='w-[90%] mx-auto '>
      <div className='grid md:grid-cols-2 grid-cols-1 pb-24 pt-24' data-aos='fade-right' >
        <div  data-aos='fade-up'>
          <div className=' flex flex-col justify-start px-2 py-3'style={{ fontFamily: "Roboto Condensed" }}>
            <div className='flex flex-row gap-2 font-medium py-5 text-[#082a4a]  '>
              <CgEditStraight size={25} /> <h3>WHO WE ARE</h3>
            </div>
            <div>
                <h1 className=' text-[#333] md:text-5xl text-3xl font-extrabold'>
                    Drive Your Success Through Reliable IT Solutions 
                </h1>
            </div>
            <div>
              {about_us.map((ab_us) =>(
                <p className=' text-[#333]  text-lg py-4 font-normal  w-[97%] mx-auto ' dat-aos='fade-left' >
                  {ab_us.company_description}
                </p>
              ))}    
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4 w-[95%] mx-auto md:space-y-0 space-y-3 ' data-aos='fade-down'>
                {Cons.map((con) =>(
                  <div className='flex flex-col w-[95%] mx-auto ' key={con.id}>
                    <div className=' flex flex-row'>
                      <div className='text-[#3c72fc] rounded-sm flex justify-center '>
                       <IoCheckmarkDoneCircleSharp size={25} />
                      </div>
                      <div className='flex justify-start px-2 w-[95%] text-[#333] '>
                        <h3 className='font-bold text-lg text-[#333]'> {con.text} </h3>
                      </div>
                    </div>
                </div>
                ))}
            </div>
          </div>
        </div>
        <div  data-aos='fade-right' className='pt-10 pb-5 flex items-center justify-center '>
          {/** vedio */}
          image and vedio where vedio is absolute and on the bottom right of image
        </div>
      </div>
    </div>
  </section>  
                    </div>
                </section>

  {/** vision and mission */}
  <section className=" bg-cover bg-center h-full py-8" style={{ backgroundImage: `url(${stack})` }}>
    <div className=" grid md:grid-cols-2 grid-cols-1 w-[90%] mx-auto items-center ">
        <div className=" w-[90%] mx-auto p-2 gap-2 flex justify-center items-center ">
          <div className="text-[#f7f7f7] text-4xl font-black  ">
            TOP TIER TECHNOLOGY SERVICES AND SOLUTIONS WITH US!
          </div>
          <div className="rotate-180">
            <hr className="border-2 w-[30%] h-[200px] m-auto border-[#2ec4b6] rounded-xl " />
          </div> 
         </div>
        
        <div className="w-[90%] mx-auto ">
            {/** vision */}
              <section>
                <div className=' flex flex-col justify-start px-2 py-1'style={{ fontFamily: "Roboto Condensed" }}>
                    <div className='flex flex-row gap-2 font-medium py-5 text-[#f5f5f5]  '>
                    <CgEditStraight size={25} /> <h3>OUR VISION</h3>
                    </div>
                    <div>
                        <h1 className=' text-[#f7f7f7] md:text-3xl text-2xl font-extrabold'>
                            The Future We See
                        </h1>
                    </div>
                    <div>
                    {about_us.map((ab_us) =>(
                        <p className=' text-[#f7f7f7]  text-lg pt-4 font-normal  w-[97%] mx-auto ' dat-aos='fade-left' >
                        {ab_us.company_vision}
                        </p>
                    ))}    
                    </div>
                </div>
              </section>
            {/** mission */}
            <section>
                <div>
                <div className=' flex flex-col justify-start px-2 py-3'style={{ fontFamily: "Roboto Condensed" }}>
                    <div className='flex flex-row gap-2 font-medium py-5 text-[#f5f5f5]  '>
                    <CgEditStraight size={25} /> <h3> OUR MISSION</h3>
                    </div>
                    <div>
                        <h1 className=' text-[#f7f7f7] md:text-3xl text-2xl font-extrabold'>
                        What We Aim To Achieve 
                        </h1>
                    </div>
                    <div>
                    {about_us.map((ab_us) =>(
                        <p className=' text-[#f7f7f7]  text-lg pt-4 font-normal  w-[97%] mx-auto ' dat-aos='fade-left' >
                        {ab_us.company_mission}
                        </p>
                    ))}    
                    </div>
                </div>
                </div>
            </section>
        </div>
    </div>
  </section>
                <div>
                    <Footer />
                </div>
           </body>
        </>
    )
}

export default AboutUsPage
