import axios from 'axios';


const GetPokemon = pokemon=>{
  axios.get(`https://pokeapi.co/api/v2/${pokemon}`)
  } 