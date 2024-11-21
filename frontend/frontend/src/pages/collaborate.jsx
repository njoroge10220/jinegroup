
import React, { useState } from "react";
import Button from "./button";
import { Service } from "./arrays";

function CollaboratePage(){

    const service = Service()

    const [collabo, setCollabo] = useState([
        {
            name:'',
            email:'',
            mobile:'',
            service:'',
            content:'',
        }
    ])

    const coll = {
        name: collabo.name,
        email: collabo.email,
        mobile: collabo.mobile,
        service: collabo.service,
        content: collabo.content,
    }
    async function postCollabo(){

        try{
            const collaborate = await fetch('http://127.0.0.1:8000/api/send-email_big/',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(coll),
            })

            if(!collaborate.ok){
                if(collaborate.status  === 400){                   
                    alert('Check your email and enter a valid one!')
                }else{ 
                    alert('Unexpected error! Try again in 5 minutes.')
                }
            }else{ 
                alert('Submitted successfully, we will be in touch. Thank you!')
            }
        }catch(err){
            alert('Error: ', err)
        }
    }

    function handleChange(e){
        const {name, value} = e.target
        setCollabo((prev) => ({
            ...prev,
                [name]: value
        }))

    }

    function handleSubmit(e){
        e.preventDefault()

        const {name, value} = e.target
        setCollabo((prev) => ({
            ...prev,
                [name]: value
        }))

        postCollabo()

        collabo.name = ''
        collabo.email = ''
        collabo.mobile = ''
        collabo.service = ''
        collabo.content = ''

    }


    return(
        <>
            <div>
                <div className="bg-[#aaabab] flex md:w-80 w-72 mx-auto rounded-xl">
                    <form onSubmit={handleSubmit} className=" flex flex-col p-2 w-[95%] font-semibold mx-auto">
                        <input type="text" name="email"  className=" border-xl border-[#b99a45] p-2 my-1  rounded-lg" value={collabo.email}  onChange={handleChange} placeholder="Your Email"/>
                        <input type="text" name="name" className=" border-xl border-[#b99a45] p-2 my-1 rounded-lg" value={collabo.name} onChange={handleChange} placeholder="Your Name "/>
                        <input type="text" name="mobile" className=" border-xl border-[#b99a45] p-2 my-1  rounded-lg " value={collabo.mobile} onChange={handleChange} placeholder="Your Mobile"/>
                        <label htmlFor="Pick a Service" value='Pick a Service' > 
                            Pick a Service:
                            <select name='service' value={collabo.service} onChange={handleChange} className="my-1  rounded-lg  flex w-[90%] mx-auto p-2 ">
                                {service.map((service) => (
                                    <option value={service.service_name} name='service' key={service.id} className="my-1  rounded-lg">
                                        {service.service_name} 
                                    </option>                                    
                                ))}                              
                            </select>
                        </label>
                        <textarea row={10} name='content' className=" border-xl border-[#b99a45] p-2 my-1  rounded-lg" value={collabo.content} onChange={handleChange} placeholder="Your specifications on the service"/>
                        <div className="flex justify-center items-center w-full mx-auto my-1">
                                <div onClick={handleSubmit}>  <Button>Submit Now</Button> </div>
                        </div>
                    </form>
                </div>
            </div> 
        </>
    )

}
export default CollaboratePage