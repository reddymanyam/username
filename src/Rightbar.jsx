import React from 'react'
import { useSelector } from 'react-redux'

const Rightbar = () => {

  const name = useSelector((state)=> state.userupdate.name);
  const email = useSelector((state)=> state.userupdate.email);
  
  return (
    <div style={{width:"20%", backgroundColor:"lightcoral", textAlign:"center"}}>
      <h2>This is Rightbar</h2>
      <h2 style={{marginTop:"90%"}}>My name is:<span style={{fontSize:"large"}}>{name}</span></h2>
      <h2>My Email is:<span style={{fontSize:"large"}}>{email}</span></h2>
    </div>
  )
}

export default Rightbar
