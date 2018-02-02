import React from 'react';
import { Link } from 'react-router-dom'
import PokeList from './pokeLists'


const nums = () => {
  let list = PokeList.natDex
  return (
    <ul style={{ listStyle: 'none' }}>
      {list.map(num => {
        return (
          <li>
            <Link to={`/pokemon/number/${num}`}>{num}</Link>
          </li>
        )
      })}
    </ul>
  )


}

export default nums;