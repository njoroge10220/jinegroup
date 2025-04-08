
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FaGithub, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaAt, FaPhoneAlt} from 'react-icons/fa'
import { IoLogoYoutube } from "react-icons/io";
import { useState, useEffect } from 'react'
import api from '../api'
import axios from 'axios'

  //LOGO

export const LogoIcon = () => {
  const [mainLogo, setMainLogo] = useState([])
  
  async function getLogo(){
    try{
      const logo = await axios.get('http://127.0.0.1:8000/api/logo/');         
      if (Array.isArray(logo.data)) {
        setMainLogo(logo.data); 
      } else {
        setMainLogo([]); 
      }
    }catch(err){
      alert(`Error fetching logo: ${err.message}`)
    }   
  }

  useEffect(() =>{
    getLogo()    
  }, [])

  return mainLogo
}

  //ABOUTUS

export const About_us = () => {

    const [about, setAbout] = useState([])

    async function getAbout(){
      try{
        const about = await axios.get('http://127.0.0.1:8000/api/about-us/');                
        if (Array.isArray(about.data)) {
          setAbout(about.data); 
        } else {
          setAbout([]); 
        }
      }catch(err){
        alert(`Error fetching about info: ${err.message}`)
      }   

    }

    useEffect(() => {
      getAbout()
    }, [])

    return about
}

  //LINKS

export const socialLinks= [ //footer
  { id: 1, icon: <FaFacebook />, linkToSocial: '/' },
  { id: 2, icon: <FaInstagram />, linkToSocial: '/' },
  { id: 3, icon: <FaTwitter />, linkToSocial: '/' },
  { id: 4, icon: <FaGithub />, linkToSocial: 'https://github.com/njoroge10220'},
  { id: 5, icon: <IoLogoYoutube />, linkToSocial: ''},

]

export const mainLinks = () =>{

  const mainItems = [    //navbar, footer
    {id: 1, text: 'Home', link: '/'}, 
    {id: 2, text: 'About', link: '/about-us'},
    {id: 3, text: 'Products', link: '/products'},
    {id: 4, text: 'Services', link: '/services'},    
    {id: 5, text: 'Soluions', link: '/completed-projects'},    
  ]

  return mainItems
}

export const sideLinks = () =>{    //navbar

  const [cont, setCont] = useState([])
  
  const getContact = () =>{
    axios.get('http://127.0.0.1:8000/api/contacts/', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })        
    .then((response) => response.data)
    .then((data) =>setCont(data))
    .catch((error) => alert(`Error fetching contacts: ${error.message}`))
  }

  useEffect(() =>{
    getContact()
  }, [])
 
  const contact = [
    {id: 1, icon: <AiOutlineWhatsApp />, link: 'https://wa.me/254797398435?text=Hello%20I%20am%20interested%20in%20your%20services',},
    {id: 2, icon: <FaGithub />, link: 'https://github.com/njoroge10220/',},
    {id: 3, icon: <FaEnvelope />, link:  `mailto:${cont.map(c => c.company_email)}`,},
  ]

  return contact
}

//TECH STACK

export const TechStack = () => {
  const [stack, setStack] = useState([])

  async function getTechStack(){
    try{
      const techStack = await axios.get('http://127.0.0.1:8000/api/tech-stack/')
      if (Array.isArray(techStack.data)) {
        setStack(techStack.data); 
      } else {
        setStack([]); 
      }
    }catch(err){
      alert(`Error fetching tech stack: ${err.message}`)
    }
  }

  useEffect(() =>{
    getTechStack()
  }, [])
  return stack
}

//ACHIEVEMENTS

export const Achievements = () => {
  const [achievement, setAchievement] = useState([])

  async function getAchievement(){
    try{
      const achieve = await axios.get('http://127.0.0.1:8000/api/achievements/')
      if (Array.isArray(achieve.data)) {
        setAchievement(achieve.data); 
      } else {
        setAchievement([]); 
      }
    }catch(err){
      alert(`Error fetching achievements: ${err.message}`)
    }
  }

  useEffect(() =>{
    getAchievement()
  }, [])
  
  return achievement
}

//SERVICES

export const Service = () => {

  const [serv, setServ] = useState([])
  
  
  async function getService(){
    try{
        const service = await axios.get('http://127.0.0.1:8000/api/services/');                 
        if (Array.isArray(service.data)) {
          setServ(service.data); 
        } else {
          setServ([]); 
        }
    }catch(err){
      alert(`Error fetching service images: ${err.message}`)
    }    
  }

  useEffect(() =>{
    getService()
  }, [])

    return serv
}


  //PRODUCTS 

export const Product = () =>{

  const [prod, setProd] = useState([])  

  async function getProduct(){
      try{
        const product = await axios.get('http://127.0.0.1:8000/api/products/');       
        if (Array.isArray(product.data)) {
          setProd(product.data); 
        } else {
          setProd([]); 
        }
      }catch(err){
        alert(`Error fetching products: ${err.message}`)
      }       
  }
  
  useEffect(() =>{
    getProduct()
  }, [])

  return prod
}

  
  //COMPLETED PROJECTS

