import React, { useEffect, useImperativeHandle, useState } from "react";
import like from "../img/like.png";
import liked from "../img/likeddd.png";

// import localforage from "localforage";
function LikeIcon(props){
    const [isLiked, setIsLiked]= useState(false);
    // const [likedArray, setLikedArray] = useState([]);
    // function loadLikedArray() {
    //     localforage
    //       .getItem("likedArray")
    //       .then(function (value) {
    //         const data = value || [];
    //         setLikedArray(data);
    //       })
    //       .catch(function (err) {
    //         console.log(err);
    //         setLikedArray([]);
    //       });
    //   }
    // async function waitList(){
    //    await loadLikedArray()
    //     const isTweetLiked = likedArray.some((date)=> date === props.date );
    //     setIsLiked(isTweetLiked);
    // }
    // useEffect(()=> {
    //     waitList();
        
    // },[])
    // function saveLikeList(likedList){
    //     localforage.setItem("likedArray", likedList).then(function (value) {
    //      console.log(value);
    //     }).catch(function(err) {
    //        console.log(err);
    //     });
         
    // }
    function handleClick(){
        // if(isLiked){
        //     const filteredList = likedArray.filter((date)=> date !== props.date);
        //     // saveLikeList(filteredList);
        //     setLikedArray(filteredList);
        // } else{
        //     const updateList = [...likedArray, props.date];
        //     // saveLikeList(updateList);
        //     setLikedArray(updateList);
        // }
        setIsLiked(!isLiked);
        
    }
return(
    <button className="btnLike" onClick={handleClick}>
        <img className= {isLiked? "likeIcons liked": "likeIcons" } src={isLiked? liked: like}/> 
        <p>{isLiked? "Unlike": "Like"}</p>
    </button>
)
}

export default LikeIcon;