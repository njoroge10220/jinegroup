
import {React, useState} from "react";

import { CgEditStraight } from "react-icons/cg";

import MultiNavBar from "./multiNavbar";
import Footer from "./footer";
import Button from './button'

import { PostIncident } from "./postArrays";

function Report_IncidencePage() {

    const [incidence, setIncidence] = useState({ 
        name:'',
        incident:'',
     })

    async function handleSumbit(e){
        e.preventDefault()
        if(incidence.incident !== ''){
            try{
                await PostIncident({
                    incident:incidence.incident
                })
                setIncidence({ name:'', incident:'' })
            }catch(err){ 
                alert(`Error report incidence: ${err.message}`)
            }
        }else{ 
            alert('Fill in the blanks to report incidence!')
        }
    }

    return(
        <>
           <div>
                <div>
                    <MultiNavBar pageTitle={'Report Incident'} />
                </div>
                <div className="my-20 w-[80%] mx-auto ">
                    <div className='grid md:grid-cols-2 grid-cols-1 w-[98%] mx-auto py-4 '>
                        <div className=' flex flex-col justify-start' data-aos='fade-right'>
                            <div className='flex flex-row gap-2 font-medium py-4 text-[#082a4a]'>
                                <CgEditStraight size={25} /> <h3> Report an Incident </h3>
                            </div>
                            <div>
                            <h1 className=' text-[#333] md:text-5xl text-3xl font-extrabold' > How to Report an Incident </h1>
                            </div>
                        </div>
                    </div>
                    <div className=" md:w-[80%] mx-auto ">
                        <div className=" w-[90%] px-1 mx-auto ">
                            <div className="flex flex-col py-4 space-y-2">   
                                <label htmlFor="name">
                                    Your Name
                                </label>
                                <input type="text" name="name" placeholder="your name" className="border-2 border-[#33333380] p-3" value={incidence.name} onChange={(e) => setIncidence({...incidence, name: e.target.value})} />
                            </div>
                        </div>
                        <div className="flex flex-col w-[90%] space-y-2 my-4 mx-auto">
                            <label htmlFor="message">
                                Your Incident
                            </label>
                            <textarea name="message" id="message" placeholder="write your Incident " className="border-2 border-[#33333380] p-3" value={incidence.incident} onChange={(e) => setIncidence({...incidence, incident: e.target.value})}  rows={5}></textarea>
                        </div>
                        <div >
                            <Button onClick={handleSumbit} > Report </Button>
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

export default Report_IncidencePage