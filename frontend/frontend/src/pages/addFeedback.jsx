
import {React, useState, useEffect} from "react";
import Navbarpage from "./navbar";
import Footer from "./footer";
import Button from "./button";
import AOS from "aos";
import { AiFillStar } from "react-icons/ai";



function AddFeedbackPage() {

    const [inputEmail, setInputEmail] = useState('')
    const [inputName, setInputName] = useState('')
    const [inputOccupation, setInputOccupation] = useState('')
    const [inputFeedback, setInputFeedback] = useState('')
    const [inputRating, setInputRating] = useState(0)
    const [inputFollowUp, setInputFollowUp] = useState('')

    const [input, setInput] = useState([])
    
    const todatabase = {
        feedback: inputFeedback,
        rating: inputRating,
        feedback_author: inputName,
        feedback_author_email: inputEmail,
        feedback_author_occupation: inputOccupation,
        feedback_follow_up: inputFollowUp,
    }
    async function postFeedback(){    

        const respo = await fetch('http://127.0.0.1:8000/api/feedback-and-rating/create/',{
            method: 'POST',
            headers: { 
                              
                'Content-Type': 'application/json',              
            },
            
            cache: 'no-cache',
            body: JSON.stringify(todatabase)                 
        })
        if(!respo.ok){
            const err = await respo.json()
            if(respo.status === 400){
            alert('Errors are in your inputs kindly check them and re-enter')
            }else{ 
                alert('Unexpected errors occurred! Try again in 5 minutes.')
            }
        }else{
            alert('feedback submitted succesfully. Thank You!')
        }
    };
    function newFeedback() {
        const newFeed =  {
            email: inputEmail,
            name: inputName,
            occupation: inputOccupation,
            newFeed: inputFeedback,
            rating: inputRating,
            followUp: inputFollowUp,
        }
        setInput(i => [i, newFeed]) 
        postFeedback()     
        setInputEmail('')
        setInputName('')
        setInputOccupation('')
        setInputFeedback('')
        setInputFollowUp('')    
        setInputRating(0)    
    }

    function handleCancel(){
        setInputEmail('')
        setInputName('')
        setInputOccupation('')
        setInputFeedback('')
        setInputRating(0)
        setInputFollowUp('')
    }

    function handleEmailChange(e){
        setInputEmail(e.target.value)      
    }
    function handleNameChange(e){
        setInputName(e.target.value)      
    }
    function handleOccupationChange(e){
        setInputOccupation(e.target.value)      
    }
    function handleFeedbackChange(e){
        setInputFeedback(e.target.value)      
    }

    function handleFollowUpChange(e){
        setInputFollowUp(e.target.value)      
    }

     

    useEffect(()=> {
        AOS.init({ duration: 1000})          
    }, [])
    

    return(
        <>
           <body>
                <div> {/** navbar section */}
                    <Navbarpage />                    
                </div>{/** mini navbar to show the  services */}                
                <div className="  text-[#aaabab] md:text-7xl text-3xl font-extrabold flex justify-center items-center px-3 md:pt-28 pt-24">
                    <h2>Add Your Feedback Here</h2>
                </div>
                <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[30%] h-1  my-2 rounded-xl mx-auto " />
                <div className="mt-5">
                    <div className=" bg-[#aaabab] shadow-lg shadow-[#aaabab] md:w-[50%] w-[80%] mx-auto rounded-lg p-4 "  data-aos='zoom-in'>
                        <div>
                            <h3 className="font-semibold text-lg text-[#1a1a1a] md:w-[25%] w-[50%] mx-auto my-2">Give Feedback</h3>
                            <form   className="font-semibold md:w-[80%] mx-auto ">
                                <label htmlFor="Your-Email">Your Email:</label> <br />
                                <input type="email" id='Your-Email' placeholder="enter your email here" value={inputEmail} onChange={handleEmailChange}  className="my-2 w-full rounded-lg py-1 px-2 " /> <br />
                                <label htmlFor="Your-Name">Your Name:</label><br />
                                <input type="text"  id='Your-Name' placeholder="enter your name here" value={inputName} onChange={handleNameChange} className="my-2 w-full rounded-lg py-1 px-2 " /> <br />
                                <label htmlFor="Your-occupation">Your Connection with us:</label><br />
                                <input type="text"  id='Your-occupation' placeholder="customer, partner, client etc" value={inputOccupation} onChange={handleOccupationChange} className="my-2 w-full rounded-lg py-1 px-2" />
                                <label htmlFor="Your-feedback">Your Feedback:</label><br />
                                <textarea id="Your-feedback" rows={5} value={inputFeedback} onChange={handleFeedbackChange} placeholder="What are your thoughts on our services, products or operations" className="my-2 w-full rounded-lg py-1 border-[#c7ae6a] border px-2" />
                            </form>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-[#1a1a1a] md:w-[25%] w-[40%] mx-auto">Rating</h3>
                            <div className="md:w-[60%] w-[100%] mx-auto my-3">
                                <h5 className="font-semibold">Would you be kind enough to rate us?</h5>
                            </div>
                            <div className=" md:w-[30%] w-[60%] mx-auto my-3 flex text-xl">
                                {/** rating section */}
                                {[...Array(5)].map((star, index) => {
                                    const currRate = index + 1
                                    return (
                                        <div className="flex" key={star} > 
                                            < AiFillStar size={30}
                                            color={ currRate <= inputRating ? 'yellow' : 'black ' } 
                                            onClick={() => setInputRating(currRate)} />  
                                        </div>
                                    )                                   
                                })}
                            </div>
                            <div className="md:w-[60%] w-[100%] mx-auto">
                                <h5 className="font-semibold">May we follow up on your feedback?</h5>
                            </div>
                            <div className="md:w-[25%] w-[40%] mx-auto my-1 flex gap-5">
                                <form className=" flex gap-7">
                                    <div>
                                        <input type="radio" id="Yes" value={inputFollowUp} name="choice" onChange={handleFollowUpChange} />
                                        <label htmlFor="Yes">Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="No" value={inputFollowUp} name="choice" onChange={handleFollowUpChange}/>
                                        <label htmlFor="No">No</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center w-[90%] gap-5 mx-auto pt-2 ">
                            <div onClick={newFeedback}><Button>send</Button></div>  
                            <div onClick={handleCancel}><Button>cancel</Button></div> 
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

export default AddFeedbackPage