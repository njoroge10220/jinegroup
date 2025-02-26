
import React from "react";

function ProcessCard({number, image, title, description}){
    return(
        <>
        <div className="gap-3 w-[90%] mx-auto flex flex-col justify-center items-center ">
            <div className="p-2 border-2 border-dashed rounded-full  w-[170px] h-[170px] animate-spin border-[#3c72fc] flex justify-center items-center ">
                
            </div>
            <div className="static">
                <div><img src={image} alt={`${title} image`} className=" absolute mt-[-172.5px] ml-[-75px]  w-[150px] h-[150px] rounded-full " /> </div>
            </div>
            <div className="static">
                <div className="bg-[#2ec4b6] rounded-full p-2 w-[40px] h-[40px] flex justify-center items-center font-black text-xl absolute mt-[-175px] ml-[-80px]  text-[#f3f7fb] ">
                    <h2>{number} </h2>
                </div>
            </div>
           <div className="my-2 space-y-2 w-[90%] mx-auto ">
            <div className="font-bold text-2xl text-center text-[#333] ">
                    <h2>{title} </h2>
                </div>
                <div className="font-normal text-lg text-center">
                    <p>{description} </p>
                </div>
           </div>
        </div>
        </>
    )
}

export default ProcessCard
