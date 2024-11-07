import React, { useState } from 'react'
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Rightbar from './Rightbar';
import Counter from './Counter';

const App = () => {

  return (
    <div>

      <div style={{display:'flex', padding:"1px"}}>
        <Navbar />
        <Counter />
      </div>

      <div style={{ display: "flex", height: "91vh", justifyContent: "space-between" }}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>

    </div>
  )
}

export default App
