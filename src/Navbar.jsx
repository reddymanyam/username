import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const name = useSelector((state)=> state.userupdate.name);   // here userupdate is the reducer stored in the store.
  const email = useSelector((state)=> state.userupdate.email);

  return (
    <div style={{backgroundColor:"lightblue", width:"100%", height:"60px"}}>
      <h1>My Name is:<span style={{fontSize:"large"}}>{name}</span></h1>
      <h3>My Email is:<span style={{fontSize:"large"}}>{email}</span></h3>
    </div>
  )
}

export default Navbar
