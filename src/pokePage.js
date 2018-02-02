import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import PokeLists from "./pokeLists"
import PokeNameList from "./pokeNameList"
import PokeNumList from "./PokeNumberList"

class Pokemon extends React.Component {

  render (){
  return(
  <div style={{paddingTop: '7vh'}}>

  <Link to='/pokemon/name'>Sort by Pokemon Name</Link>
  {" "}
  <Link to='/pokemon/number'>Sort by Pokemon Number</Link>
  <Switch>
  <Route path='/pokemon/name' render={PokeNameList}/>
  <Route path='/pokemon/number' render={PokeNumList} />
  <Route path='/pokemon/name/:pokemon' />
  <Route path='/pokemon/number/:pokemon' />
  </Switch>
  </div>
  )
}
}

export default Pokemon;

