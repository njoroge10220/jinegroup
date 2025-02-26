
import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import { BsPersonFill } from "react-icons/bs";


function BlogCard({image, date, topic, byWho, link}){
    return(
        <>
            <div className="bg-[#f4f4f4] rounded-[3px] m-3 md:w-[95%] mx-auto group min-h-full">
                <div>
                    <img src={image} alt='news image' className="w-full h-[250px] transition-transform duration-500 ease-in-out transform group-hover:scale-95 " />
                </div>
                <div>
                    <div className="static m-3">
                        <div className="absolute mt-[-300px] ml-[40px] p-2 text-center bg-[#2ec4b6] text-[#fff] ">
                            <h2 className="flex flex-col"> 
                                {date.split('-').map((d) =>(
                                <div className=" font-semibold text-lg">
                                    {d}
                                </div>
                                ))} 
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-2 ">
                    <h3 className="flex items-center gap-2 text-[#3c72fc] "> <BsPersonFill size={20} /> { `By ${byWho}`} </h3>
                </div>
                <hr className="border-1 w-[80%] mx-auto border-[#aaabab] " />
                <div className="p-3 flex flex-col flex-grow ">
                    <h1 className="font-bold text-2xl"> {topic} </h1>
                </div>
                <div className=" md:w-[40%] w-[70%] flex justify-center  p-4">
                    <a href='/blog-news'> <h1 className="flex gap-4 font-medium hover:scale-125 hover:translate-x-10 hover:text-[#3c72fc]">Read More <FaArrowRightLong size={20} /> </h1> </a>
                </div>
            </div>
        </>
    )
}

export default BlogCard
