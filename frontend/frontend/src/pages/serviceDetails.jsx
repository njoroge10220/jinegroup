
import React from "react";

import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FaArrowRightLong, FaRegClock } from "react-icons/fa6";

import MultiNavBar from "./multiNavbar";
import Footer from "./footer";

import { Service } from "./getArrays";

import ai from '../assets/ai.jpg'

function ServiceDetail({id}){

    const services = Service()

    const Cons = [
        {id:1,text:'We Provide Best Solutions',},
        {id:2,text:'Keeping your systems running smoothly',},
        {id:3,text:'Transforming Businesses with our IT services',},
        {id:4,text:'Providing Scalable IT Infastructure',},
    ]

    const workHours = [
        {id:1,day:'Mon-Thur',time:'9.00 AM - 05.00 PM ',},
        {id:2,day:'Fri',time:'9.00 AM - 02.00 PM',},
        {id:3,day:'Sun and Sat',time:'Closed',},
        {id:4,day:'Online',time:'24 Hours',},
    ]

    return(
        <>
        <body>
            <div>
                <MultiNavBar pageTitle={'Service Details'} />
            </div>
            <div className=" w-[90%] mx-auto ">
                <div className=" flex md:flex-row flex-col gap-7 my-10 w-full mx-auto ">
                    <div className="md:w-[80%] " >
                        <div>
                            {services.map((service) =>
                            service.id === id && (
                                <div key={service.id} className=" space-y-6">
                                    <img src={service.service_Img} alt={`${service.service_name} vedio`} className="border-2 w-[95%] mx-auto md:h-[500px] h-[300px] p-1 " />
                                    <h2 className=" font-bold text-3xl " > {service.service_name} </h2>
                                    <p className="font-medium text-lg text-[#333] " > {service.service_description} </p>
                                </div>
                            ))}
                        </div>
                        <div className=" grid md:grid-cols-2 grid-cols-1 mt-10 ">
                            <div className=" space-y-5 w-full">
                                <h3 className=" font-bold text-xl " > Benefits With Our Service </h3>
                                <div className=" w-[90%] ">
                                    {Cons.map((con) =>(
                                        <div className='flex flex-col w-[95%] mx-auto ' key={con.id}>
                                            <div className=' flex flex-row'>
                                                <div className='text-[#3c72fc] rounded-sm flex justify-center '>
                                                <IoCheckmarkDoneCircleSharp size={25} />
                                                </div>
                                                <div className='flex justify-start px-2 w-[95%] text-[#333] '>
                                                <h3 className='font-semibold text-lg text-[#333]'> {con.text} </h3>
                                                </div>
                                            </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                            <div className=" my-2 ">
                                <img src={ai} alt='this image' />
                            </div>
                        </div>
                    </div>
                    <div className=" md:w-[40%] w-[90%] md:mx-0 mx-auto space-y-7 ">
                        <div className="w-[95%] mx-auto p-5 bg-[#75c0c050] ">
                            <h2 className="my-3 font-bold text-2xl">All Sevices</h2>
                            <ul className=" flex flex-col  ">
                            {services.map((service) =>(
                                <li key={service.id} className="  p-3 gap-6 ">
                                    <a href={`/service-details/${service.id}`} className="flex gap-6 justify-start px-4 py-5 text-xl font-medium hover:bg-[#23c4b6] items-center bg-[#f5f5f5]"> {service.service_name} <FaArrowRightLong size={20} /> </a>
                                </li>
                            ))}
                            </ul>
                        </div>
                        <div className="w-[95%] mx-auto p-5 bg-[#75c0c050]">
                            <h2 className="my-3 font-bold text-2xl">Working Hours</h2>
                            <ul className=" flex flex-col  ">
                            {workHours.map((hr) => (
                                <li key={hr.id} className=" p-3 gap-3  ">
                                    <h3 className="flex gap-4 justify-start px-4 py-5 text-lg font-medium items-center bg-[#f5f5f5]"><FaRegClock /> {`${hr.day} : ${hr.time}`}</h3>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </body>
        </>
    )
}

export default ServiceDetail
