import React from 'react';
import {Link} from 'react-router-dom'
import PokeList from './pokeLists'


const names = () =>{
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
  )
  

}

export default names;