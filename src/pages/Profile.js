import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import localforage from "localforage";
import NavBar from "../components/NavBar";

function Profile(){
    const{userName, setUserName} = useContext(AppContext);
    const [input, setInput] = useState("");
    function saveUserName(name){
        localforage.setItem("userName", name).then(function (value) {
         console.log(value);
        }).catch(function(err) {
           console.log(err);
        });
         
    }
    function handleClick(event){
        event.preventDefault();
        saveUserName(input);
        setUserName(input);
        setInput("");
    }
    // saveusername é para salvar no local e o set é para atualizar o estado
    return(
        <form>
             <NavBar/>
            <h1>Profile</h1>
            <h4>User Name: {userName}</h4>
            <input type= "text" value= {input} onChange= {(event)=> setInput(event.target.value)}/>
            <button className= "save" onClick={ handleClick }>Save</button>
        </form>
    )
}//onchange: atualiza o valor do input se for usado em outro lugar

export default Profile;