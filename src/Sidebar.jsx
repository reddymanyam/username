import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const name = useSelector((state)=> state.userupdate.name);
  const email = useSelector((state)=> state.userupdate.email);
  
  return (
    <div style={{display:"flex",flexDirection:"column",   width:"20%", backgroundColor:"lightcoral",top:"calc(100vh-60px)", textAlign:"center"}}>
        <h2>This is Sidebar</h2>
      <h2 style={{marginTop:"auto"}} >My name is:<span style={{fontSize:"large"}}>{name}</span></h2>
      <h2>My Email is:<span style={{fontSize:"large"}}>{email}</span></h2>
    </div>
  )
}

export default Sidebar
