import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbarz from "./layout/Navbarz"
import Footer from './layout/Footer'

import Home from "./layout/Home"
import About from './layout/About'
import Bees from './layout/Bees'
import Recipes from './layout/Recipes'
import Locator from './layout/Locator'

import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <div className="Child" >
        <Navbarz />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/bees" component={Bees} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/locator" component={Locator} />
        <Footer />  
        </div>
      </div>
    </Router>
  );
}

export default App;
