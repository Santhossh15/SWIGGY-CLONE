import React from 'react'
import { useEffect } from 'react'

const User = () => {
  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log("Santhossh")
    },1000);
    return()=> clearInterval(timer);
  },[])
  return (
    <div>
      Santhossh
    </div>
  )
}

export default User