
import React, { useEffect, useState } from "react"
import {AiOutlineClose, AiOutlineMenu, AiOutlineWhatsApp, } from "react-icons/ai"
import {FaGithub, FaEnvelope} from 'react-icons/fa'
import { Dropdown } from "react-bootstrap"
import Button from "./button"
import { Service, Product, sideLinks, mainLinks, LogoIcon } from "./arrays"


function Navbarpage(){
    const mainItems = mainLinks()
    const services = Service()
    const products = Product()
    const logo = LogoIcon()

    //usefull when in mobile to toggle the menu icons
    const [inMobile, setInMobile] = useState(false)
    const [serviceHovered, setServiceHovered] = useState(false)
    const [productHovered, setProductHovered] = useState(false)

    function handleHoverEnter(index){
        if(index === 4){ 
            serviceDropStay(true)
        }else if(index === 3){
            productDropStay(true)
        }else {
            productDropStay(false)
            serviceDropStay(false)
        }
    }
    function handleHoverLeave(index){ 
        if(index === 4 && serviceDropStay(false)){ 
            setServiceHovered(false)
        }else if(index === 4 && serviceDropStay(true)){ 
            setServiceHovered(true)
        }else if(index === 3 && productDropStay(false)){
            setProductHovered(false)
        }else if(index === 3 && productDropStay(true)){
            setProductHovered(true)
        }else{
            setServiceHovered(false)
            setProductHovered(false)
        }
    }

    function productDropStay(bool){ 
        productStay(bool)
    }
    function productStay(b){ 
        setProductHovered(b)
    }

    function serviceDropStay(bool){
        ServiceStay(bool)
    }
    function ServiceStay(b){
        setServiceHovered(b);
    }

    useEffect(() => {
       
    }, [])

    return(
       <>
        <nav className="bg-[#1a1a1a] w-full text-[#fff] fixed z-20">
            <div className=" flex justify-between items-center w-[90%] mx-auto my-auto md:h-20 h-14 top-[100px] ">    
                <div className="mt-5">
                    <a href="/">
                        <img src={logo} alt="company logo" className=" md:mt-12 mt-6 md:h-36 h-24" />
                    </a>                 
                </div>
                <div className={`md:static absolute md:w-auto w-[40%] bg-[#1a1a1a] md:right-0 right-3
                    ${inMobile ? 'top-[60px] ' : 'top-[-500px]'}`}>
                    <ul className='flex md:flex-row flex-col items-center md:gap-[4vw] gap-4 text-xl py-5' >
                    {mainItems.map((mainItem)=>(
                        <li className="hover:underline underline-offset-4 hover:text-[#c7ae6a] " key={mainItem.id}>
                            <a href={mainItem.linkToText} 
                            onMouseEnter={() => handleHoverEnter(mainItem.id)}  
                            onMouseLeave={() => handleHoverLeave(mainItem.id)}> {mainItem.text} </a>
                        </li>))}            
                    </ul>
                    {serviceHovered &&(
                        <div className=" grid grid-cols-1"
                            onMouseEnter={() => serviceDropStay(true)}
                            onMouseLeave={() => serviceDropStay(false)}>
                            <div
                            className="dropdown bg-[#1a1a1a]  md:w-64 w-full mx-auto md:mt-56 mt-10  
                            text-[#fff] transform: translate-ease-in-out"> 
                                {services.map((service) =>(
                                    <div className="text-xl flex justify-center items-center mx-auto font-semibold
                                        hover:text-[#b99a45] px-2 py-3">
                                          <a href={'/services'}> {service.service_name} </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )} 
                    {productHovered &&(
                         <div className="  grid grid-cols-1"
                        onMouseEnter={() => productDropStay(true)}
                        onMouseLeave={() => productDropStay(false)}>
                              <div
                                className="dropdown bg-[#1a1a1a] my-9 justify-center items-center 
                                text-[#fff] md:w-64 w-full transform: translate-ease-in-out md:px-0 px-5"> 
                                    {products.map((product) =>(
                                        <div className="text-xl flex justify-center items-center  mx-auto font-semibold
                                        hover:text-[#b99a45] px-5">
                                           <a href={'/products'}>{product.product_title} </a>
                                        </div>
                                    ))}
                                </div>
                        </div>
                    )} 
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
            {sideLinks.map((sideLink)=>(
                <li key={sideLink.id} className="left-1">
                    <a href={sideLink.link}>{sideLink.icon} </a>
                </li>
            ))}
          </ul>
        </div>
       </>
    )
}

export default Navbarpage