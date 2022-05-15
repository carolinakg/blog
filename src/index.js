import React from "react";
import ReactDOM from "react-dom"; //já vem
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom"; // entre chaves pq é um item dentro de um objeto
//rotas
import AppProvider from "./context/AppProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
