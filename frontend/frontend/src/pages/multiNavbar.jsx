
import React from "react";
import { MdDoubleArrow } from "react-icons/md";

import Navbarpage from "./navbar";
import ai from '../assets/ai.jpg'

function MultiNavBar(props){
    return(
        <>
            <div>
                <div className='flex flex-col justify-center items-center sticky top-1 z-50 w-[100%] mx-auto py-0 '> 
                    <div className='flex flex-col justify-center items-center absolute top-1 w-[100%] mx-auto py-1 '>
                        <Navbarpage />
                    </div>
                </div>
                <div className='' data-aos='fade-up'>
                    <div className='flex flex-col w-[100%] py-10 ' style={{ backgroundImage: `url(${ai})` }}>
                        <div className='md:mt-[100px] w-[80%] mx-auto mt-[60px] px-3' >
                            <div className='py-10'>
                                <h1 className=' text-[#fff] md:text-6xl text-3xl tracking-tight' style={{fontWeight:'600', fontFamily: "Roboto Condensed" }} dat-aos='fade-left' >
                                    {props.pageTitle}
                                </h1>                            
                                <div className=' text-[#fff] text-xl py-4 font-medium md:w-[90%] w-[100%]' dat-aos='fade-left'>
                                    <h2 className="flex items-center gap-1"> Home <MdDoubleArrow /> {props.pageTitle} </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MultiNavBar
