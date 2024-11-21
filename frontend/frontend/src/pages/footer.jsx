
import React, { useState, useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Button from "./button"
import { contactList,  mainLinks,  socialLinks } from "./arrays"


function Footer(){   

    const mainItems = mainLinks()
    const contacts = contactList()

    const [isSubscribe, setIsSubscribe] = useState([
        {
            email:''
        }
    ])

    const subc = {
            email: isSubscribe.email
        }
    

    async function postSub(){
        try{
            const sub = await fetch('http://127.0.0.1:8000/api/subscribe/',{
                method:'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(subc),
            })
            if(!sub.ok){
                if(sub.status === 400){
                    alert('check your email and enter a valid one!')
                }else{ 
                    alert('Unexpected error! Try again in 5 minutes.')
                }
            }else{ 
                alert('Subcribed successfully, we will be in touch. Thank you!')
            }
        }catch(err){alert('Error:', err)}
    }

    function handleChange(e){
        const {name, value} = e.target
        setIsSubscribe((prev) =>({
            ...prev, 
                [name]:value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()

        const {name, value} = e.target
        setIsSubscribe((prev) =>({
            ...prev, 
                [name]:value
        }))

        postSub()
       
        isSubscribe.email = ''

    }

    useEffect(()=> {
        AOS.init({ duration: 1000})       
      }, [])
      
    return(
        <>
           <footer className="bg-[#1a1a1a] w-full text-[#fff] justify-center items-center mt-8 " data-aos='zoom-in'>
                <div>
                    <div className="grid md:grid-cols-3 grid-cols-1 place-items-center">
                        <div className="md:pl-10 md:px-0 px-8 py-1" data-aos='fade-left'> {/** news and subscribe div */}
                            <h1 className="text-xl font-bold py-2 px-10">News</h1>
                            <p className="text-lg "> 
                                <span className="text-xl font-bold text-[#c7ae6a] ">
                                    Subscribe </span>
                                so as to get the latest products, updates and services once they are out!
                            </p>
                            <div className="flex  rounded-lg border border-[#fff] gap-1 p-1 my-3">
                                <input type="text" placeholder="your email..." id="email" name="email" value={isSubscribe.email}
                                onChange={handleChange}
                                className="rounded-md py-1 px-1 text-[#1a1a1a] placeholder:text-[#1a1a1a] ps-5 p-2 w-4/5 " />
                                <div className=" scale-x-w"> 
                                    <Button ><div onClick={handleSubmit}>Subscribe</div></Button>
                                </div>
                            </div>
                        </div>
                        <div className="py-1 " data-aos="zoom-in"> {/** Quick links div */}
                            <h1 className="text-xl font-bold py-2">Quick Links</h1>
                            <div >
                                <ul className='flex flex-col items-center md:gap-2 gap-2 text-lg py-2' >
                                {mainItems.map((mainItem)=>(
                                    <li className="hover:underline underline-offset-4 hover:text-[#c7ae6a] " key={mainItem.id}>
                                        <a href={mainItem.linkToText}> {mainItem.text} </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className="py-1"data-aos="fade-right"> {/** contacts div */}
                            <h1 className="text-xl font-bold py-1 mx-auto">Contacts</h1>
                            <div className="">
                                <ul className='flex flex-col  md:gap-2 gap-2 text-lg py-2' >
                                    {contacts.map((contact)=>{
                                        if(contact.id != 4)
                                            return  (
                                                <li className=" hover:text-[#c7ae6a] text-[#d5c28f] " key={contact.id} data-aos='fade-right'>
                                                    <a href={contact.linkToContact} className="flex py-1  gap-2">
                                                        {contact.icon} {contact.contactContent} 
                                                    </a>
                                                </li>
                                            )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[60%] h-1 my-2 rounded-xl mx-auto " />
                    <div className="grid md:grid-cols-3 grid-cols-1 place-items-center py-2 gap-2">
                        <div className="py-1">
                            <h1 className="text-xl font-bold py-1">Connect with us!</h1>
                            <div >
                                <ul className='flex flex-row justify-between items-center text-lg py-1' >
                                {socialLinks.map((socialLink)=>(
                                    <li className=" text-[#c7ae6a] text-2xl " key={socialLink.id}>
                                        <a href={socialLink.linkToSocial}> {socialLink.icon} </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:flex flex justify-center items-center px-3 py-1 text-[#c7ae6a] gap-1"> {/** center div */}
                            <a href="/FAQs" className="hover:underline underline-offset-4 duration-500">FAQs</a>
                            <p>|</p>
                            <a href="/privacy_policy" className="hover:underline underline-offset-4 duration-500">Privacy Policy</a>
                            <p>|</p>
                            <a href="/terms-of-services" className="hover:underline underline-offset-4 duration-500">Terms of Service</a>
                            <p>|</p>
                            <a href="/report-incident" className="hover:underline underline-offset-4 duration-500">Report Incident</a>
                            <p>|</p>
                            <a href="/change-log" className="hover:underline underline-offset-4 duration-500">Change Logs</a>
                        </div>           
                        <div className="py-1">
                            <h1>{contacts.map(c =>{
                                if(c.id === 4){
                                  return  <a key={c.id} href={c.linkToContact} className="flex gap-1">copyrights {c.icon}{c.contactContent}</a>
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