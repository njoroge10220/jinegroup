
import React from 'react'
import { useState, useEffect } from 'react'
import {AiFillAndroid } from 'react-icons/ai'
import { FaArrowCircleRight, FaHandshake, FaBrain } from "react-icons/fa";
import { CgEditStraight } from "react-icons/cg";
import { GrServices } from "react-icons/gr";
import { FcCustomerSupport } from "react-icons/fc";
import { HiSpeakerphone, HiLightBulb } from "react-icons/hi";
import { PiArrowBendDoubleUpRightBold } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import { FaStar } from "react-icons/fa"


import AOS from 'aos'
import 'aos/dist/aos.css'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';         
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 
import 'swiper/css/scrollbar';  
import 'swiper/css/autoplay';   

import Navbarpage from './navbar'
import Footer from './footer'
import Button from "./button"
import ServiceCard from './serviceCard'
import CollaborateCard from './collaborate'
import FeedbackCard from './feedbackCard'
import TechStackCard from './techStackCard';
import CompletedCard from './completedCard';
import ProcessCard from './processCard';
import BlogCard from './blogCard';
import ProductCard from './productCard';

import { Service, Product, Completed_projects, Feedback , About_us, mainLinks, Achievements,TechStack } from './getArrays'
import { PostFeedback } from './postArrays';

import ai from '../assets/ai.jpg'
import stack from '../assets/stack.jpg'

