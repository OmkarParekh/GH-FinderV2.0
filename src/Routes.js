import React from "react";
import {BrowserRouter as Router ,Route} from "react-router-dom";
import home from './Pages/home'
import result from './Pages/search'
import About from './Pages/About'
import Nav from './Pages/nav'


export default () => (
    <Router>
        <Nav/>
       <Route path="/" exact component={home} />
       <Route path="/Search" exact component={result} />
       <Route path="/About" exact component={About} />
  
      

 
    </Router>
    
)
