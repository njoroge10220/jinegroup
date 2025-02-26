
import React from "react";

function TechStackCard({image, name}){
    return(
        <>  
        <div className="border-2 rounded-xl text-[#fff] flex flex-col place-content-center gap-2 w-[200px] m-4 group transform transition-all hover:scale-125 hover:translate-z-20 ">
           <div className="static mt-[-30px]  mx-auto rounded-full bg-[#f4f4f4] p-2 transition-transform duration-500 ease-in-out transform group-hover:rotate-[360deg] "><img src={image} alt={`${name} image`} className="w-[50px] h-[50px] mx-auto  " /> </div>
           <h2 className="text-center mx-auto text-2xl p-7 font-semibold "> {name} </h2>
        </div>
        </>
    )
}

export default TechStackCard
