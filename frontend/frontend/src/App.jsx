
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Homepage from './pages/home'
import AboutUsPage from './pages/about'
import ContactsPage from './pages/contacts'
import FAQsPage from './pages/FAQs'
import Privacy_policyPage from './pages/privacy-policy'
import ProductsPage from './pages/products'
import ServicesPage from './pages/services'
import Report_IncidencePage from './pages/report-incidence'
import Terms_of_ServicesPage from './pages/terms-of-service'
import Change_LogPage from './pages/change-log'
import ServiceDetail from './pages/serviceDetails'
import ProductDetail from './pages/productDetails'
import Blog_News from './pages/blogs_news'

import { Service,Product } from './pages/getArrays'

import './App.css'


function App() {

  const services = Service()
  const products = Product()

  return (
    <>
      <body className='bg-[#fff] bg-center bg-cover bg-fixed min-h-screen w-full ' style={{ fontFamily: "Roboto Condensed" }}>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about-us' element={<AboutUsPage />} />
            <Route path='/contact' element={<ContactsPage />} />
            <Route path='/faqs' element={<FAQsPage />} />
            <Route path='/privacy-policy' element={<Privacy_policyPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/change-log' element={<Change_LogPage />} />
            <Route path='/terms-of-service' element={<Terms_of_ServicesPage />} />
            <Route path='/report-incidence' element={<Report_IncidencePage />} />
            <Route path='/blog-news' element={<Blog_News />} />     
            {services.map((service) =>(
            <Route key={service.id} path={`/service-details/${service.id}`} element={<ServiceDetail id={service.id} />} />              
            ))} 
            {products.map((product) =>(
            <Route key={product.id} path={`/product-details/${product.id}`} element={<ProductDetail id={product.id} />} />              
            ))}                  
          </Routes>
       </BrowserRouter>
      </body>
    </>
  )
}

export default App
