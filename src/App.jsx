import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from "./About"
import Company from "./Company"
import Contact from "./Contact"
import Founder from "./Founder"
import Home from "./Home"
import MainNavBar from "./MainNavBar"
import NotFound from "./NotFound"


function App() {
 

  return (
    <>
      <BrowserRouter>
      <MainNavBar />
      <div className="container text-center ">

      <h1>React Router Dom</h1>
      <Routes> 
      <Route  index element={<Home />} />
        <Route  path="/home" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/about" element={<About />} >
        <Route  path="company" element={<Company />} />
          <Route path="founder" element={<Founder />} />
        </Route>
        <Route  path="*" element={<NotFound />} />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
