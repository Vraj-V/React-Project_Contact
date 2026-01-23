import React from 'react'
import Navigation from './Component/Navigation/Navigation'
import Contact from './Component/ContactHeader/Contact'
import ContactForm from './Component/ContactForm/ContactForm'

const App = () => {
  return (
    <div>
      <Navigation />
    <main className='main_container'>
            <Contact />
      <ContactForm />

    </main>

    </div>
  )
}

export default App