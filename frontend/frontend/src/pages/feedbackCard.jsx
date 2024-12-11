
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


function FeedbackCard({title, occupation, feedback, rating}){
    return(
        <div>
            <div className="bg-[#aaabab] rounded-lg md:w-80 w-72 mx-auto flex flex-col px-2 ">                    
                <h2 className="text-xl font-semibold  text-black flex justify-center items-center py-2 px-3"> {title} </h2>
                <h3 className="text-lg font-medium  text-black flex justify-center items-center  "> {occupation} </h3>
                <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[50%] h-1 my-3 rounded-xl mx-auto " />
                <div className="flex justify-start pl-4 py-1 text-[#b99a45] "> <FaQuoteLeft /> </div>
                <div className="flex justify-center items-center px-3 mx-auto flex-grow">
                    <p className="py-4 flex flex-row justify-center items-center  px-1 mx-auto">
                        {feedback}                         
                                             
                    </p>
                </div>
                <div className="flex justify-end pr-4 py-1 text-[#b99a45]"> <FaQuoteRight /> </div>
                <div className="flex justify-center items-center py-3">
                    {Array.from({length: rating}, (_, index)=>(
                       <AiFillStar key={index} style={{color: '#b99a45'}} className="my-3"/>
                    ))}    
                </div>
            </div>
        </div>
    )
}

export default FeedbackCard