
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
import AddFeedbackPage from './pages/addFeedback'

import './App.css'


function App() {

  return (
    <>
      <body className=' bg-bg-1  bg-center font-["Cambria"]'>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<AboutUsPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/FAQs' element={<FAQsPage />} />
            <Route path='/privacy_policy' element={<Privacy_policyPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/change-log' element={<Change_LogPage />} />
            <Route path='/terms-of-services' element={<Terms_of_ServicesPage />} />
            <Route path='/report-incident' element={<Report_IncidencePage />} />
            <Route path='/addfeedback' element={<AddFeedbackPage />} />            
          </Routes>
       </BrowserRouter>
      </body>
    </>
  )
}

export default App
