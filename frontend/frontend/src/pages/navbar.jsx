
import React, { useEffect, useState } from "react"
import {AiOutlineClose, AiOutlineMenu, AiOutlineWhatsApp, } from "react-icons/ai"
import {MdOutlineArrowRight, MdOutlineArrowDropDown } from "react-icons/md";
import {FaGithub, FaEnvelope} from 'react-icons/fa'
import { Dropdown } from "react-bootstrap"
import Button from "./button"
import { Service, Product, sideLinks, mainLinks, LogoIcon, } from "./arrays"


function Navbarpage(){
    const mainItems = mainLinks()
    const services = Service()
    const products = Product()
    const logo = LogoIcon()
    const sideLink = sideLinks()

    //usefull when in mobile to toggle the menu icons
    const [inMobile, setInMobile] = useState(false)
    const [isHover, setIsHover] = useState(null)
   

    useEffect(() => {
      setIsHover(null) 
    }, [])

    return(
       <>
        <nav className="bg-[#1a1a1a] w-full text-[#fff] fixed z-20">
            <div className=" flex justify-between items-center w-[90%] mx-auto my-auto md:h-20 h-14 top-[100px] ">    
                <div className="mt-5">
                    <a href="/">
                        {logo.map((l) =>(
                            <img src={l.logo_Img} alt="company logo" className=" md:mt-12 mt-6 md:h-36 h-24" />
                        ))}
                    </a>                 
                </div>
                <div className={`md:static absolute md:w-auto w-[40%] md:bg-[#1a1a1a]  md:right-0 right-3
                    ${inMobile ? 'top-[60px] bg-[#FFFFFF80] text-[#000] ' : 'top-[-500px]'}`}>
                    <ul className='flex md:flex-row flex-col items-center md:gap-[4vw] gap-4 text-xl py-5 font-semibold' >
                    {mainItems.map((mainItem)=>(
                        <li className="hover:underline underline-offset-4  hover:text-[#c7ae6a] " key={mainItem.id}>
                            <a href={mainItem.linkToText}                       
                            onMouseEnter={() => setIsHover(mainItem.id)}> 
                            <div className="flex ">  
                                {mainItem.text} 
                                {mainItem.id === 3 ? 
                                (isHover === 3 ? < MdOutlineArrowDropDown className="md:my-0.7" size={30} /> 
                                : < MdOutlineArrowRight className="md:my-0.7" size={30} />) : ("")} 
                                {mainItem.id === 4 ? 
                                (isHover === 4 ? < MdOutlineArrowDropDown className="md:my-0.7" size={30} /> 
                                : < MdOutlineArrowRight className="md:my-0.7" size={30} />) : ("")} 
                            </div>
                            </a>
                            
                        </li>))}            
                    </ul>
                    {isHover === 3 &&
                    <div className="absolute md:w-full mx-auto z-10 -mt-2" 
                    onMouseLeave={() =>setIsHover(null)}>
                        <ul className="py-1 md:w-[30%] w-full bg-[#FFFFFF80] text-center ">
                            {products.map((prod) => (
                                <li className="md:py-2 py-1 md:text-xl text-lg
                                    text-[#1a1a1a] hover:text-[#c7ae6a] font-semibold px-1"
                                key={prod.id}>
                                    <a href="/products">                                                
                                        {prod.product_title}                                                 
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    }                   
                    {isHover === 4 && 
                    <div className="absolute md:w-[100%] mx-auto  z-10 -mt-3" 
                    onMouseEnter={() => setIsHover(isHover)} onMouseLeave={() =>setIsHover(null)}>
                        <ul className="py-1 md:w-[30%] w-full bg-[#FFFFFF80] text-center " >
                            {services.map((ser) =>(
                                <li className="md:py-2 py-1 md:text-xl text-lg text-[#1a1a1a] hover:text-[#c7ae6a]  font-semibold"  
                                key={ser.id}>
                                    <a href="/services" >
                                        {ser.service_name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    }                   
                </div>
                <div className="p-3 flex justify-between items-center gap-6"> 
                   <a href='/contacts'> <Button>Contact</Button> </a>
                    <div className="md:hidden text-2xl" onClick={() =>setInMobile(!inMobile)}>
                        {inMobile ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </div>
                </div>
           </div>
        </nav>
        {/** side bar  */}
        <div className="fixed bg-[#1a1a1a] top-[50%] rounded-r-xl z-10">
          <ul className="flex flex-col md:text-3xl text-2xl gap-6 text-[#c7ae6a] px-0.5 py-2 ">
            {sideLink.map((link)=>(
                <li key={link.id} className="left-1">
                    <a href={link.link}>{link.icon} </a>
                </li>
            ))}
          </ul>
        </div>
       </>
    )
}

export default Navbarpage