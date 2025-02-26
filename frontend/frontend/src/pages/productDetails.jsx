

import React from "react";

import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FaArrowRightLong, FaRegClock } from "react-icons/fa6";


import MultiNavBar from "./multiNavbar";
import Footer from "./footer";
import Button from "./button";

import { Product } from "./getArrays";

import ai from '../assets/ai.jpg'

function ProductDetail({id}){

    const products = Product()
    
    const Pros = [
        {id:1,text:'We Provide Best Solutions',},
        {id:2,text:'Keeping your systems running smoothly',},
        {id:3,text:'Transforming Businesses with our IT services',},
        {id:4,text:'Providing Scalable IT Infastructure',},
    ]

    const workHours = [
        {id:1,day:'Mon-Thur',time:'9.00 AM - 05.00 PM ',},
        {id:2,day:'Fri',time:'9.00 AM - 02.00 PM',},
        {id:3,day:'Sun and Sat',time:'Closed',},
        {id:4,day:'Online',time:'24 Hours',},
    ]

    return(
        <>
        <body>
            <div>
                <MultiNavBar pageTitle={'Product Details'} />
            </div>
            <div className=" w-[90%] mx-auto ">
                <div className=" flex md:flex-row flex-col gap-7 my-10 w-full mx-auto ">
                    <div className="md:w-[80%] " >
                        <div>
                            {products.map((product) =>
                            product.id === id && (
                                <div key={product.id} className=" space-y-6">
                                    <img src={product.product_Img} alt={`${product.product_title} vedio`} className="border-2 w-[95%] mx-auto md:h-[500px] h-[300px] p-1 " />
                                    <h2 className=" font-bold text-3xl " > {product.product_title} </h2>
                                    <p className="font-medium text-lg text-[#333] " > {product.product_description} </p>
                                    <div className="flex justify-start px-8">
                                    <Button link={''} ><div className='flex items-center gap-4 p-2'>Download <FaArrowRightLong size={17} /></div></Button>
                                    </div>
                                </div>
                                ))}
                        </div>
                        <div className=" grid md:grid-cols-2 grid-cols-1 mt-10 ">
                            <div className=" space-y-5 w-full">
                                <h3 className=" font-bold text-xl " > Benefits With Our Product </h3>
                                <div className=" w-[90%] ">
                                    {Pros.map((pro) =>(
                                        <div className='flex flex-col w-[95%] mx-auto ' key={pro.id}>
                                            <div className=' flex flex-row'>
                                                <div className='text-[#3c72fc] rounded-sm flex justify-center '>
                                                <IoCheckmarkDoneCircleSharp size={25} />
                                                </div>
                                                <div className='flex justify-start px-2 w-[95%] text-[#333] '>
                                                <h3 className='font-semibold text-lg text-[#333]'> {pro.text} </h3>
                                                </div>
                                            </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                            <div className=" my-2 ">
                                <img src={ai} alt='this image' />
                            </div>
                        </div>
                    </div>
                    <div className=" md:w-[40%] w-[90%] md:mx-0 mx-auto space-y-7 ">
                        <div className="w-[95%] mx-auto p-5 bg-[#75c0c050] ">
                            <h2 className="my-3 font-bold text-2xl">All Products</h2>
                            <ul className=" flex flex-col  ">
                            {products.slice(0.5).map((product) =>(
                                <li key={product.id} className="  p-3 gap-6 ">
                                    <a href={`/product-details/${product.id}`} className="flex gap-6 justify-start px-4 py-5 text-xl font-medium hover:bg-[#23c4b6] items-center bg-[#f5f5f5]"> {product.product_title} <FaArrowRightLong size={20} /> </a>
                                </li>
                            ))}
                            </ul>
                        </div>
                        <div className="w-[95%] mx-auto p-5 bg-[#75c0c050]">
                            <h2 className="my-3 font-bold text-2xl">Working Hours</h2>
                            <ul className=" flex flex-col  ">
                            {workHours.map((hr) => (
                                <li key={hr.id} className=" p-3 gap-3  ">
                                    <h3 className="flex gap-4 justify-start px-4 py-5 text-lg font-medium items-center bg-[#f5f5f5]"><FaRegClock /> {`${hr.day} : ${hr.time}`}</h3>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </body>
        </>
    )
}

export default ProductDetail
