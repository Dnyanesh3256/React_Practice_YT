import React from "react"
import { useState, useContext } from "react"
import UserContext from "../context/UserContext"

export default function Login(){
    const [username, setUername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return(
        <div>
            <h2>Login : </h2>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUername(e.target.value)} />
            <br />
            <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}