function Homepage() {  

  const mainItems = mainLinks()
  const services = Service()
  const products = Product()
  const feedbacks = Feedback()
  const about_us = About_us()
  const completed_projects = Completed_projects()
  const achievements = Achievements()
  const techStack = TechStack()  

  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false)

  const [feedbackName, setFeedbackName] = useState('')
  const [feedbackEmail, setFeedbackEmail] = useState('')
  const [feedbackText, setFeedbackText] = useState('')
  const [feedbackRate, setFeedbackRate] = useState(0)
  
  const maxTextLength = 300

  function handleFeed(e){
    if(e.target.value.length <= maxTextLength){
      setFeedbackText(e.target.value)
    }
  }

  async function handleSumbit(){
    if(feedbackName !== '' && feedbackName !== '' && feedbackText !== ''){
      await PostFeedback({
        feedback: feedbackText,
        rating: feedbackRate,
        feedback_author: feedbackName,
        feedback_author_email: feedbackEmail,
      })
    }else{ 
      alert('Fill in all the black to input feedback')
    }

    setFeedbackName('')
    setFeedbackEmail('')
    setFeedbackText('')
    setFeedbackRate(0)
  }

  const processes = [
    {num:1, image:stack, title:'Define Requirements', description:'Interaction with client to gather specified requirements'},
    {num:2, image:ai, title:'Design & Prototyping', description:'Drafting the designs and actual development to actualise the requirements'},
    {num:3, image:stack, title:'Final Solution', description:'Reviewing the solution and handing it over to the client'},
  ]

  const news = [
    {id:1,img:ai, byWho:'Admin',topic:' MiniCommando Game Production Dates', date:'13-Feb-2000',link:'/news',},
    {id:2,img:stack, byWho:'Production',topic:'Maxcareandshare completion Dates', date:'04-Apr-2000',link:'/news',},
    {id:3,img:ai, byWho:'Development',topic:'JineGroup production readiness', date:'16-Apr-2000',link:'/news',},
    {id:4,img:stack, byWho:'Management',topic:'JineStores begining dates', date:'14-Dec-2000',link:'/news',},
  ]

  useEffect(()=> {
    AOS.init({ duration: 1000}) 
  }, [])

  return (
    <>
    <body  className={`${isFeedbackOpen ? 'opacity-40' : ''}`} >
{/** navbar section */}
      <div className='flex flex-col justify-center items-center sticky top-1 z-50 w-[100%] mx-auto py-0 '> 
        <div className='flex flex-col justify-center items-center absolute top-1 w-[100%] mx-auto py-1 '>
          <Navbarpage />
        </div>
      </div>
{/** main home page section */}
        <div className=''  data-aos='fade-up'>
          <div className='flex flex-col justify-center items-center  w-[100%] py-5 ' style={{ backgroundImage: `url(${ai})` }}>
            <div className='md:mt-[100px] mt-[60px] px-3' >
              <div className='py-10'>
                <h1 className=' text-[#fff] md:text-6xl text-3xl tracking-tight' style={{fontWeight:'600', fontFamily: "Roboto Condensed" }} dat-aos='fade-left' >
                    Excellent Tech Services and  <br /> Innovative IT solutions</h1>
                <div>
                  {about_us.map((ab_us) =>(
                    <p className=' text-[#fff] md:text-xl text-lg py-4 font-medium md:w-[60%] w-[90%]' dat-aos='fade-left'>
                      {ab_us.company_short_description}
                    </p>
                  ))}               
                </div>
                <div className='md:w-[40%] w-[60%] py-5 '>
                  <Button>
                    <a href={mainItems[1].linkToText} >
                      <div className='flex justify-center items-center gap-4 p-2 '>more on us<FaArrowRightLong /></div>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
{/** services div */}
  <section className=''>
      <div className=' flex flex-col justify-center items-center w-[95%] mx-auto py-5 pt-16 ' data-aos='fade-up' style={{ fontFamily: "Roboto Condensed" }}> 
        <div className='grid md:grid-cols-2 grid-cols-1 w-[95%] mx-auto py-4 '>
          <div className=' flex flex-col justify-start'>
              <div className='flex flex-row gap-2 font-medium py-4 text-[#082a4a]   '>
                <CgEditStraight size={25} /> <h3>WHAT WE OFFER</h3>
              </div>
              <div>
                <h1 className=' text-[#333] md:text-5xl text-3xl font-extrabold' style={{ fontFamily: "Roboto Condensed" }}> Excellent IT Services </h1>
              </div>
          </div>
          <div className='flex md:justify-end justify-center items-center md:py-0 py-3 ' >
            <Button link={'/services'} ><div className='flex flex-row justify-center items-center gap-2 md:p-2 p-1'>View All Services <FaArrowCircleRight size={17} /></div></Button>
          </div>
        </div>
        <div className='py-5 '>
          <ul className=' flex flex-wrap justify-center gap-10 md:w-[95%] w-full mx-auto  '>
            {services.slice(0,3).map((service)=>(
            <li  key={service.id} className='md:w-[30%] w-[95%] flex ' data-aos='zoom-in'>             
                <ServiceCard         
                image={service.service_Img}                 
                title={service.service_name}
                description={service.service_short_description}
                link1={`/service#${service.service_name}`}
                />
            </li>
            ))}
          </ul>
        </div>
      </div>
  </section>
  {/** about us  */}
  <section className='bg-[#f3f7fb] '>
    <div className='w-[90%] mx-auto '>
      <div className='grid md:grid-cols-2 grid-cols-1 pb-32 pt-20' data-aos='fade-right' >
        <div  data-aos='fade-right'>
          {/** vedio */}
          image and vedio where vedio is absolute and on the bottom right of image
        </div>
        <div  data-aos='fade-up'>
          <div className=' flex flex-col justify-start px-2 py-3'style={{ fontFamily: "Roboto Condensed" }}>
            <div className='flex flex-row gap-2 font-medium py-5 text-[#082a4a]  '>
              <CgEditStraight size={25} /> <h3>ABOUT JINE GROUP</h3>
            </div>
            <div>
              <h1 className=' text-[#333] md:text-5xl text-3xl font-extrabold'>
                We Strive to Offer the Best Business Solutions </h1>
            </div>
            <div>
              {about_us.map((ab_us) =>(
                <p className=' text-[#333] text-lg py-4 font-normal  w-[97%] mx-auto ' dat-aos='fade-left' >
                  {ab_us.company_description}
                </p>
              ))}    
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4 w-[95%] mx-auto ' data-aos='fade-down'>
              <div className='flex flex-col w-[95%] mx-auto '>
                <div className=' flex flex-row'>
                  <div className='bg-[#f4f4f4] p-2  rounded-sm flex justify-center items-center my-3 '>
                    <GrServices size={60} />
                  </div>
                  <div className='flex flex-col  text-center gap-2 w-[90%] '>
                    <h3 className='font-bold text-xl text-[#333]'>Efficient Services</h3>
                    <p>We leverage our expertise to deliver exceptional services.</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col w-[95%] mx-auto'>
                <div className=' flex flex-row'>
                  <div className='bg-[#f4f4f4] p-2 rounded-sm flex justify-center items-center my-3 '>
                  <FcCustomerSupport size={60} />
                  </div>
                  <div className='flex flex-col  text-center gap-2 w-[90%] '>
                    <h3 className='font-bold text-xl text-[#333]'>24/7 Support</h3>
                    <p>Our clients receive round-the-clock support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos='fade-right'>
              <div className='md:w-[40%] w-[60%] py-5 '>
                <Button>
                  <a href={mainItems[1].link} >
                    <div className='flex justify-center items-center gap-4 p-2 '>more on us<FaArrowRightLong /></div>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/** achievements */}
  <section className='static' >
   <div className='absolute mt-[-80px]  w-[100%] mx-auto '>
    <div className='bg-[#3c72fc] w-[80%] mx-auto flex md:flex-col flex-row py-10 '>
        <div className=' '>
          {achievements.map((ach) => (
            <ul key={ach.id} className='flex md:flex-row flex-col place-content-center' style={{ fontFamily: "Roboto Condensed" }}>  
              <li className='flex md:w-[70%] mx-auto place-content-center p-5 gap-2 ' data-aos='fade-right'>
                <div className='flex justify-center items-center text-[#fff] '> <FaHandshake size={60} /> </div>
                <div className='flex flex-col justify-center items-center text-[#fff] '>
                  <h2 className='font-black md:text-5xl text-3xl'> {`${ach.satisfied_clients} + `} </h2>
                  <h4  className='font-semibold md:text-xl text-xl'>  Satisfied Clients </h4>
                </div>
              </li>
              <li className='flex md:w-[70%] mx-auto p-5 gap-2 place-content-center ' data-aos='fade-right'>
                <div className='flex justify-end items-center text-[#fff]'><HiLightBulb size={60} /></div>
                <div className='flex flex-col justify-center items-center text-[#fff]'>
                  <h2 className='font-black md:text-5xl text-3xl'> {`${ach.finished_projects} + `} </h2>
                  <h4 className='font-semibold md:text-xl text-xl'> Finished Projects </h4>
                </div>
              </li>
              <li className='flex md:w-[70%] mx-auto p-5 gap-2 place-content-center ' data-aos='fade-right'>
                <div className='flex justify-end items-center text-[#fff]'><FaBrain size={60} /></div>
                <div className='flex flex-col justify-center items-center text-[#fff]'>
                  <h2 className='font-black md:text-5xl text-3xl'> {`${ach.skilled_experts} + `} </h2>
                  <h4 className='font-semibold md:text-xl text-xl'> Skilled Experts </h4>
                </div>
              </li>
              <li className='flex md:w-[70%] mx-auto p-5 gap-2 place-content-center ' data-aos='fade-right'>
                <div className='flex justify-end items-center text-[#fff]'><HiSpeakerphone size={60} /></div>
                <div className='flex flex-col justify-center items-center text-[#fff]'>
                  <h2 className='font-black md:text-5xl text-3xl'> {`${ach.media_posts} + `} </h2>
                  <h4 className='font-semibold md:text-xl text-xl'> Media Posts </h4>
                </div>
              </li>
            </ul>
          ))}      
        </div>
      </div>
   </div>
  </section>
{/** products div */}
<section className='md:mt-[100px] mt-[400px] py-20 '>
  <div className=' flex flex-col justify-center items-center w-[100%] mx-auto transition' data-aos='fade-up'> 
    <div className='grid md:grid-cols-2 grid-cols-1 w-[95%] mx-auto py-4 '>
      <div className=' flex flex-col justify-start'>
          <div className='flex flex-row gap-2 font-medium py-4 text-[#082a4a]   '>
            <CgEditStraight size={25} /> <h3>WHAT WE PRODUCE</h3>
          </div>
          <div>
            <h1 className=' text-[#333] md:text-5xl text-3xl font-extrabold' > Innovative Tech Products </h1>
          </div>
      </div>
      <div className='flex md:justify-end justify-center items-center md:py-0 py-3 ' >
        <Button link={'/products'} ><div className='flex flex-row justify-center items-center gap-2 md:p-2 p-1'>View All Products <FaArrowCircleRight size={17} /></div></Button>
      </div>
    </div>  
    <div className='md:w-[90%] w-[95%] mx-auto' >
        <div>
          <Swiper
          modules={{Pagination}}
          pagination={true}
          spaceBetween={10}
          breakpoints={{
            320:{
              slidesPerView: 1,
            },
            640:{
              slidesPerView: 1,
            },
            768:{
              slidesPerView: 3,
            },
          }}
          loop={true}
          className='pb-5 pt-10 ' data-aos='fade-down'>
            {products.map((prod) =>(
              <SwiperSlide key={prod.id}>
                <ProductCard 
                image={prod.product_Img}
                genre={prod.product_genre}
                title={prod.product_title}
                platform={prod.product_platform}
                link={'/products'}
                />
              </SwiperSlide>
            ))} 
          </Swiper>
        </div>
      </div>       
  </div>
