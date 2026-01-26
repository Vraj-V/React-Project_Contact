import React from 'react'
import Navigation from './Component/Navigation/Navigation'
import Contact from './Component/ContactHeader/Contact'
import ContactForm from './Component/ContactForm/ContactForm'
import {Routes,Route} from 'react-router-dom'
import ContactPage from './Pages/ContactPage'

const App = () => {
  return (
    <div>
      <Navigation />
    <main className='main_container'>
            <Contact />
      <ContactForm />

      <Routes>
        <Route path='/' element={<ContactForm/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </main>

    </div>
  )
}

export default App