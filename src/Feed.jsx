import React, { useState } from 'react'

const Feed = ({ name, setName, email, setEmail }) => {

    const [tempname, setTempname] = useState(name);
    const [tempemail, setTempemail] = useState(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(tempname);
        setTempname("");
        setEmail(tempemail);
        setTempemail("");
    }

    const handleDelete = (e) =>{
        e.preventDefault();
        setName("");
        setEmail("");
    }
    return (
        <div style={{ width: "60%", backgroundColor: "lightcyan", textAlign: "center" }} >
            <h1>This is feed</h1>
            <h2 style={{ marginTop: "20px" }}>My name is:<span style={{ fontSize: "large" }}>{name}</span></h2>
            <h3 style={{ marginTop: "5px" }}>My email is:<span style={{ fontSize: "large" }}>{email}</span></h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "10%", border: "2px solid black", width: "50%", height: "200px", padding: "20px", borderRadius: "8px" }}>
                    <input type='text' placeholder='enter your name...' value={tempname} onChange={(e) => setTempname(e.target.value)} style={{marginBottom:"5px", padding:"5px"}} />
                    <input type='email' placeholder='enter your email...' value={tempemail} onChange={(e) => setTempemail(e.target.value)}  style={{marginBottom:"5px", padding:"5px"}} />
                    <button style={{ width: "80px", marginTop: "10px" }} onClick={handleSubmit}>submit</button>
                </div>
            </div>

             <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Feed