</section>
{/** tech stack section */}
<section className='my-10'>
  <div className='flex flex-col justify-center items-center w-[100%] py-5 bg-cover' style={{ backgroundImage: `url(${stack})` }}>
      <div className='grid md:grid-cols-2 grid-cols-1 w-[90%] mx-auto py-4 '>
        <div className=' flex flex-col justify-start' data-aos='fade-right'>
            <div className='flex flex-row gap-2 font-medium py-4 text-[#f5f5f5] '>
              <CgEditStraight size={25} /> <h3>OUR STACK</h3>
            </div>
            <div>
              <h1 className=' text-[#f7f7f7] md:text-5xl text-3xl font-extrabold' > Enhance And Pioneer Using Technology Trends  </h1>
            </div>
        </div>
        <div className='flex md:justify-end justify-center items-center md:py-0 py-3 ' data-aos='fade-down' >
          <Button link={'/products'} ><div className='flex flex-row justify-center items-center gap-2 md:p-2 p-1'> Explore More <FaArrowCircleRight size={17} /></div></Button>
        </div>
      </div>
      <div className='md:w-[80%] w-[95%] mx-auto  ' >
        <Swiper
        modules={{ Pagination, Autoplay}}
        pagination={{ clickable:true }}
        spaceBetween={1}
        breakpoints={{
          320:{
            slidesPerView: 1,
          },
          640:{
            slidesPerView: 3,
          },
          768:{
            slidesPerView: 4,
          },
        }}
        autoplay={{delay: 500, disableOnInteraction: false, }}
        loop={true}
        className='  py-10 '>
        {techStack.map((stack) =>(
          <SwiperSlide key={stack.id} >
            <TechStackCard image={stack.logo} name={stack.name} />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
  </div>
</section>
{/** development process */}
<section className='my-[10px] '>
  <div>
    <div className=' w-[90%] mx-auto py-4 ' data-aos='fade-down'>
      <div className=' flex flex-col justify-center items-center'>
        <div className='flex flex-row gap-2 font-medium py-4 text-[#082a4a]   '>
          <CgEditStraight size={25} /> <h3>WORK PROCESS</h3>
        </div>
        <div>
          <h1 className=' text-[#333] md:text-5xl text-3xl font-extrabold' >Our Development Process </h1>
        </div>
      </div>
      <div className='flex md:flex-row flex-col'>
        {processes.map((process, index) => index != processes.length - 1 ? (
          <div className=" flex md:flex-row flex-col p-3"  data-aos='fade-right'>
            <div className='py-2'>
              <ProcessCard
              number={process.num}
              image={process.image}
              title={process.title}
              description={process.description}
              /> 
            </div>
            <div className='flex justify-center items-center text-[#333] '><PiArrowBendDoubleUpRightBold size={100} /></div>
          </div>
        ) : <div className="flex md:flex-row flex-col p-3 " data-aos='fade-right'>
            <div className='py-2'>
              <ProcessCard
              number={process.num}
              image={process.image}
              title={process.title}
              description={process.description}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</section>
{/** newly completed projects div */}
<section className='md:mt-[20px] mt-[10px] py-5 '>
    <div className=' flex flex-col justify-center items-center w-[100%] mx-auto '> 
      <div className='grid md:grid-cols-2 grid-cols-1 w-[90%] mx-auto py-4 ' data-aos='fade-right'>
        <div className=' flex flex-col justify-start'>
          <div className='flex flex-row gap-2 font-medium py-4 text-[#082a4a]   '>
            <CgEditStraight size={25} /> <h3>WHAT WE DELIVER</h3>
          </div>
          <div>
            <h1 className=' text-[#333] md:text-5xl text-3xl font-extrabold' >Cutting-Edge Solutions </h1>
          </div>
        </div>
        <div className='flex md:justify-end justify-center items-center md:py-0 py-3 ' >
          <Button link={'/products'} ><div className='flex flex-row justify-center items-center gap-2 md:p-2 p-1'>View All Projects <FaArrowCircleRight size={17} /></div></Button>
        </div>
      </div>
      <div className='md:w-[90%] w-[95%] mx-auto' >
        <div>
          <Swiper
          modules={{Pagination}}
          pagination={true}
          spaceBetween={10}
          breakpoints={{
            320:{
              slidesPerView: 1,
            },
            640:{
              slidesPerView: 1,
            },
            768:{
              slidesPerView: 3,
            },
          }}
          loop={true}
          className='pb-5 pt-10 ' data-aos='fade-down'>
            {completed_projects.map((proj) =>(
              <SwiperSlide key={proj.id}>
                <CompletedCard 
                image={proj.past_project_Img}
                genre={proj.past_project_genre}
                title={proj.past_project_title}
                link={'/completed-projects'}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
</section>
 {/** feedback and rating and collaborate-message section */}
 <section className='bg-[#f3f7fb] my-[50px] p-5 '>
      <div className='grid md:grid-cols-2 grid-cols-1 w-[95%] mx-auto gap-4 '>
        <div className='' data-aos='fade-up'>
          <CollaborateCard />
        </div>
        <div className='md:w-[90%] w-full mx-auto mt-[50px] '>
          <div className=' flex flex-col' data-aos='fade-right'>
              <div className='flex flex-row gap-2 font-medium py-4 text-[#082a4a]  '>
                <CgEditStraight size={25} /> <h3>CLIENTS REVIEWS</h3>
              </div>
              <div>
                <h1 className=' text-[#333] md:text-5xl text-3xl font-extrabold' > What They Say About Us </h1>
              </div>
              <div className='md:w-[80%] w-[95%] mx-auto '> 
                <Swiper 
                  modules={{ Pagination}}
                  pagination={true}
                  spaceBetween={1}
                  slidesPerView={1}
                  loop={true}
                  className=' py-10 '>
                    {feedbacks.map((feedback) =>(
                      <SwiperSlide key={feedback.id} className=' border-[#aaa] border-x-2  '>
                        <FeedbackCard
                        name={feedback.feedback_author}
                        rating={feedback.rating}
                        feedback={feedback.feedback}
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              <div onClick={() => setIsFeedbackOpen(true)}>
                <Button >
                  <div className='' onClick={() => setIsFeedbackOpen(true)}>
                  Give Feedback
                  </div>
                </Button>
              </div>
          </div>
          
        </div>
      </div>
 </section>
{/** blogs and news */}
<section>
  <div className='w-[90%] mx-auto flex flex-col gap-10 '>
    <div className=' flex flex-col justify-start p-2' data-aos='fade-up'>
      <div className='grid md:grid-cols-2 grid-cols-1 w-[98%] mx-auto py-4 '>
        <div className=' flex flex-col justify-start' data-aos='fade-right'>
            <div className='flex flex-row gap-2 font-medium py-4 text-[#082a4a]'>
              <CgEditStraight size={25} /> <h3>BLOGS & NEWS</h3>
            </div>
            <div>
              <h1 className=' text-[#333] md:text-5xl text-3xl font-extrabold' > Latest Blogs and News </h1>
            </div>
        </div>
        <div className='flex md:justify-end justify-center items-center md:py-0 py-3 ' data-aos='fade-down' >
          <Button link={'/blog-news'} ><div className='flex flex-row justify-center items-center gap-2 md:p-2 p-1'> Read More <FaArrowCircleRight size={17} /></div></Button>
        </div>
      </div>
    </div>
    <div className='p-2' data-aos='fade-right'>
      <div className='flex md:flex-row flex-col'>
        {news.slice(1.4).map((blog) =>(
          <div className=" flex md:flex-row flex-col p-3"  data-aos='fade-right'>
            <BlogCard
            image={blog.img}
            date={blog.date}
            topic={blog.topic}
            byWho={blog.byWho}
            />
          </div>
        ))}
      </div>
    </div>
    <div className='flex flex-col justify-center items-center text-center md:w-[98%] w-full' data-aos='zoom-in'>
      <p className='text-xl'><strong>Be the first to know! <br /></strong> Subscribe below to get all product launches, updates, and service announcements.</p>
      <form action="" className=' flex flex-row my-5 mx-auto md:gap-0 gap-2  '>
        <input type="text" name="subscriber-email" placeholder="your email..." className="p-2 font-semibold text-lg border-2 rounded-sm border-[#2ec4b680] text-[#333]  " />
        <Button link={''}>Subscribe</Button>
      </form>
    </div>
  </div>
</section>
 {/** footer section */}

      <div className=''>
        <Footer />
      </div>
    </body>
    {/** feedback prompt */}
    {isFeedbackOpen && (
                <div className='fixed  md:inset-x-[450px] md:inset-y-8 inset-x-7 inset-y-12  bg-[#aaa] z-50 opacity-100 flex flex-col py-4 space-y-4 '>
                  <div className='flex justify-end mx-4'>
                    <GiCancel onClick={() => setIsFeedbackOpen(false)} />
                  </div>
                  <hr className='w-[100%] mx-auto border-1 border-[#333] ' /> 
                  <div className='flex flex-col mx-3 '>
                    <label htmlFor="name" className='flex text-xl font-semibold'>Your Name</label>
                    <input type="text"  className=' md:w-[70%] w-[80%] mx-5 p-2 ' value={feedbackName} onChange={(e) => setFeedbackName(e.target.value)} placeholder='your name' />
                  </div>
                  <div className='flex flex-col  mx-3'>
                    <label htmlFor="email" className='flex text-xl font-semibold'>Your Email</label>
                    <input type="text"  className=' md:w-[70%] w-[80%] mx-5 p-2 ' value={feedbackEmail} onChange={(e) => setFeedbackEmail(e.target.value)} placeholder='your email' />
                  </div>
                 <div className='flex flex-col mx-3 '>
                    <label htmlFor="feedback" className='flex text-xl font-semibold'>Your Feedback</label>
                    <textarea name="feedback" className=' md:w-[70%] w-[80%] mx-5 p-2 ' 
                    placeholder='write feedback' maxLength={maxTextLength} value={feedbackText} onChange={handleFeed} id="" rows={4} />
                    <p>
                      {maxTextLength - feedbackText.length} characters left
                    </p>
                 </div>
                  <div className='flex flex-col mx-3 '>
                    <label htmlFor="rating" className='flex text-xl font-semibold'>Rate us? </label>
                    <div className="my-4 flex justify-center items-center">
                      {[...Array(5)].map((_, index) => {
                          const starValue = index + 1
                          return (
                              <FaStar
                              key={starValue}
                              size={20}
                              className={`${starValue <= feedbackRate ? 'text-[#3c72fc]' : 'text-[#333] '}`}  
                              onClick={() => setFeedbackRate(starValue)} />                                  
                          )
                      })}
                  </div>
                 </div>
                 <div className=' flex items-center mx-auto ' onClick={handleSumbit}>
                  <Button>
                    Submit
                  </Button>
                 </div>
                </div>
              )}
    </>
  )
}

export default Homepage