
import {React, useState} from "react";
import Navbarpage from "./navbar";
import Footer from "./footer";
import Button from "./button";

function Report_IncidentPage() {

    const [incident, setIncident] = useState([
        {
            email: '',
            content:'',
        }
    ])

    const incidents = {
        email: incident.email,
        content: incident.content,
     }
    async function report(){
        try{
            const reportIn = await fetch('http://127.0.0.1:8000/api/send-email/', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                }, 
                body: JSON.stringify(incidents),


            })
            if(!reportIn.ok){
                if(reportIn.status  === 400){                   
                    alert('Check your email and enter a valid one!')
                }else{ 
                    alert('Unexpected error! Try again in 5 minutes.')
                }
            }else{ 
                alert('incident has been reported. we will be in touch!') 
            }

        }catch(err){ 
            alert('Error', err)
        }
    }

    function handleSubmit(e){
        e.preventDefault()  

        const {name, value} = e.target

        setIncident((prev) =>({
            ...prev,
            [name]: value
        }))
        
        report()

        incident.email = ''
        incident.content = ''      
       
    }

    function handleChange(e){
        const {name, value} = e.target

        setIncident((prev) =>({
            ...prev,
            [name]: value
        }))
    }

    return(
        <>
           <body>
                <div> {/** navbar section */}
                    <Navbarpage />
                </div>
                <div className=" w-[80%] mx-auto text-[#aaabab] md:text-7xl text-5xl font-extrabold flex justify-center items-center md:pt-24 pt-24">
                    <h2>Report Incident</h2>
                </div>
                <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[30%] h-1  my-2 rounded-xl mx-auto " />
                <div>
                    <div className="bg-[#aaabab] md:w-[60%] w-[80%] mx-auto flex rounded-xl flex-col my-3">                    
                        <div>                       
                            <form className="p-2 flex flex-col  w-full font-semibold mx-auto  ">
                                <input type="email" name='email' className="rounded-lg p-2 my-3" placeholder="Your Email" value={incident.email} onChange={handleChange} />
                                <textarea type="text" name='content' className="rounded-lg p-2"rows={5} placeholder="Your Incident" value={incident.content} onChange={handleChange} />
                                <div className="flex justify-center items-center w-full mx-auto my-3">
                                    <div onClick={handleSubmit}> <Button>Report</Button> </div>
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

export default Report_IncidentPage