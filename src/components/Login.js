import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import style from './Login.module.css';



function Login() {
  const [pageModeIsLogin, togglePageMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlePageModeLink = (pageMode) => togglePageMode(pageMode);

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (pageModeIsLogin) {
      handleLogin();
    } else {
      handleSignUp();
    }
  };
  
  const handleLogin = () => {
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, email, password)
      .then(response => {
        navigate('/')
      }).catch(error => {
        if (error?.code === 'auth/user-not-found') {
          alert('Usuário ou Senha inválidos!')
        } else {
          alert('Erro inesperado!')
        }
      })
  }
  
  const handleSignUp = () => {
    const authentication = getAuth();
//getAuth é do firebase- cria autentificação
    createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        alert("Conta criada com sucesso!");
      })
      .catch((error) => {
          console.log(error);
        if (error?.code === "auth/email-already-in-use") {
          alert("Usuário já existe!");
        } else if(error?.code === "auth/weak-password"){
            alert("Weak Password");
        }
        else {
          alert("Erro inesperado!");
        }
      });
  };

  const pageText = pageModeIsLogin ? "Acessar conta" : "Criar conta";

  return (
    <>
      <form className= {style.teste} onSubmit={handleSubmit}>
        <NavBar />
        <p>{pageText}</p>
        <input className = "handleEmail" type="text" id="email" name="email" onChange={handleEmail} />
        <input className = "handleEmail" type="password" id="password" name="password" onChange={handlePassword}
        />
        <button type="submit">{pageText}</button>
        <p>
          <a href="#" onClick={() => handlePageModeLink(true)}>
            Acessar minha conta
          </a>{" "}
          |{" "}
          <a href="#" onClick={() => handlePageModeLink(false)}>
            Criar uma conta nova
          </a>
        </p>
      </form>
    </>
  );
}

export default Login;
