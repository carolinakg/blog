import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function UserPage(){
    const {userName} = useParams();
    return(
        <div>
        <NavBar/>
       <h1>Profile</h1>
       <h4>Name: {userName}</h4>
       </div>
    )
}
//useparams é oq vem depois da barra da search. que é oq eu cliquei
export default UserPage;
