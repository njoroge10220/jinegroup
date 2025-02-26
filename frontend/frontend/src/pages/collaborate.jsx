
import React from "react";

import { CgEditStraight } from "react-icons/cg";

import Button from "./button";

function CollaborateCard(){
    return(
        <>
            <div className="bg-[#2EC4B6] p-7 gap-3 flex flex-col rounded-sm ">
                <div>
                    <div className=' flex flex-col justify-start '>
                        <div className='flex flex-row gap-2 font-medium py-2 text-[#f4f4f4]'>
                            <CgEditStraight size={25} /> <h3>TALK TO US</h3>
                        </div>
                        <div>
                        <h1 className=' text-[#f4f4f4] md:text-4xl text-2xl font-extrabold'> How May We Assist You? </h1>
                        </div>
                    </div>
                </div>
                <form action="">
                    <div className="flex md:flex-row flex-col gap-3 my-3 ">
                        <div className="flex flex-col mx-auto gap-1">
                            <label htmlFor="name" className="text-xl">Your Name</label>
                            <input type="text" name="name" placeholder="name" className="p-2 font-semibold text-lg" />
                        </div>
                        <div className="flex flex-col mx-auto gap-1">
                            <label htmlFor="email" className="text-xl">Your Email</label>
                            <input type="text" name="email" placeholder="email" className="p-2 font-semibold text-lg" />
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-3 my-3 ">
                        <div className="flex flex-col mx-auto gap-1">
                            <label htmlFor="subject" className="text-xl">Subject</label>
                            <input type="text" name="subject" placeholder="eg web/software dev..." className="p-2 font-semibold text-lg" />
                        </div>
                        <div className="flex flex-col mx-auto gap-1">
                            <label htmlFor="phone" className="text-xl">Your Phone</label>
                            <input type="text" name="phone" placeholder="phone number" className="p-2 font-semibold text-lg" />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col mx-auto gap-1 my-3">
                        <label htmlFor="message" className="text-xl">Message</label>
                        <textarea name="message" id="message" placeholder="Write Message"className="p-2" rows={4} ></textarea>
                        </div>
                    </div>
                    <div> <Button>Send Message</Button> </div>
                </form>
            </div>  
        </>
    )
}

export default CollaborateCard
