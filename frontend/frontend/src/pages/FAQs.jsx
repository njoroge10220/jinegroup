
import {React, useState} from "react";
import Navbarpage from "./navbar";
import Footer from "./footer";
import { FAQ } from "./arrays";
import Button from "./button";

function FAQsPage() {

    const FAQs = FAQ()



    const [qn, setQn] = useState([
       {
        email: '',
        content:'',
       }

    ])

    const qns = {
        email: qn.email,        
        content: qn.content,
    }


    async function emailQuestion(){
        //email the question and the email to the company email     
       
        try{
            const send_faq = await fetch('http://127.0.0.1:8000/api/send-email/', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(qns),
            })
            
            if(!send_faq.ok){
                if(send_faq.status  === 400){                   
                    alert('Check your email and enter a valid one!')
                }else{ 
                    alert('Unexpected error! Try again in 5 minutes.')
                }
            }else{ 
                alert('Question is submitted. we will be in touch!')
            }
            
        }catch(err){ 
            console.log('error:', err)
        }       
    }
    
    function askQuestion(e){
        e.preventDefault()

        const {name, value} = e.target
        setQn((prev =>({
            ...prev,
            [name]: value
        })))   

        emailQuestion()

        qn.email = ''
        qn.content = ''
       
    }

    function handleChange(e){
        const {name, value} = e.target
        setQn((prev =>({
            ...prev,
            [name]: value
        })))
    }


    return(
        <>
           <body>
                <div> {/** navbar section */}
                    <Navbarpage />
                </div>
                <div className="  text-[#aaabab] md:text-6xl text-3xl font-extrabold flex justify-center w-[80%] mx-auto items-center md:pt-36 pt-24 pb-3">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[30%] h-1  my-2 rounded-xl mx-auto " />
                <div>
                    <div className="bg-[#aaabab] md:w-[60%] w-[80%] mx-auto flex my-3 rounded-lg">
                        <div>
                            {FAQs.map((faq) =>(
                                <div key={faq.id} className=" p-2 ">
                                    <h3 className="font-semibold py-2"><span className="font-bold">Q:</span> {faq.question} </h3>
                                    <h5 className="font-medium py-2"><span className="font-bold">A:</span> {faq.answer} </h5>
                                </div>
                            ))}
                        </div>                        
                    </div>
                    <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[30%] h-1  my-2 rounded-xl mx-auto " />
                    <div className="  text-[#aaabab] md:text-4xl text-2xl font-extrabold flex justify-center items-center ">
                        <h2>Ask us A Question</h2>
                    </div>
                    <div className="bg-[#aaabab] w-[60%] mx-auto flex rounded-xl flex-col my-3">                    
                       <div>                       
                        <form  className="p-2 flex flex-col  w-full font-semibold mx-auto  ">
                            <input type="email"className="rounded-lg p-2 my-3" placeholder="Your Email" name="email" value={qn.email} onChange={handleChange} />
                            <textarea type="text"className="rounded-lg p-2"rows={5} placeholder="Your Question" name="content" value={qn.content} onChange={handleChange} />
                            <div className="flex justify-center items-center w-full mx-auto my-3">
                                <div onClick={askQuestion}> <Button>Submit</Button> </div>
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

export default FAQsPage