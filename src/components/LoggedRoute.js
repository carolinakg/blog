import React, { useContext } from "react";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import AppContext from "../context/AppContext";

import {Navigate} from 'react-router-dom';

function LoggedRoute({ pageComponent }) {
    const{currentUser, initialAuthLoading} = useContext(AppContext);

    if (initialAuthLoading) {
      return <p>Loading...</p>
    }

    return currentUser ? pageComponent : <Navigate to="/login" />
  }

export default LoggedRoute;