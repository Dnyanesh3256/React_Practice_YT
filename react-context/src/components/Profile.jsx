import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
    const {user} = useContext(UserContext)
    
    if(!user) return <div>please login!</div>

    return <div>Welcome {user.username}! Your password is {user.password}</div>
}