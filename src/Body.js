import React from 'react';
import { Link, Switch, Route } from "react-router-dom";
// import Pets from "./Pets/Pets";

// Change here
import Home from "./Home";
import Pokemon from "./pokePage"
const Main = () =>(
  <div>
  <nav>
      <Link to="/">Home</Link>
      {"  "}
      <Link to="/pokemon">Pokemon</Link>

      {"  "}<input type="text" /> <button>Search PokeDex</button>
  </nav>
  <Switch>
<Route exact path="/" component={Home}/> 
<Route path="/pokemon" component={Pokemon}/>
  </Switch>
  </div>
)

export default Main;