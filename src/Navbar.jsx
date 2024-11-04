import React from 'react'

const Navbar = ({name, email}) => {
  return (
    <div style={{backgroundColor:"lightblue", width:"100%", height:"60px", textAlign:"center"}}>
      <h1>My Name is:<span style={{fontSize:"large"}}>{name}</span></h1>
      <h3>My Email is:<span style={{fontSize:"large"}}>{email}</span></h3>
    </div>
  )
}

export default Navbar
