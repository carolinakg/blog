import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut, getAuth } from 'firebase/auth'


function NavBar(){
    const navigate = useNavigate()
    
    function handleLogout(event){
        event.preventDefault()
        signOut(getAuth()).then(() => {
            navigate('/login')
        });
    }
    
    return(
        <nav>
            <Link to = "/" >Home</Link>
            <Link to = "/profile">Profile</Link>
            <Link to = "/login">Login</Link>
            <button className = "btnLogout" onClick={handleLogout}>Logout</button>
        </nav>
    )
}

export default NavBar;