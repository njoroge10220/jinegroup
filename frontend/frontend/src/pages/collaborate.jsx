
import React, {useState} from "react";

import { CgEditStraight } from "react-icons/cg";

import Button from "./button";
import { PostMessage } from "./postArrays";

function CollaborateCard(){

    const [message, setMessage] = useState({
        name:'',
        email:'',
        subject:'',
        phone:'',
        message:'',
    })

    async function handleMessaging(e){
        e.preventDefault()
        if(message.name && message.email && message.subject && message.phone && message.message){ 
            await PostMessage({
                name:message.name,
                email:message.email,
                subject:message.subject,
                phone:message.phone,
                message:message.message,
            })
            setMessage({  name:'', email:'', subject:'', phone:'', message:'', })
        }else{ 
            alert(`fill in all the blanks to send message`)
        }
    }


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
                    <div className="flex md:flex-row flex-col gap-3  my-3 ">
                        <div className="flex flex-col mx-auto gap-1">
                            <label htmlFor="name" className="text-xl">Your Name</label>
                            <input type="text" name="name" placeholder="name" value={message.name} onChange={(e) => setMessage({...message, name: e.target.value})} className="p-2 font-semibold text-lg bg-[#f5f4f5] " />
                        </div>
                        <div className="flex flex-col mx-auto gap-1">
                            <label htmlFor="email" className="text-xl">Your Email</label>
                            <input type="text" name="email" placeholder="email" value={message.email} onChange={(e) => setMessage({...message, email: e.target.value})} className="p-2 font-semibold text-lg bg-[#f5f4f5] " />
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-3 my-3 ">
                        <div className="flex flex-col mx-auto gap-1">
                            <label htmlFor="subject" className="text-xl">Subject</label>
                            <input type="text" name="subject" placeholder="eg web/software dev..." value={message.subject} onChange={(e) => setMessage({...message, subject: e.target.value})} className="p-2 font-semibold text-lg bg-[#f5f4f5] " />
                        </div>
                        <div className="flex flex-col mx-auto gap-1">
                            <label htmlFor="phone" className="text-xl">Your Phone</label>
                            <input type="number" name="phone" placeholder="phone number" value={message.phone} onChange={(e) => setMessage({...message, phone: e.target.value})} className="p-2 font-semibold text-lg bg-[#f5f4f5] " />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col mx-auto gap-1 my-3">
                        <label htmlFor="message" className="text-xl">Message</label>
                        <textarea name="message" id="message" placeholder="Write Message" value={message.message} onChange={(e) => setMessage({...message, message: e.target.value})} className="p-2 bg-[#f5f4f5]" rows={4} ></textarea>
                        </div>
                    </div>
                    <div> <Button onClick={handleMessaging}>Send Message</Button> </div>
                </form>
            </div>  
        </>
    )
}

export default CollaborateCard
