
import React, { useEffect, useState } from 'react'

import {motion} from 'framer-motion'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { FaPlus, FaMinus } from "react-icons/fa6";

import Button from './button'

function FaqCard({question, answer}){

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() =>{
       AOS.init({ duration: 1000}) 
    },[])
    return (
        <div className='md:p-2 py-2 flex flex-col md:m-3 mx-auto my-3 w-[100%] border-[#f3f7fb] bg-[#f3f7fb] border-1 shadow-lg shadow-[#1a1a1a50] rounded-sm  '>
            <div className='static p-4 flex'>{/** question  */}
                <div className={` p-3 w-[95%] mx-auto text-lg font-semibold ${isOpen ? 'text-[#3c72fc] ': 'text-[#1a1a1a] '}`} >
                    {question}
                </div>
                <div className=' flex justify-center px-2 '>
                    <Button onClick={(e) => {e.stopPropagation();  setIsOpen(!isOpen); console.log('clicked')}}>
                    <div > {isOpen ? <FaMinus /> : <FaPlus />}</div>
                    </Button>
                </div>
            </div>
            <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={`px-3 py-5 w-[90%] mx-auto text-lg font-medium `}  >{/** answer */}
                {answer}
            </motion.div>
        </div>
  )
}

export default FaqCard