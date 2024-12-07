
import {React, useState} from "react";
import Navbarpage from "./navbar";
import Footer from "./footer";
import { Service } from "./arrays";
import Button from "./button";


function ServicesPage() {
    const services = Service()

    const [serv, setServ] = useState ([
        {
            email:'',
            name:'',
            mobile:'',
            service:'',
            content:'',
        }
    ])

    const ser = {
        email: serv.email,
        name: serv.name,
        mobile: serv.mobile,
        service: serv.service,
        content: serv.content,
    }

    async function postService(){
        try{
            const ser_res = await fetch('http://127.0.0.1:8000/api/send-email_big/',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(ser),
            })
            if(!ser_res.ok){
                if(ser_res.status === 400){                   
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
        setServ((prev) =>({
                ...prev,
                [name]: value
        }))          
    }
 

    function handleSubmit(e){
        e.preventDefault()

        const {name, value} = e.target
        setServ((prev) =>({
                ...prev,
                [name]: value
        }))          

        postService()

        serv.email = ''
        serv.name = ''
        serv.mobile = ''
        serv.service = ''
        serv.content = ''
    }

    return(
        <>
           <body>
                <div> {/** navbar section */}
                    <Navbarpage />                    
                </div>{/** mini navbar to show the  services */}                
                <div className="  text-[#aaabab] md:text-7xl text-5xl font-extrabold flex justify-center items-center md:pt-24 pt-20">
                    <h2>Services</h2>
                </div>
                <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[30%] h-1  my-2 rounded-xl mx-auto " />
                <div>
                    <div className="md:w-[60%] w-[80%] mx-auto bg-[#aaabab] rounded-xl ">
                        <div>
                            <ul>
                                {services.map((ser) =>(
                                    <li key={ser.id} className="flex justify-center flex-col items-center px-5 py-5 ">
                                        <h3 className="font-semibold text-3xl md:py-5 py-1">{ser.service_name}</h3>
                                        <img className='md:w-[30%] w-[60%]  md:py-5 py-1' src={ser.service_Img} alt={`${ser.service_name} image`} />
                                        <p className="px-2 text-xl my-5">{ser.service_description}</p>
                                        <hr className=" border-[#b99a45] bg-[#b99a45] w-[50%] h-1 my-auto rounded-xl mx-auto " />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="  text-[#aaabab] md:text-4xl text-2xl font-extrabold flex justify-center items-center pt-3">
                            <h3>Access our Services</h3>
                        </div>
                        <div  className="bg-[#aaabab] flex md:w-[40%] w-[80%] mx-auto rounded-xl  my-3">
                        <form onSubmit={handleSubmit} className=" flex flex-col p-2 w-[95%] font-semibold mx-auto">
                            <input type="text" name="email" className=" border-xl border-[#b99a45] p-2 my-1  rounded-lg" value={serv.email}  onChange={handleChange} placeholder="Your Email"/>
                            <input type="text" name="name" className=" border-xl border-[#b99a45] p-2 my-1 rounded-lg" value={serv.name} onChange={handleChange} placeholder="Your Name "/>
                            <input type="text" name="mobile" className=" border-xl border-[#b99a45] p-2 my-1  rounded-lg " value={serv.mobile} onChange={handleChange} placeholder="Your Mobile"/>
                            <label htmlFor="Pick a Service" value='Pick a Service' > 
                                Pick a Service:
                                <select name='service' value={serv.service} onChange={handleChange} className="my-1  rounded-lg  flex w-[90%] mx-auto p-2 ">
                                    {services.map((service) => (
                                        <option value={service.service_name} key={service.id}  className="my-1  rounded-lg">
                                            {service.service_name} 
                                        </option>                                    
                                    ))}                              
                                </select>
                            </label>
                            <textarea row={10} name="content" className=" border-xl border-[#b99a45] p-2 my-1  rounded-lg" value={serv.content} onChange={handleChange} placeholder="Your specifications on the service"/>
                            <div className="flex justify-center items-center w-full mx-auto my-1">
                                    <div onClick={handleSubmit}>  <Button>Submit Now</Button> </div>
                            </div>
                    </form>
                        </div>
                    </div>
                </div>
                <div>  {/** footer section */}
                  < Footer />
                </div>
           </body>
        </>
    )
}

export default ServicesPage