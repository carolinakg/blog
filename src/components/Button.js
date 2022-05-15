import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function Button(){
const {onlyMyTweets, setOnlyMyTweets} = useContext(AppContext);
const buttonText = onlyMyTweets? "All Tweets": "My Tweets";
function handleClick(){
    setOnlyMyTweets(!onlyMyTweets);
}
return(
    <div>
        <button className = "toggleBtn" onClick={handleClick}>{buttonText}</button>
    </div>
)
}

export default Button;