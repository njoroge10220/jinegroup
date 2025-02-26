
import React from "react";

import MultiNavBar from "./multiNavbar";
import Footer from "./footer";
import ServicePageCard from "./servicePageCard";

import { Service } from "./getArrays";
import ai from '../assets/ai.jpg'
import stack from '../assets/stack.jpg'

function ServicesPage(){

    const services = Service()
    const imagesBig = [ai,stack,ai,stack,]
    return(
        <>
        <body>
            <div>
                <MultiNavBar pageTitle={'IT Services'} />
            </div>
            <div className=" my-[100px] ">
            <ul className="flex flex-wrap  justify-center gap-1 md:w-[95%] w-full mx-auto ">
                {services.map((ser, index) =>(
                   <li className=" md:w-[30%] w-[90%] mx-5 my-2 " key={index}>
                     <ServicePageCard key={index}
                    imageBig={imagesBig[index]}
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
        </body>
        </>
    )
}

export default ServicesPage
