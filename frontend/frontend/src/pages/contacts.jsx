
import React, {useState} from "react";

import MultiNavBar from "./multiNavbar";
import Footer from "./footer";
import Button from "./button";

import { CgEditStraight } from "react-icons/cg";

import { contactList, socialLinks } from "./getArrays";
import { PostMessage } from "./postArrays";


function ContactsPage() {
    const contacts = contactList()

    const names = ['Call Us 24/7', 'Make A Quote', 'Location']

     const [message, setMessage] = useState({
            name:'',
            email:'',
            subject:'',
            phone:'',
            message:'',
        })
    
        async function handleMessaging(e){
            e.preventDefault()
            if(message.name && message.email && message.subject && message.message){ 
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
           <div>
                <div>
                    <MultiNavBar pageTitle={'Contact Us'} />
                </div>
                <div className="my-10">
                    <div className=" flex md:flex-row flex-col w-[95%] mx-auto  gap-4">
                        <div className="md:w-[35%] w-[95%] mx-auto ">
                            <div className="bg-[#3c72fc] p-3 text-[#fff] ">
                                <h2 className=" text-[#fff] text-3xl font-bold p-5 "> Contact Information </h2>
                                <p className="px-10 pb-4"> You can always contact us at any time, We will be happy to help! </p>
                                <div>
                                    {contacts.slice(0,3).map((con, index) =>(
                                        <div className="flex flex-row items-center w-[95%] mx-auto py-2 gap-3 " key={index}>
                                            <div className="">
                                                <div className=" rounded-full  md:w-[70px] w-[60px]  md:h-[70px] h-[60px] bg-[#fff] flex justify-center items-center  ">
                                                    <div className="p-2 border-2 border-dashed rounded-full  md:w-[60px] w-[50px]  md:h-[60px] h-[50px] animate-spin border-[#3c72fc] flex justify-center items-center"> </div>
                                                </div>
                                                <div className="static">
                                                    <div className="absolute text-[#3c72fc] md:mt-[-47px] mt-[-42px] md:ml-[23px] ml-[19px] text-2xl "> {con.icon} </div>
                                                </div>
                                            </div>
                                            <div className="space-y-0 py-2">
                                                <h4 className="text-lg"> {names[index]} </h4>
                                                <a href={con.linkToContact}> <h2 className="text-2xl font-bold"> {con.contactContent} </h2> </a>
                                            </div>
                                        </div>   
                                    ))} 
                                </div>
                                <div>
                                    <h2 className=" text-[#fff] text-2xl font-bold p-5 "> Connect with Us! </h2>
                                    <div>   
                                        <ul className="flex justify-center items-center font-bold gap-5 text-[#fff] py-2 ">
                                            {socialLinks.map((link) => (
                                                <li key={link.id} className=" border-2 border-[#fff] hover:border-[#082a4a] p-1 rounded-md hover:text-[#082a4a] transform transition-all hover:scale-125  ">
                                                    <a href={link.linkToSocial} className="text-3xl"> {link.icon} </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto md:w-[50%] w-[90%] ">
                            <div>
                                <div>
                                    <div className='flex flex-row gap-2 font-medium py-4 text-[#082a4a]  '>
                                        <CgEditStraight size={25} /> <h3>GET IN TOUCH</h3>
                                    </div>
                                    <div>
                                        <h1 className=' text-[#333] md:text-5xl text-3xl font-extrabold' > Ready To Get Started? </h1>
                                    </div>
                                    <div>
                                       <p className="p-5 text-lg font-medium "> Get started with our service and products for the best solutions for your business! </p> 
                                    </div>
                                    <div>
                                        <form action="">
                                           <div className="grid md:grid-cols-2 grid-cols-1 gap-3  w-[95%] px-3 mx-auto ">
                                                <div className="flex flex-col py-4 space-y-2">   
                                                    <label htmlFor="name">
                                                        Your Name*
                                                    </label>
                                                    <input type="text" name="name" placeholder="your name"  value={message.name} onChange={(e) => setMessage({...message, name: e.target.value})} className="border-2 border-[#33333380] p-3  " />
                                                </div>
                                                <div className="flex flex-col py-4 space-y-2">
                                                    <label htmlFor="email">
                                                        Your Email*
                                                    </label>
                                                    <input type="text" name="email" placeholder="your email"  value={message.email} onChange={(e) => setMessage({...message, email: e.target.value})} className="border-2 border-[#33333380] p-3  " />
                                                </div>
                                           </div>
                                           <div className="flex flex-col w-[90%] space-y-2 my-4 mx-auto">
                                                <label htmlFor="subject">
                                                    Your Subject
                                                </label>
                                                <input type="text" name="email" placeholder="eg. web/software dev ..."  value={message.subject} onChange={(e) => setMessage({...message, subject: e.target.value})} className="border-2 border-[#33333380] p-3" />
                                           </div>
                                                <div className="flex flex-col w-[90%] space-y-2 my-4 mx-auto">
                                                    <label htmlFor="message">
                                                        Your Message
                                                    </label>
                                                    <textarea name="message" id="message" placeholder="write your Message"  value={message.message} onChange={(e) => setMessage({...message, message: e.target.value})} className="border-2 border-[#33333380] p-3"  rows={5}></textarea>
                                                </div>
                                            <div className='relative z-50'>
                                                <Button onClick={handleMessaging}> Send Message</Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>            
                            </div>
                        </div>
                    </div>
                </div>
                <div>  {/** footer section */}
                  < Footer />
                </div>
           </div>
        </>
    )
}

export default ContactsPage