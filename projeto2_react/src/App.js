import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import HistoryList from "./components/historylist.component";
import About from "./components/about.component";
import yoda from "./components/yoda.component";
import minion from "./components/minion.component";
import valyrian from "./components/valiryan.component";
import elvish from "./components/elvish.component";
import pirate from "./components/pirate.component";
import drogo from "./components/drogo.component";
import jive from "./components/jive.component";
import swedishchef from "./components/swedishchef.component";
import piglatin from "./components/piglatin.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path='/' exact component={Home} />
      <Route path='/history' component={HistoryList} />
      <Route path='/about' component={About} />
      <Route path='/yoda' component={yoda} />
      <Route path='/minion' component={minion} />
      <Route path='/valyrian' component={valyrian} />
      <Route path='/elvish' component={elvish} />
      <Route path='/pirate' component={pirate} />
      <Route path='/dothraki' component={drogo} />
      <Route path='/jive' component={jive} />
      <Route path='/swedishchef' component={swedishchef} />
      <Route path='/piglatin' component={piglatin} />
    </Router>
  );

}

export default App;
