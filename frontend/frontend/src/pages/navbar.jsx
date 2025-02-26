
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
                <div className="  w-[95%] mx-auto flex flex-row justify-between items-center p-2 ">
                    <div className=" w-[20%] ">
                        <a href="/" className=" absolute md:mt-[-30px] mt-[-25px] md:w-[25%] w-[40%] mx-auto ">
                            {logo.map((l) => l.id === 2 && (
                                <img key={l.id} src={l.logo_Img} alt="company logo" className=" md:w-[60%] w-[80%] mx-auto " />
                            ))}
                        </a>
                    </div>
                    <div className={`md:static absolute w-[40%] container
                     ${isMobile ? 'top-[70px] bg-gradient-to-r from-[#082A4A] to-[#2EC4B6] rounded-md flex-col py-2 gap-1 right-2 w-[60%] z-20 space-y-2 ' : 'top-[-500px] md:flex-row flex-col'}`}>
                        <ul className="gap-2 flex md:flex-row flex-col justify-between items-center">
                        {links.map((l) => (
                            <li key={l.id}  className="text-[#f7f7f7] hover:text-[#e0aa3e] "
                            onMouseEnter={() => handleMouseEnter(l.id)} 
                            onMouseLeave={() => handleMouseLeave()}
                            ref={btnRef}>
                                <a href={l.link} className="text-xl flex flex-row justify-between items-center "style={{ fontWeight: 600, fontFamily: 'Roboto Condensed' }}>
                                    {l.text}
                                    {l.id === 3 && (isHover === 3 ? <TiArrowSortedDown /> : < MdPlayArrow />)}
                                    {l.id === 4 && (isHover === 4 ? <TiArrowSortedDown /> : < MdPlayArrow />)}
                                </a>
                            </li>
                        ))}
                        </ul>
                        {isHover === 3 && (
                            <div ref={dropdownRef} onMouseLeave={() => handleMouseLeave()} className="absolute p-1 md:right-[400px] bg-[#333] rounded-md flex flex-col md:w-80 w-[60%] mx-auto text-center " style={{ fontFamily: "Roboto Condensed" }}>
                                {products.map((prod) =>(
                                    <a href={`/product-details/${prod.id}`} className="md:text-2xl text-xl font-semibold p-2 hover:text-[#e0aa3e] text-[#f4f4f4] hover:bg-[#aaabab80] rounded-md "> {prod.product_title} </a>
                                ))}
                            </div>
                        )}
                         {isHover === 4 && (
                            <div ref={dropdownRef} onMouseLeave={() => handleMouseLeave()} className="absolute p-1 md:right-[300px] bg-[#333] rounded-md flex flex-col md:w-80 w-[60%] mx-auto text-center " style={{ fontFamily: "Roboto Condensed" }}>
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
                <div className="md:hidden text-xl flex justify-center place-items-center w-[20%]  " onClick={() => setIsMobile(!isMobile)}>
                        {isMobile ? <ImCross /> : <IoMenu className="text-3xl"/>}
                </div> 
            </nav>
        </>
    )
}

export default Navbarpage
