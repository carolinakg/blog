import React, { useContext } from "react";
import Button from "../components/Button";
import CreateTweets from '../components/CreateTweets';
import NavBar from "../components/NavBar";
import TweetsList from '../components/TweetsList';
import AppContext from "../context/AppContext";

function Home(){
    const {onlyMyTweets} = useContext(AppContext);
    return(
        <div className={onlyMyTweets? "only": "all"}>
            <NavBar/>
            <h1>Home</h1>
            <CreateTweets/>
            <Button/>
            <TweetsList/>
        </div>
    )
}

export default Home;