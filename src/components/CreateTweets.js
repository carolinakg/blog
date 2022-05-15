import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import api from "../lib/api";
import Loading from "./Loading";
import { db } from "../firebase/firebase-config"
import { addDoc, collection, serverTimestamp} from 'firebase/firestore'
import localforage from "localforage";



function CreateTweets(){
    const[content, setContent]= useState("");
    const[isDisabled, setIsDisabled]=useState(true);
    const[errorMsg, setErrorMsg]= useState("");
    const{tweets, setTweets, currentUser, isLoading, setIsLoading, userName, myTweets, setMyTweets, loadTweets} = useContext(AppContext);

    function handleChange(event){
        const {value} = event.target;
        setContent(value);
        setIsDisabled(value.length === 0 || value.length > 140);
    }
    
    async function handlePostTweet(event) {
        event.preventDefault()

        setIsLoading(true)

        const tweet = {content, userName, uid: currentUser.uid, date: serverTimestamp()};

        try {
            await addDoc(collection(db,'tweets'), tweet)
            setContent("");
        } catch (err) {
            setErrorMsg('Tweet post has failed!')
        }

        setIsLoading(false)
    }


    //cons algo e ai {} --> estrturando objeto. 
    return(
        <form className="form" onSubmit={handlePostTweet}>
            <textarea placeholder="What you have in mind..." maxLength="140" value={content} onChange={handleChange}/>
            <button type="submit" disabled= {isDisabled || isLoading} >Tweet</button>
            {isLoading? <Loading/>: null}
            <span>{errorMsg}</span>
        </form>
    )
 
}

export default CreateTweets;