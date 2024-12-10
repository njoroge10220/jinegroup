
import {React, useState, useEffect} from "react";
import Navbarpage from "./navbar";
import Footer from "./footer";
import Button from "./button";
import AOS from "aos";
import { AiFillStar } from "react-icons/ai";



function AddFeedbackPage() {

    const [input, setInput] = useState([
        {
            email:'',
            name:'',
            occupation:'',
            feedback:'',
            rating:0,
            followUp:'',
        }
    ])
    
    const todatabase = {
        feedback: input.feedback,
        rating: input.rating,
        feedback_author: input.name,
        feedback_author_email: input.email,
        feedback_author_occupation: input.occupation,
        feedback_follow_up: input.followUp,
    }
    async function postFeedback(){    

        const respo = await fetch('http://127.0.0.1:8000/api/feedback-and-rating/create/',{
            method: 'POST',
            headers: {                               
                'Content-Type': 'application/json',              
            },         
            body: JSON.stringify(todatabase),                 
        })
        if(!respo.ok){
            if(respo.status === 400){
            alert(`Errors are in your inputs`)
            }else{ 
                alert('Unexpected errors occurred! Try again in 5 minutes.')
            }
        }else{
            alert('feedback submitted succesfully. Thank You!')
        }
    };
    

    function handleChange(e){
        const {name, value} = e.target
        setInput((prev) =>({
                ...prev,
                [name]: value
        }))          
    }

    function handleSubmit(e){
        e.preventDefault()

        const {name, value} = e.target
        setInput((prev) =>({
                ...prev,
                [name]: value
        }))          

        postFeedback()

        input.email = ''
        input.name = ''
        input.occupation = ''
        input.feedback = ''
        input.rating = 0
        input.followUp = ''
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
                            <h3 className="font-semibold text-lg text-[#1a1a1a] w-full mx-auto  text-center my-2">Give Feedback</h3>
                            <form  onSubmit={handleSubmit} className="font-semibold md:w-[80%] mx-auto ">
                                <label htmlFor="Your-Email">Your Email:</label> <br />
                                <input type="email" name="email" id='Your-Email' placeholder="enter your email here" value={input.email} onChange={handleChange}  className="my-2 w-full rounded-lg py-1 px-2 " /> <br />
                                <label htmlFor="Your-Name">Your Name:</label><br />
                                <input type="text" name="name" id='Your-Name' placeholder="enter your name here" value={input.name} onChange={handleChange} className="my-2 w-full rounded-lg py-1 px-2 " /> <br />
                                <label htmlFor="Your-occupation">Your Connection with us:</label><br />
                                <input type="text" name="occupation" id='Your-occupation' placeholder="customer, partner, client etc" value={input.occupation} onChange={handleChange} className="my-2 w-full rounded-lg py-1 px-2" />
                                <label htmlFor="Your-feedback">Your Feedback:</label><br />
                                <textarea id="Your-feedback" name="feedback" rows={5} value={input.feedback} onChange={handleChange} placeholder="What are your thoughts on our services, products or operations" className="my-2 w-full rounded-lg py-1 border-[#aaabab] shadow-md shadow-[#FFFFFF80] border px-2" />
                            </form>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-[#1a1a1a] text-center">Rating</h3>
                            <div className=" my-3">
                                <h5 className="font-semibold text-center">Rate us Today</h5>
                            </div>
                            <div className=" md:w-[30%] w-[60%] mx-auto my-3 flex text-xl">
                                {/** rating section */}
                                {[...Array(5)].map((star, index) => {
                                    const currRate = index + 1
                                    return (
                                        <div className="flex" key={star}> 
                                            < AiFillStar size={30} className="px-1 md:mx-1 mx-0.5 text-center"
                                            color={ currRate <= input.rating ? 'yellow' : 'black ' } 
                                            onClick={() => setInput({ ...input, rating:currRate })} />  
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
                                        <input type="radio" id="Yes" value={input.followUp} name="choice" onChange={handleChange} />
                                        <label htmlFor="Yes"> Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="No" value={input.followUp} name="choice" onChange={handleChange}/>
                                        <label htmlFor="No"> No</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className=" justify-center flex items-center pt-2 ">
                            <div onClick={handleSubmit} className=""><Button> send </Button></div>                              
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