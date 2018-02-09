import React from 'react'
import {Link} from 'react-router-dom'

const SinglePokemon = ({ name, id, height, weight, abilities, sprites, stats, types, prev })=>(


  <div>
  <h1>{name}</h1>
  <img src={sprites} alt={`loading ${name}`}  />
  <Link to={`/${prev}`}>Back</Link>

  </div>
)


export default SinglePokemon;