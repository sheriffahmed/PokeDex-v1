import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import PokeLists from "./pokeLists"
import PokeNameList from "./pokeNameList"

const Pokemon = () => {
  return(
  <div style={{paddingTop: '7vh'}}>

  <Link to='/pokemon/name'>Sort by Pokemon Name</Link>
  {" "}
  <Link to='/pokemon/number'>Sort by Pokemon Number</Link>
  <Switch>
  <Route path='/pokemon/name' render={PokeNameList}/>
  <Route path='/pokemon/number' />
  <Route path='/pokemon/:pokemon' />
  </Switch>
  </div>
  )
}

export default Pokemon;