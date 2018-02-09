import React from 'react';
import { Link } from 'react-router-dom'
import PokeList from './pokeLists'


const nums = () => {
  let list = PokeList.natDex
  return (
    <div style={{ paddingTop: "7vh" }}>
      <Link to="/pokemon/name">Sort by Pokemon Name</Link>{" "}
      <Link to="/pokemon/number">Sort by Pokemon Number</Link>
    <ul style={{ listStyle: 'none' }}>
      {list.map(num => {
        return (
          <li>
            <Link to={`/pokemon/number/${parseInt(num.split('').splice(0,3).join('')).valueOf()}`}>{num}</Link>
          </li>
        )
      }
      
      )}
    </ul>
    </div>
  )


}

export default nums;