
import React from "react";

import Button from "./button";
import { FaArrowRightLong } from "react-icons/fa6";

function ServicePageCard({imageBig, imageSmall, title, content, link}){
    return(
        <>
        <div className="bg-[#75c0c050] rounded-tl-[100px] rounded-br-[100px] group gap-3 flex flex-col h-full ">
            <div className="">
                <img src={imageBig} alt={`${title} image`} className="rounded-tl-[100px] h-[300px] w-full "  />
            </div>
            <div className="relative w-[90%] mx-auto py-4 ">
                <div className="absolute mt-[-50px] bg-[#2ec4b6] p-2 group-hover:scale-125 rounded-sm ">
                    <img src={imageSmall} alt={`${imageSmall} image`} className=" w-[50px] h-[50px] " />
                </div>
            </div>
           <div className=" flex flex-col flex-1 px-5 ">
                <div className=" py-4 px-2">
                    <h2 className="text-xl font-bold "> {title} </h2>
                </div>
                <div className=" py-2 px-5 w-[95%]  ">
                    <p className="text-md font-normal"> {content} </p>
                </div>
                <div className="pt-2 pb-5 flex px-5 mt-auto ">
                    <div className="hover:translate-x-10 hover:scale-90 my-3">
                        <Button link={link}><div className="flex gap-4 justify-center items-center ">Read More <FaArrowRightLong size={20} /></div></Button>
                    </div>
                </div>
           </div>
        </div>
        </>
    )
}

export default ServicePageCard
