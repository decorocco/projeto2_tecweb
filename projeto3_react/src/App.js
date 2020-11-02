import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import HistoryList from "./components/historylist.component";
import About from "./components/about.component";
import yoda from "./components/yoda.component";
import jarjar from "./components/Jarjar.component";
import wookie from "./components/wookie.component";
import sith from "./components/sith.component";
import pirate from "./components/pirate.component";
import drogo from "./components/drogo.component";

function App() {
  // HISTORICO COM OUTRAS OPÇOES DE LINGUAS
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path='/' exact component={Home} />
      <Route path='/history' component={HistoryList} />
      <Route path='/about' component={About} />
      <Route path='/yoda' component={yoda} />
      <Route path='/gungan' component={jarjar} />
      <Route path='/wookie' component={wookie} />
      <Route path='/sith' component={sith} />
      <Route path='/pirate' component={pirate} />
      <Route path='/dothraki' component={drogo} />
    </Router>
  );

}

export default App;
