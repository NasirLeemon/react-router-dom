import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function Company() {

    const params = useParams()
    console.log(params);

    const navigate = useNavigate()
    

    useEffect(()=>{
        navigate('/about/founder')
    },[navigate])

  return (
    <>
    <h1>Company</h1>
    <p>{params.name}</p>
    
    </>
  )
}

export default Company