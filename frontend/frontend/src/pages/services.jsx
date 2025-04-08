
import React from "react";

import MultiNavBar from "./multiNavbar";
import Footer from "./footer";
import ServicePageCard from "./servicePageCard";

import { Service } from "./getArrays";

function ServicesPage(){

    const services = Service()
    
    return(
        <>
        <div>
            <div>
                <MultiNavBar pageTitle={'IT Services'} />
            </div>
            <div className=" my-[100px] ">
            <ul className="flex flex-wrap  justify-center gap-1 md:w-[98%] w-full mx-auto ">
                {services.map((ser, index) =>(
                   <li className=" md:w-[30%] w-[90%] mx-5 my-2 " key={index}>
                     <ServicePageCard key={index}
                    imageBig={ser.service_big_Img}
                    imageSmall={ser.service_Img}
                    title={ser.service_name }
                    content={ser.service_short_description}
                    link={`service-details/${ser.id}`}
                    />
                   </li>
                ))}
            </ul>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
        </>
    )
}

export default ServicesPage
