import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import PokeList from './pokeLists'
import SinglePokemon from './singlePokemon';


const RenderSingle = props =>{
  
}

class Names extends React.Component {


 namelist = () =>{
  let list = PokeList.sortbyAlphabet
  return(
    <ul style={{listStyle: 'none'}}>
  {list.map( name =>{
    return(
      <li>
      <Link to={`/pokemon/name/${name}`}>{name}</Link>
      </li>
  )
  })}
  </ul>
  )}
  render(){
    return(
     <div>
 
 <Switch>
  <Route path={"/pokemon/name"} render={this.namelist}  />
  <Route path='/pokemon/name/:pokemon'> </Route>

  </Switch>
  </div> 
    )


   }
  
  
  

}

export default Names;