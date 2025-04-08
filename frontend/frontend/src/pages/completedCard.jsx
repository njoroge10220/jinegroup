

import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";

import Button from "./button"


function CompletedCard({image, genre, title,link}){
    return(
        <>
        <div className="md:w-[380px] w-[330px] md:h-[390px] h-[340px] border-2 rounded-[4px] border-[#aaa] shadow-xl shadow-[#1a1a1a50] bg-[#aaabab50] m-2 ">
            <div>
                <img src={image} alt={`${title} image`} className="w-full md:h-[390px] h-[340px] rounded-[4px] " />
            </div>
            <div className="static">
                <div className=" absolute mt-[-80px] p-3 flex flex-col justify-start ">
                    <div className="text-[#3c72fc] text-lg font-medium flex ">
                       <h4> {genre} </h4>
                    </div>
                    <div className="text-[#2ec4b6] font-semibold text-2xl flex items-center ">
                       <a href={link}>  <h2 className=""> {title} </h2> </a>
                    </div>
                </div>
                <div className=" absolute mt-[-70px] ml-[260px] flex justify-end items-center p-3 ">
                    <Button link={link}><FaArrowRightLong /></Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default CompletedCard
