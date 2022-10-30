import React from 'react'
import { Outlet } from 'react-router-dom'


function About() {
  return (
    <>
    <h1>About</h1>
    <p>Food Travel and Fun</p>
    <Outlet />
    </>
  )
}

export default About