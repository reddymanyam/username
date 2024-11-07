import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail, updateName } from './redux/slice/userSlice';

const Feed = () => {

    const[tempname, setTempname] = useState("");
    const[tempemail, setTempemail]= useState("");

    const name = useSelector((state)=>state.userupdate.name);
    const email = useSelector((state)=>state.userupdate.email);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateName(tempname));
        dispatch(updateEmail(tempemail));
        setTempname("");
        setTempemail("");
    }

    const handleDelete = (e) =>{
        e.preventDefault();
        dispatch(updateName(""));
        dispatch(updateEmail(""));
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
