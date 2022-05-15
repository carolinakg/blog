import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import localforage from "localforage";
import { collection, onSnapshot, query, where, getDocs } from "firebase/firestore";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { db } from "../firebase/firebase-config";
import api from "../lib/api";

function AppProvider(props) {
  const [tweets, setTweets] = useState([]);
  const [myTweets, setMyTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const [initialAuthLoading, setInitialAuthLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState()
  const [onlyMyTweets, setOnlyMyTweets] = useState(false);

  useEffect(() => {
    const auth = getAuth()
    // Watching auth change
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
        setUserName(user.email)
      // User not found or logged out
      } else {
        setCurrentUser(null)
        setUserName()
      }
      setInitialAuthLoading(false)
    })
  }, [])
  

  function loadTweets() {
    onSnapshot(collection(db, "tweets"), (snapshot) => {
      const tweets = snapshot.docs.map((doc) => doc.data())
      setTweets(tweets);
    });
  }

  function loadMyTweets() {
    // How to query with firebase?
    const tweetsCollection = collection(db, 'tweets')
    const filter = where('userName', '==', userName)
    const q = query(tweetsCollection, filter)

    onSnapshot(q, (snapshot) => {
      setMyTweets(snapshot.docs.map(tweet => tweet.data()))
      setIsLoading(false)
    });
  }
  
  useEffect(() => {
    loadTweets();
    if (userName) {
      loadMyTweets()
    }
  }, [userName]);

  const context = {
    tweets,
    setTweets,
    isLoading,
    setIsLoading,
    userName,
    setUserName,
    myTweets,
    setMyTweets,
    onlyMyTweets,
    setOnlyMyTweets,
    loadTweets,
    initialAuthLoading,
    currentUser,
  };
  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
}

export default AppProvider;
