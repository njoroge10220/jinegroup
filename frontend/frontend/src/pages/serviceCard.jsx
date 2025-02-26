
import React from "react";


function ServiceCard({title, image, description, button1, button2, link1, link2}){
    return(
        <div className="bg-[#75c0c050] shadow-md rounded-sm flex flex-col justify-between py-2 gap-3" style={{fontFamily: "Roboto Condensed" }}>           
            <div className=" bg-[] "> 
                <img  className='w-[30%] px-5 flex ' src={image} alt={`${title} image`} />
            </div>
            <div>
                <h2 className="px-5 font-bold text-xl flex text-[#1a1a1a] ">
                    <a href={link1}>{title}</a>
                    </h2>        
            </div>
            <div className="flex  ">
                <p className="px-3 fontnormal flex ">{description} </p>
            </div>
            <div className=" flex justify-center items-center w-[80%] gap-2 mx-auto ">
                <a href={link1}>{button1}</a>  
                <a href={link2}>{button2}</a>
            </div> 
        </div>
    )
}

export default ServiceCard

