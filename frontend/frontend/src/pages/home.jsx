
import React from 'react'
import { useState, useEffect } from 'react'
import {AiFillAndroid, AiFillRightCircle, AiFillLeftCircle } from 'react-icons/ai'
import AOS from 'aos'
import 'aos/dist/aos.css'
import api from '../api'

import Navbarpage from './navbar'
import Footer from './footer'
import Button from "./button"
import Card from './card'
import CollaboratePage from './collaborate'
import FeedbackCard from './feedbackCard'
import { Service, Product, Completed_projects, Feedback , About_us, mainLinks } from './arrays'

function Homepage() {  

  const mainItems = mainLinks()
  const services = Service()
  const products = Product()
  const feedback_ratings = Feedback()
  const about_us = About_us()
  const completed_projects = Completed_projects()

  const [current_completed_project, setCurrent_completed_project] = useState(0)
  const [currentFeed, setCurrentFeed] = useState(0)

  function handleNextImgRight(){
    setCurrent_completed_project((prevImage) => (prevImage + 1) % completed_projects.length)
  }
  function handlePrevImg(){
    setCurrent_completed_project((prevImage) => 
      prevImage === 0 ? completed_projects.length - 1 : prevImage - 1)
  }

  function handleNextFeedback(){
    setCurrentFeed((prevFeed) => (prevFeed + 1) % feedback_ratings.length)
  }

  function handlePrevFeedback(){
    setCurrentFeed((prevFeed) => 
      prevFeed === 0 ? feedback_ratings.length - 1 : prevFeed - 1)
  }

  
  useEffect(()=> {
    AOS.init({ duration: 1000}) 
  }, [])

  return (
    <>
    <body >
      <div className='md:pb-36 pb-24'> {/** navbar section */}
        <Navbarpage />
      </div>
      <div> {/** main home page section */}
        <div>
          <div className='flex flex-col justify-center items-center pb-5 w-[80%] mx-auto ' data-aos='fade-up'>
            <h1 className=' text-[#aaabab] md:text-7xl text-5xl font-extrabold'>Tech Products & Services</h1>
            <div>
              {about_us.map((ab_us) =>(
                <p className=' text-[#aaabab] text-xl py-2 font-bold md:w-[80%] w-[90%] mx-auto '>
                  {ab_us.company_short_description}
                </p>
              ))}               
            </div>
            <Button>
              <a href={mainItems[1].linkToText}>
                more on us
              </a>
            </Button>
          </div>
        </div>
        <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[60%] h-1 my-3 rounded-xl mx-auto " />
        <div className=' flex flex-col justify-center items-center w-[90%] mx-auto' data-aos='fade-up'> {/** services div */}
          <h1 className=' text-[#aaabab] md:text-5xl text-3xl font-extrabold'>Our Services</h1>
          <div className='py-5'>
            <ul className=' flex flex-wrap justify-center gap-10 w-[90%] mx-auto '>
              {services.map((service)=>(
               <li  key={service.id} className='w-80 '  data-aos='zoom-in'>             
                  <Card           
                  image={service.service_Img}                 
                  title={service.service_name}
                  description={service.service_short_description}
                  button1={<Button>see more</Button>}
                  link1={'/services'} />
               </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[60%] h-1 my-3 rounded-xl mx-auto " />
        <div className=' flex flex-col justify-center items-center w-[90%] mx-auto transition' data-aos='fade-up'> {/** products div */}
          <h1 className=' text-[#aaabab] md:text-5xl text-3xl font-extrabold' data-aos='zoom-in'>Our Products</h1>
          <div className='py-5' >
          <ul className=' flex flex-wrap justify-center gap-10 w-[90%] mx-auto '>
                {products.map((product)=>(
                  <li  key={product.id} className='w-80 '  data-aos='zoom-in'>             
                    <Card           
                    image={product.product_Img}                   
                    title={`${product.product_genre} : ${product.product_title}`}
                    description={`${product.product_short_description}  That is coming out very very soon! Subscribe below to be informed once it is out.`} 
                    button1={<Button>see more</Button>}
                    button2={
                      <Button> 
                        <div className='flex gap-1 justify-center items-center'> Download <AiFillAndroid /></div>
                      </Button> }
                      link1={'/products'}
                      link2={'/products'} />
                  </li>
                ))}
              </ul>
          </div>
        </div>
        <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[60%] h-1 my-3 rounded-xl mx-auto " />
        <div className=' flex flex-col justify-center items-center w-[90%] mx-auto '> {/** newly completed projects div */}
          <h1 className=' text-[#aaabab] md:text-5xl text-3xl font-extrabold' data-aos='zoom-in'>Our Newly Completed Projects</h1>
          <div className=' bg-[#fff] rounded-xl my-4 md:w-96 w-60 ' data-aos='zoom-in' >
            <Card           
              image={completed_projects[current_completed_project].past_project_Img}             
              title={`${completed_projects[current_completed_project].past_project_genre}
                :  ${completed_projects[current_completed_project].past_project_title}`} 
            />          
            <div className=''>
              {/** arrows */}
              <div className=' static'>
                <div className='absolute text-[#c7ae6a] md:text-3xl text-2xl  top-[55%] -left-3'>
                  <AiFillLeftCircle onClick={handlePrevImg} />
                </div>
                <div className='absolute text-[#c7ae6a] md:text-3xl text-2xl  top-[55%] -right-3 '>
                  <AiFillRightCircle  onClick={handleNextImgRight}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[60%] h-1 my-3 rounded-xl mx-auto " />
        <div className=' flex flex-col justify-center items-center md:w-[90%] w-full mx-auto'> {/** feedback and rating div */}
          <h1 className=' text-[#aaabab] md:text-5xl text-3xl font-extrabold' data-aos='zoom-in'>Feedbacks and ratings</h1>
          <div className='py-5' >
              <div>
              <div className=' rounded-xl flex justify-center gap-1 my-4 w-full' data-aos='zoom-in' >
                <FeedbackCard key={currentFeed}
                title={feedback_ratings[currentFeed].feedback_author}
                occupation={feedback_ratings[currentFeed].feedback_author_occupation}
                feedback={feedback_ratings[currentFeed].feedback}
                rating={feedback_ratings[currentFeed].rating}              
                />                  
              </div> 
              <div className=' grid grid-cols-3 items-center' >
                {/** arrows */}
                <div className=' px-10 justify-center'>
                  <Button>
                    <AiFillLeftCircle onClick={handlePrevFeedback} size={30} />
                  </Button>
                </div>
                <div className=' flex justify-center'  data-aos='zoom-in'>
                  <a href={'/addfeedback'}>
                    <Button>Add Feedback</Button>
                  </a>
                </div>
                <div className='px-10 justify-center'>
                  <Button>
                    <AiFillRightCircle onClick={handleNextFeedback} size={30} />
                  </Button>
                </div>
              </div>              
            </div>
          </div>
        </div>
        <hr className=" border-[#c7ae6a] bg-[#c7ae6a] w-[60%] h-1 my-3 rounded-xl mx-auto " />
        <div className=' flex flex-col justify-center items-center w-full mx-auto'> {/** collaborate wit us div */}
          <h1 className=' text-[#aaabab] md:text-5xl text-3xl font-extrabold'data-aos='zoom-in'>Collaborate with us</h1>
          <div className='py-5' >
            <div data-aos='zoom-in'>
              <CollaboratePage />   
            </div>
          </div>
        </div>
      </div>
      <div className=''> {/** footer section */}
        <Footer />
      </div>
    </body>
    </>
  )
}

export default Homepage