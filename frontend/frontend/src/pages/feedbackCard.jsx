
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { SiComma } from "react-icons/si";


function FeedbackCard({name, feedback, rating}){
    return(
        <div className="py-2 gap-3 bg-[#fff] h-[300px] ">
            <div className="px-5" >
                <h2 className="text-xl font-bold p-2 " > {name} </h2>
                <h4 className="text-lg"> </h4>
                <div className="flex py-1 px-2 ">
                    {Array.from({length: 5}, (_, index)=>{
                    const rate = index + 1  
                        return(                    
                            <AiFillStar key={index} color={rate <= rating ?'#2ec4b6' : '#aaabab'} className="my-1 text-xl   "/>
                        )})}    
                </div>
            </div> 
            <div className="static  flex flex-row justify-end items-center">
                <div className="absolute mt-[-180px] mr-[20px] flex flex-row -space-x-3 text-[#3c72fc] ">
                <SiComma size={40} /><SiComma size={40} />
                </div>
            </div>
            <div className=" flex justify-center items-center  px-4 py-2 h-[65%]  ">
            {feedback}   
            </div>
        </div>
    )
}

export default FeedbackCard
