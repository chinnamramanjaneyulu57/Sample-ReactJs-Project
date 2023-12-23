import React from 'react'
//import Navbar from './components/Navbar/Navbar'
import Home from './components/Routes/Home'
import About from './components/Routes/About'
import Services from './components/Routes/Services'
import Contact from './components/Routes/Contact'
import Signup from './components/Routes/Signup'
import "./styles.css"
import { BrowserRouter, Route,Routes } from 'react-router-dom'

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}
export default App