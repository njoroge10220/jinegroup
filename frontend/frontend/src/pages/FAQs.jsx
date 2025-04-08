
import {React, useState} from "react";

import { CgEditStraight } from "react-icons/cg";
import { GiCancel } from "react-icons/gi";

import MultiNavBar from "./multiNavbar";
import Footer from "./footer";
import FaqCard from "./faqCard";
import Button from './button'

import { PostFaq } from "./postArrays";
import{ FAQ} from './getArrays'

function FAQsPage() {

    const Faqs = FAQ()

    const [isQuestion, setIsQuestion] = useState(false)

    const maxTextLength = 70

    const [AskQ, setAskQ] = useState({
        name:'',
        question:'',
    })

    function handleQuestion(e){
        if(e.target.value.length <= maxTextLength){
            setAskQ({...AskQ, question: e.target.value})
        }
    }
    
    async function handleSumbit(e){
      e.preventDefault()
      if(AskQ.name && AskQ.question){
        try{
          await PostFaq({
            question:AskQ.question
          })
          setAskQ({name:'', question:''})
        }catch(err){ 
          alert(`Error posting question: ${err.message}`)
        }
      }else{ 
        alert('Fill in all the blanks to submit question')
      }
    }

    return(
        <>
           <div className={`${isQuestion ? 'opacity-40' : ''}`}>
                <div>
                    <MultiNavBar pageTitle={'Frequently Asked Questions'} />
                </div>
                <div className="my-20 w-[80%] mx-auto ">
                    <div className='grid md:grid-cols-2 grid-cols-1 w-[98%] mx-auto py-4 '>
                        <div className=' flex flex-col justify-start' data-aos='fade-right'>
                            <div className='flex flex-row gap-2 font-medium py-4 text-[#082a4a]'>
                                <CgEditStraight size={25} /> <h3>FAQ</h3>
                            </div>
                            <div>
                            <h1 className=' text-[#333] md:text-5xl text-3xl font-extrabold' > Most Common Questions? </h1>
                            </div>
                        </div>
                    </div>
                    <div>
                       {Faqs.map((faq) => (
                        <FaqCard key={faq.id} question={faq.question} answer={faq.answer}  />
                       ))}
                    </div>
                </div>
                <div className="my-10 relative z-50  " >{/** ask a question */}
                    <Button onClick={() => setIsQuestion(true)} >
                       Ask Question
                    </Button>
                </div>
                <footer>  {/** footer section */}
                  < Footer />
                </footer>   
            </div>
           {/** question prompt */}
           {isQuestion && (
                <div className='fixed  md:inset-x-[450px] md:inset-y-28 inset-x-7 inset-y-36  bg-[#aaa] z-50 opacity-100 flex flex-col py-4 space-y-4 rounded-sm '>
                  <div className='flex justify-end mx-4'>
                    <GiCancel onClick={() => setIsQuestion(false)} className="cursor-pointer" />
                  </div>
                  <hr className='w-[100%] mx-auto border-1 border-[#333] ' /> 
                  <div className='flex flex-col mx-3 '>
                    <label htmlFor="name" className='flex text-xl font-semibold'>Your Name</label>
                    <input type="text"  className=' w-[80%] mx-5 p-2 bg-[#f5f4f4] ' value={AskQ.name} onChange={(e) => setAskQ({...AskQ, name: e.target.value})} placeholder='your name' />
                  </div>
                 <div className='flex flex-col mx-3 '>
                    <label htmlFor="feedback" className='flex text-xl font-semibold'>Your Question</label>
                    <textarea name="feedback" className=' w-[80%] mx-5 p-2 bg-[#f5f4f4] ' 
                    placeholder='write your question here' maxLength={maxTextLength} value={AskQ.question} onChange={handleQuestion} id="" rows={4} />
                    <p>
                      {maxTextLength - AskQ.question.length} characters left
                    </p>
                 </div>
                  
                 <div className=' flex items-center mx-auto'>
                  <Button onClick={handleSumbit}>
                    Submit
                  </Button>
                 </div>
                </div>
              )}
        </>
    )
}

export default FAQsPage