export const Completed_projects = () =>{
  const [proj, setProj] = useState([])

  async function getProj(){
      try{
        const project = await axios.get('http://127.0.0.1:8000/api/past-projects/');                
        if (Array.isArray(project.data)) {
          setProj(project.data); 
        } else {
          setProj([]); 
        }
      }catch(err){
        alert(`Error fetching completed: ${err.message}`)
      }      
  }

  useEffect(() => {
    getProj()
  }, [])


  return proj
}

  //BLOG_NEWS
export const Blog_News = () => {

    const [blog, setBlog] = useState([])

    async function getBlog(){
      try{
        const blog_news = await axios.get('http://127.0.0.1:8000/api/blogs-news/');
        if(Array.isArray(blog_news.data)) {
          setBlog(blog_news.data)
        }else {
          setBlog([])
        }
      }catch(err){
        alert(`Error fetching blogs and news: ${err.message}`)
      }
    }

    useEffect(() =>{
      getBlog()
    },[])
    
    return blog
}

  //FEEDBACK

export const Feedback = () => {
  
  const [feed, setFeed] = useState([])
  
async function getFeed(){
    try{
      const feedback = await axios.get('http://127.0.0.1:8000/api/feedback-rating/');                
      if (Array.isArray(feedback.data)) {
        setFeed(feedback.data); 
      } else {
        setFeed([]); 
      }
    }catch(err){
      alert(`Error fetching feedback: ${err.message}`)
    }    
  }

  useEffect(() =>{
    getFeed()    
  }, [])

  return feed
}


  //FAQs

export const FAQ = () =>{

  const [faq, setFaq] = useState([])

  async function getFaq(){
    try{
      const faq = await axios.get('http://127.0.0.1:8000/api/faq/');                
      if (Array.isArray(faq.data) ) {
        const filteredFaqs = faq.data.filter(faq => faq.answer && faq.answer !== '')
        setFaq(filteredFaqs); 
      } else {
        setFaq([]); 
      }
    }catch(err){
      alert(`Error fetching faqs: ${err.message}`)
    }    
  }

  useEffect(() =>{
    getFaq()
  },[])

  return faq
}

  //PRIVACY_POLICY

  export const Privacy_Policy = () => {

    const [policy, setPolicy] = useState([])
    async function getPolicy(){
      try{
        const priPolicy = await axios.get("http://127.0.0.1:8000/api/privacy-policy/");               
        if (Array.isArray(priPolicy.data)) {
          setPolicy(priPolicy.data); 
        } else {
          setPolicy([]);
        }
      }catch(err){
        alert(`Error fetching privacy policy: ${err.message}`)
      } 
    }

    useEffect(() => {
        getPolicy()
    }, [])
    return policy
  }

    //TERMS_OF_SERVICE

  export const Terms_of_Service = () =>{
    const [terms, setTerms] = useState([])

    async function getTerms(){
      try{
        const tos = await axios.get('http://127.0.0.1:8000/api/terms-of-service/');                
        if (Array.isArray(tos.data)) {
          setTerms(tos.data); 
        } else {
          setTerms([]);
        }
      }catch(err){
        alert(`Error fetching terms of service: ${err.message}`)
      }  
    }

    useEffect(() =>{
      getTerms()
    }, [])

    return terms
  }

    //CHANGE LOGS

  export const Change_Logs = () => {

    const [logs, setLogs] = useState([])

    async function getLogs(){
      try{
        const log = await axios.get('http://127.0.0.1:8000/api/change-log/');                
        if (Array.isArray(log.data)) {
          setLogs(log.data); 
        } else {
          setLogs([]); 
        }
      }catch(err){
        alert(`Error fetching change logs: ${err.message}`)
      }     
    }

    useEffect(()=>{
      getLogs()
    },[])
    
    return logs
  }

//CONTACTS

export const contactList = () => {

  const [cont, setCont] = useState([])
  
  async function getContact(){
    try{
      const con = await axios.get('http://127.0.0.1:8000/api/contacts/');                
      setCont(con.data)
    }catch(err){
      alert(`Error fetching contacts: ${err.message}`)
    }   
  }

  useEffect(() =>{
    getContact()
  }, [])
 
  const contact = cont.length > 0 ?  [   //footer
    {id: 1, icon: <FaPhoneAlt />, linkToContact:  `tel:${cont[0].company_phone_number}`, contactContent: cont[0].company_phone_number},
    {id: 2, icon: <FaEnvelope />, linkToContact: `mailto:${cont[0].company_email}`, contactContent: `${cont[0].company_email}`},
    {id: 3, icon: <FaMapMarkerAlt />, linkToContact: 'https://www.google.com/maps?q=-4.062085,39.671509', contactContent: cont[0].company_address},
    {id: 4, icon: <FaAt />, linkToContact: '/', contactContent: cont[0].company_website},
] : [];

return contact
}

