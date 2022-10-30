import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'



function Contact() {
  return (
    <>
    <h1>Contact</h1>
    <p>Email: leemon174@gmail.com</p>
    <Link to="/about/company">
          <Button className='btn-primary'>Company</Button>
        </Link>
    </>
  )
}

export default Contact