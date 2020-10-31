import logo from './images/jarjar.jpg';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import HistoryList from "./components/historylist.component";
import About from "./components/about.component";

function App() {

  // HISTORICO COM OUTRAS OPÇOES DE LINGUAS

  //YODA SPEAK

  // const axios = require("axios");
  // axios({
  //   "method":"POST",
  //   "url":"https://yodish.p.rapidapi.com/yoda.json",
  //   "headers":{
  //   "content-type":"application/x-www-form-urlencoded",
  //   "x-rapidapi-host":"yodish.p.rapidapi.com",
  //   "x-rapidapi-key":"f02d5d9c58msh98e1232364bea64p1377b9jsn3a10ac06aeb7",
  //   "useQueryString":true
  //   },"params":{
  //   "text":"Master Obiwan has lost a planet."
  //   },"data":{
    
  //   }
  //   })
  //   .then((response)=>{
  //     console.log(response.data.contents.translated)
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })

  // KLINGON

  // const axios = require("axios");
  // axios({
  //   "method":"GET",
  //   "url":"https://klingon.p.rapidapi.com/klingon",
  //   "headers":{
  //   "content-type":"application/octet-stream",
  //   "x-rapidapi-host":"klingon.p.rapidapi.com",
  //   "x-rapidapi-key":"f02d5d9c58msh98e1232364bea64p1377b9jsn3a10ac06aeb7",
  //   "useQueryString":true
  //   },"params":{
  //   "text":"I will terminate you."
  //   }
  //   })
  //   .then((response)=>{
  //     console.log(response)
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })

  return (
    <Router>
      <Navbar />
      <br/>
      <Route path='/' exact component={Home} />
      <Route path='/history' component={HistoryList} />
      <Route path='/about' component={About} />
    </Router>
  );

}

export default App;
