import React, { useContext, useState, useEffect } from "react";
import AppContext from "../context/AppContext";
import LikeIcon from "./LikeIcon";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

function TweetsList() {
  const { tweets, myTweets, onlyMyTweets } = useContext(AppContext);
  const list = onlyMyTweets ? myTweets : tweets;

  function handleSort(a, b) {
    const dateA = new Date(a.date?.toDate());
    const dateB = new Date(b.date?.toDate());
    return dateB - dateA;
  }
  
  return (
    <div className="list">
      {list.length > 0 ? list.sort(handleSort).map((tweet, i) => (
        <div className="tweet" key={i}>
          <Link to={`/${tweet.userName}`}>
            <h5>{tweet.userName}</h5>
          </Link>
          <span>{tweet.date?.toDate().toLocaleString('en-US')}</span>
          <p>{tweet.content}</p>
          <LikeIcon date={tweet.date} />
        </div>
      )): ''}
    </div>
  );
}

export default TweetsList;
