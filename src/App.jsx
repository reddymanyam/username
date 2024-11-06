import React, { useState } from 'react'
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Rightbar from './Rightbar';
import Counter from './Counter';

const App = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>

      <div style={{display:'flex', padding:"1px"}}>
        <Navbar name={name} email={email} />
        <Counter />
      </div>

      <div style={{ display: "flex", height: "91vh", justifyContent: "space-between" }}>
        <Sidebar name={name} email={email} />
        <Feed name={name} setName={setName} email={email} setEmail={setEmail} />
        <Rightbar name={name} email={email} />
      </div>

    </div>
  )
}

export default App
