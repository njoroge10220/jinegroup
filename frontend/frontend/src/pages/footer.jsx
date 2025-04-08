
import React, { useState, useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Button from "./button"
import { contactList, socialLinks, LogoIcon, Service } from "./getArrays"

import { MdDoubleArrow } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa6";



function Footer(){   

    const contacts = contactList()
    const logo = LogoIcon()
    const services = Service()

    const pageLinks = [
        {id:1,page:'FAQs',link:'/faqs'},
        {id:2,page:'Privacy Policy',link:'/privacy-policy'},
        {id:3,page:'Terms of Service',link:'/terms-of-service'},
        {id:4,page:'Report Incident',link:'/report-incidence'},
        {id:5,page:'Change Logs',link:'/change-log'},
    ]

    const mainItems = [    //footer
        {id: 1, text: 'Home', link: '/'}, 
        {id: 2, text: 'About Jine', link: '/about-us'},
        {id: 3, text: 'Our Products', link: '/products'},
        {id: 4, text: 'Our Services', link: '/services'},        
        {id: 5, text: 'Our Solutions', link: '/completed-projects'},        
      ]
    
    
    useEffect(()=> {
        AOS.init({ duration: 1000}) 
    }, [])

    return(
        <>
        <footer className=" py-3" >
            <div className="md:w-[98%] w-[95%] mx-auto bg-[#aaabab80] rounded-xl p-2 " data-aos='fade-down'>
                <div className="flex md:flex-row flex-col justify-between w-[95%] mx-auto gap-4 my-2">
                    <div className="flex flex-col justify-start py-3 px-5 " data-aos='fade-up'>
                        <a href="/" className="flex  mx-auto justify-center items-center " > 
                            {logo.map((l) => l.id === 3 && (
                            <img key={l.id} src={l.logo_Img} alt="org logo" className="w-[90%] mx-auto p-[1px] " />                   
                            ))}                                   
                        </a>
                        <div>
                            <ul className="flex justify-center items-center font-bold gap-5 text-[#333] py-2 ">
                                {socialLinks.map((link) => (
                                    <li key={link.id} className=" border-2 border-[#333] hover:border-[#3c72fc] p-1 rounded-md hover:text-[#3c72fc] transform transition-all hover:scale-125  ">
                                        <a href={link.linkToSocial} className="text-2xl"> {link.icon} </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div> 
                    <div className="flex flex-col  p-3 text-[#333]  " data-aos='fade-right'>
                        <h2 className="text-center font-bold py-3 text-2xl">IT Services</h2>
                        <ul className='  '>
                            {services.map((service)=>(
                            <li key={service.id} className='font-semibold py-2 text-xl'>             
                                <a href={`/service-details/${service.id}`} className="flex items-center gap-1 hover:text-[#3c72fc] transform transition-all hover:scale-95 hover:translate-x-10 "><MdDoubleArrow /> {service.service_name} </a>
                            </li>
                            ))}
                        </ul>
                    </div>                  
                    <div className="flex flex-col   p-3 text-[#333]  " data-aos='fade-right'>
                        <h2 className="text-center font-bold py-3 text-2xl"> Quick Links</h2>
                        <ul className=''>
                            {mainItems.map((link)=>(
                            <li key={link.id} className='font-semibold py-2 text-xl text-center'>             
                                <a href={link.link} className="flex items-center gap-1 hover:text-[#3c72fc] transform transition-all hover:scale-95 hover:translate-x-10 "><MdDoubleArrow /> {link.text} </a>
                            </li>
                            ))}
                        </ul>
                    </div>                    
                    <div className="flex flex-col   p-3 text-[#333] " data-aos='fade-right'>
                        <h2 className="text-center font-bold py-3 text-2xl">Contact Us</h2>
                        <ul className='  '>
                            {contacts.map((contact)=>(
                            <li key={contact.id} className='font-semibold py-2 text-xl'>             
                                <a href={contact.linkToContact} className="flex items-center gap-2 hover:text-[#3c72fc]  "> {contact.icon} {contact.contactContent} </a>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div> 
                <hr className=" border-2 border-[#2ec4b6] rounded-xl w-[80%] mx-auto " />
                <div className=" grid md:grid-cols-2 grid-flow-col-1 py-3 px-2  ">
                    <div className="flex justify-center items-center md:space-x-3 space-x-1 w-[95%] mx-auto  ">
                        {pageLinks.map((link) => (
                            <div  key={link.id} className=" flex space-x-2 justify-center items-center text-center text-md font-bold ">
                                <a href={link.link} className="hover:text-[#2ec4b6] ">{link.page} </a>
                                {link.id !== pageLinks.length && <p>|</p>}
                            </div>
                        ))}
                    </div>
                    <div className="py-1 mx-auto">
                        <h1>{contacts.map(c =>{
                            if(c.id === 4){
                            return  <a key={c.id} href={c.linkToContact} className="flex gap-1 justify-center items-center ">
                                copyrights <FaRegCopyright /> {new Date().getFullYear()}  {c.icon}{c.contactContent}</a>
                            }
                        })}</h1>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer
    
