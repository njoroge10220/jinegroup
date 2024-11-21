
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FaGithub, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaAt, FaPhoneAlt} from 'react-icons/fa'
import { useState, useEffect } from 'react'
import api from '../api'


//LOGO

export const LogoIcon = () => {
const [mainLogo, setMainLogo] = useState('')
  
  const getLogo = () =>{
    fetch('http://127.0.0.1:8000/api/media/api/media/images/logo/logoMain.png', {
      method: 'GET',
    })
    .then((response) => response.blob())
    .then((blob) => { 
      const objURL = URL.createObjectURL(blob)
      setMainLogo(objURL)
    })
    .catch((error) => alert('Error fetching logo:',error))
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

    function getAbout(){
      api
      .get('/api/about-us/')
      .then((response) => response.data)
      .then((data) => {setAbout(data)})
      .catch((error) => alert('Error fetching about', error))
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
  { id: 4, icon: <FaGithub />, linkToSocial: '/'},
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

export const sideLinks = [    //navbar
  {id: 1, icon: <AiOutlineWhatsApp />, link: '/',},
  {id: 2, icon: <FaGithub />, link: '/',},
  {id: 3, icon: <FaEnvelope />, link: '/',},

]

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
    await api
            .get('/api/services/')
            .then((response) => response.data)
            .then((data) =>{setServ(data)})
            .catch((error) => alert('Error fetching services:',error))

    const imgURLS = [
      {id: 1, url:'http://127.0.0.1:8000/api/media/api/media/images/services/development.png',},
      {id: 2, url:'http://127.0.0.1:8000/api/media/api/media/images/services/coding.png',},
      {id: 3, url:'http://127.0.0.1:8000/api/media/api/media/images/services/consu.png',},
      {id: 4, url:'http://127.0.0.1:8000/api/media/api/media/images/services/integration_1.png',},
    ]

    imgURLS.map(async (url) =>{
      await fetch(url.url, {
        method: 'GET',
      })
      .then((response) => response.blob())
      .then((blob) => { 
      const objURL = URL.createObjectURL(blob)
      setServ((prvS) => prvS.map((ser) =>
            ser.id === url.id ? {...ser, service_Img: objURL } : ser))
      })      
      .catch((error) => alert('Error fetching service images:',error))  
    })      
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
  

  const getProduct = () =>{
    api
    .get('/api/products/')
    .then((response) => response.data)
    .then((data) =>{setProd(data)})
    .catch((error) => alert('Error fetching products:', error))

    const imgURLs = [
      {id:1, url:'http://127.0.0.1:8000/media/api/media/images/products/shootOut4.png',},
    ]

    imgURLs.map(async(url) =>{
      await fetch(url.url, {
        method: 'GET',
      })
      .then((resp) => resp.blob())
      .then((blob) => {
        const objURL = URL.createObjectURL(blob)
        setProd((prvP) => prvP.map((p) => 
        p.id === url.id ? {...p, product_Img: objURL} : p ))
      })
      .catch((err) => alert('Error fetching product images:', err))
    })
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
    await api
        .get('api/past-projects/')
        .then((resp) => resp.data)
        .then((data) =>{ setProj(data)})
        .catch((err)=> alert('Errors fetching past projects:', err))

    const imgURLs = [
      {id:1, url:'http://127.0.0.1:8000/media/api/media/images/past-projects/shootOut4_xv2lRBP.png',},
    ]

    imgURLs.map(async(url) =>{
      await fetch(url.url, {
        method: 'GET',
      })
      .then((resp) => resp.blob())
      .then((blob) => {
        const objURL = URL.createObjectURL(blob)
        setProj((prvP) => prvP.map((p) => 
        p.id === url.id ? {...p, proj_Img: objURL} : p ))
      })
      .catch((err) => alert('Error fetching past projects images:', err))
    })
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
  
  const getFeed = () =>{
    api
    .get('/api/feedback-and-rating/create/')
    .then((response) => response.data)
    .then((data) =>{setFeed(data)})
    .catch((error) => alert('Error fetching feedback:',error))
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

  function getFaq(){
    api
      .get('/api/faqs/ask/')
      .then((response) => response.data)
      .then((data) =>{setFaq(data)})
      .catch((error) => alert('Error fetching FAQs:', error))
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
    function getPolicy(){
      api
      .get("/api/privacy-policy/")
      .then((response) => response.data)
      .then((data) =>{setPolicy(data)})
      .catch((err) => alert('errors fetching privacy policies:', err))
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

    function getTerms() {
      api
      .get('/api/terms-of-service/')
      .then((response) => response.data)
      .then((data) =>{setTerms(data)})
      .catch((err) =>alert('Errors in fetching the terms and conditions:', err))
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

    function getLogs(){
      api.get('/api/changelog/')
      .then((response) => response.data)
      .then((data) => {setLogs(data)})
      .catch((err) => alert('Errors fetching change logs:', err))
    }

    useEffect(()=>{
      getLogs()
    },[])
    
    return logs
  }

//CONTACTS

export const contactList = () => {

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
 
  const contact =  [   //footer
    {id: 1, icon: <FaMapMarkerAlt />, linkToContact: '', contactContent: cont.map(c => c.company_address)},
    {id: 2, icon: <FaPhoneAlt />, linkToContact: '', contactContent: cont.map(c => c.company_phone_number)},
    {id: 3, icon: <FaEnvelope />, linkToContact: `mailto:${cont.map(c => c.company_email)}`, contactContent: `${cont.map(c => c.company_email)}`},
    {id: 4, icon: <FaAt />, linkToContact: '/', contactContent: cont.map(c => c.company_website)},
]

return contact
}

