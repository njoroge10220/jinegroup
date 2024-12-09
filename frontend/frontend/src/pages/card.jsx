
import React from "react";


function Card({title, image, description, button1, button2, link1, link2}){
    return(
        <div className="bg-[rgb(170,171,171)] shadow-md rounded-xl flex flex-col justify-between">           
            <div className="h-48 "> 
                <img  className='h-44 w-44 mx-auto py-2 flex rounded-t-xl' src={image} alt={`${title} image`} />
            </div>
            <div>
                <h2 className="px-2 font-bold text-2xl flex justify-center items-center my-3 text-[#1a1a1a] ">{title} </h2>        
            </div>
            <div className="flex h-full justify-center items-center ">
                <p className={` px-2 my-2 font-semibold flex justify-center items-center
                    ${description ? 'h-[80%] ' : 'h-[30%] ' } w-[90%] mx-auto `}>{description} </p>
            </div>
            <div className=" flex justify-center items-center w-[80%] gap-2 mx-auto my-5 ">
                <a href={link1}>{button1}</a>  
                <a href={link2}>{button2}</a>
            </div> 
        </div>
    )
}

export default Card

