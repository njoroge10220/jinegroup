
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FaGithub, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaAt, FaPhoneAlt} from 'react-icons/fa'
import { useState, useEffect } from 'react'
import api from '../api'
import axios from 'axios'


  //LOGO

export const LogoIcon = () => {
  const [mainLogo, setMainLogo] = useState([
    { 
      id:0, 
      logo_Img:'',
    }
  ])
  
  async function getLogo(){
    try{
      const logo = await axios.get('http://127.0.0.1:8000/api/logo/')         
      setMainLogo(logo.data)
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

    const [about, setAbout] = useState([
      {
        id:0,
        company_name: '',       
        company_short_description: '',
        company_description: '',
        company_vision: '', 
        company_mission: '', 
      }
    ])

    async function getAbout(){
      try{
        const about = await api.get('/api/about-us/')        
        setAbout(about.data)
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
  { id: 4, icon: <FaGithub />, linkToSocial: 'https://github.com/njoroge10220/jinegroup'},
]

export const mainLinks = () =>{

  const mainItems = [    //navbar, footer
    {id: 1, text: 'Home', linkToText: '/'}, 
    {id: 2, text: 'About', linkToText: '/about'},
    {id: 3, text: 'Products', linkToText: '/products'},
    {id: 4, text: 'Services', linkToText: '/services'},        
  ]

  return mainItems
}

export const sideLinks = () =>{    //navbar

  const [cont, setCont] = useState([])
  
  const getContact = () =>{
    api
    .get('/api/contacts/')
    .then((response) => response.data)
    .then((data) =>setCont(data))
    .catch((error) => alert('Error fetching contacts:',error))
  }

  useEffect(() =>{
    getContact()
  }, [])
 
  const contact = [
    {id: 1, icon: <AiOutlineWhatsApp />, link: '/',},
    {id: 2, icon: <FaGithub />, link: 'https://github.com/njoroge10220/jinegroup',},
    {id: 3, icon: <FaEnvelope />, link:  `mailto:${cont.map(c => c.company_email)}`,},
  ]

  return contact
}


//SERVICES

export const Service = () => {

  const [serv, setServ] = useState([
    {
      id:0,
      service_name:'',
      service_Img: '',
      service_description:'',
      service_short_description:'',
      link:'/services',
    }
  ])
  
  
  async function getService(){
    try{
        const service = await api.get('/api/services/')         
        setServ(service.data)
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

  const [prod, setProd] = useState([
    {
      id: 0,
      product_title:'',
      product_Img:'',
      product_short_description:'',
      product_description:'',
      product_software_file:'',
      product_platform:'',
      product_genre:'',
      product_feedback:'',
      product_rating:0,
      product_feedback_author:'',
    }
  ])  

  async function getProduct(){
      try{
        const product = await api.get('/api/products/')       
        setProd(product.data)
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
  const [proj, setProj] = useState([
    {
      id:0,
      past_project_title: '',
      past_project_Img: '',
      past_project_description: '',
      past_project_genre: '',
    }
  ])

  async function getProj(){
      try{
        const project = await api.get('api/past-projects/')        
        setProj(project.data)
      }catch(err){
        alert(`Error fetching completed ${err.message}`)
      }      
  }

  useEffect(() => {
    getProj()
  }, [])


  return proj
}


  //FEEDBACK

export const Feedback =() =>{
  
  const [feed, setFeed] = useState([
    {
      id: 0,
      feedback: '',
      feedback_author: '',
      feedback_author_occupation: '',
      rating: 0,
    }
  ])
  
async function getFeed(){
    try{
      const feedback = await api.get('/api/feedback-and-rating/create/')        
      setFeed(feedback.data)
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

  const [faq, setFaq] = useState([
    {
      id:0,
      question:'',
      answer:'',
      link_To_More:'',      
    }    
  ])

  async function getFaq(){
    try{
      const faq = await api.get('/api/faqs/ask/')        
      setFaq(faq.data)
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

    const [policy, setPolicy] = useState([
      {
        id: 0,
        title:'',
        content:'',
      }
    ])
    async function getPolicy(){
      try{
        const priPolicy = await api.get("/api/privacy-policy/")       
        setPolicy(priPolicy.data)
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
    const [terms, setTerms] = useState([
      {
        id:0,
        title:'',
        content:'',
      }
    ])

    async function getTerms(){
      try{
        const tos = await api.get('/api/terms-of-service/')        
        setTerms(tos.data)
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

    const [logs, setLogs] = useState([
      {
        id:0,
        title:'',
        description:'',
        version:'',
        date_published:'',
      }
    ])

    async function getLogs(){
      try{
        const log = await api.get('/api/changelog/')        
        setLogs(log.data)
      }catch(err){
        alert(`Error fetching service images: ${err.message}`)
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
      const con = await api.get('/api/contacts/')        
      setCont(con.data)
    }catch(err){
      alert(`Error fetching service images: ${err.message}`)
    }   
  }

  useEffect(() =>{
    getContact()
  }, [])
 
  const contact =  [   //footer
    {id: 1, icon: <FaMapMarkerAlt />, linkToContact: '', contactContent: cont.map(c => c.company_address)},
    {id: 2, icon: <FaPhoneAlt />, linkToContact: '', contactContent: cont.map(c => c.company_phone_number)},
    {id: 3, icon: <FaEnvelope />, linkToContact: `mailto:${cont.map(c => c.company_email)}`, contactContent: `${cont.map(c => c.company_email)}`},
    {id: 4, icon: <FaAt />, linkToContact: '/', contactContent: cont.map(c => c.company_website)},
]

return contact
}

