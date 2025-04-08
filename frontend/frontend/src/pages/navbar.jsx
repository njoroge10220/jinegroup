
import React, { useState, useEffect, useRef } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

import { LogoIcon,mainLinks, Product, Service } from "./getArrays";
import Button from "./button";

import { MdPlayArrow } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";


function Navbarpage(){
    const logo = LogoIcon()
    const links = mainLinks()
    const products = Product()
    const services = Service()

    const [isMobile, setIsMobile] = useState(false)
    const [isHover, setIsHover] = useState(null)
    const btnRef = useRef(null)
    const dropdownRef = useRef(null)

    const handleMouseEnter = (id) =>{
        setIsHover(id)       
    }
    const handleMouseLeave = (e) =>{
       if(dropdownRef.current && !dropdownRef.current.matches(':hover')
        && btnRef.current && !btnRef.current.matches(':hover')){
            setIsHover(null)
        }
    } 

    useEffect(() =>{
        AOS.init({ duration: 1000}) 
    }, [])

    return(
        <>
            <nav className="  bg-gradient-to-r from-[#082A4A] to-[#2EC4B6] w-full mx-auto flex ">{/** logo tabs contact */}
                <div className="  w-[95%] mx-auto flex flex-row justify-between items-center md:p-3 px-3 py-2 ">
                    <div className=" static w-[15%] ">
                        <a href="/" className=" absolute md:mt-[-30px] mt-[-20px] md:w-[15%] w-[30%] mx-auto ">
                            {logo.map((l) => l.id === 2 && (
                                <img key={l.id} src={l.logo_Img} alt="company logo" className=" w-full " />
                            ))}
                        </a>
                    </div>
                    <div className={`md:static absolute w-[50%] container  px-1 transform transition-transform duration-300 ease-in-out
                     ${isMobile ? 'top-[60px] translate-x-0 right-1 bg-gradient-to-r from-[#082A4A] to-[#2EC4B6] rounded-md flex-col py-2 gap-4  w-[80%] z-20 space-y-4  overflow-y-scroll h-[420px] ' : ' md:translate-x-0 -translate-x-full top-[-500px] md:flex-row flex-col'}`}>
                        <ul className=" flex md:flex-row flex-col justify-between items-center">
                        {links.map((l) => (
                            <li key={l.id}  className="text-[#f7f7f7] hover:text-[#e0aa3e] "
                            onMouseEnter={() => handleMouseEnter(l.id)} 
                            onMouseLeave={() => handleMouseLeave()}
                            ref={btnRef}>
                                <a href={l.link} className="text-xl flex md:flex-row flex-col md:py-0 py-2 justify-between items-center "style={{ fontWeight: 600, fontFamily: 'Roboto Condensed' }}>
                                    <div className="flex items-center">
                                        {l.text}
                                        {l.id === 3 && (isHover === 3 || isMobile ? <TiArrowSortedDown /> : < MdPlayArrow />)}
                                        {l.id === 4 && (isHover === 4 || isMobile ? <TiArrowSortedDown /> : < MdPlayArrow />)}
                                    </div>                                      
                                </a>
                                {l.id === 3 && isMobile && (
                                    <div className=" p-1 md:right-[400px] bg-[#33333380] rounded-md flex flex-col md:w-80  mx-auto text-center " style={{ fontFamily: "Roboto Condensed" }}>
                                        {products.map((prod) =>(
                                            <a href={`/product-details/${prod.id}`} className="md:text-2xl text-xl font-semibold p-2 hover:text-[#e0aa3e] text-[#f4f4f4] hover:bg-[#aaabab80] rounded-md "> {prod.product_title} </a>
                                        ))}
                                    </div>
                                )}
                                {l.id === 4 && isMobile && (
                                    <div className="p-1 md:right-[300px] bg-[#33333380] rounded-md flex flex-col md:w-80  mx-auto text-center " style={{ fontFamily: "Roboto Condensed" }}>
                                        {services.map((ser) => (
                                            <a href={`/service-details/${ser.id}`} className="md:text-2xl text-xl font-semibold p-2 hover:text-[#e0aa3e] hover:bg-[#aaabab80] rounded-md text-[#f4f4f4] "> {ser.service_name} </a>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                        </ul>
                        {isHover === 3 && !isMobile && (
                            <div ref={dropdownRef} onMouseLeave={() => handleMouseLeave()} className="absolute p-1 md:right-[150px] bg-[#333] rounded-md flex flex-col md:w-80 w-[60%] mx-auto text-center " style={{ fontFamily: "Roboto Condensed" }}>
                                {products.map((prod) =>(
                                    <a href={`/product-details/${prod.id}`} className="md:text-2xl text-xl font-semibold p-2 hover:text-[#e0aa3e] text-[#f4f4f4] hover:bg-[#aaabab80] rounded-md "> {prod.product_title} </a>
                                ))}
                            </div>
                        )}
                         {isHover === 4 && !isMobile && (
                            <div ref={dropdownRef} onMouseLeave={() => handleMouseLeave()} className="absolute p-1 md:right-[100px] bg-[#333] rounded-md flex flex-col md:w-80 w-[60%] mx-auto text-center " style={{ fontFamily: "Roboto Condensed" }}>
                                {services.map((ser) => (
                                    <a href={`/service-details/${ser.id}`} className="md:text-2xl text-xl font-semibold p-2 hover:text-[#e0aa3e] hover:bg-[#aaabab80] rounded-md text-[#f4f4f4] "> {ser.service_name} </a>
                                ))}
                            </div>
                        )}
                    </div>
                    <div>
                        <Button link={'/contact'}>Contact</Button>
                    </div> 
                </div>
                <div className="md:hidden text-xl flex justify-center place-items-center w-[20%]  " >
                        {isMobile ? <ImCross className="cursor-pointer" onClick={() => setIsMobile(!isMobile)} /> : <IoMenu className="text-3xl cursor-pointer" onClick={() => setIsMobile(!isMobile)}/>}
                </div> 
            </nav>
        </>
    )
}

export default Navbarpage
