import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import PokeList from "./pokeLists";
import SinglePokemon from "./singlePokemon";

const RenderSingle = props => {
  const { name } = props.match.params.pokemon;
  return <SinglePokemon name={name} prev="pokemon/name" />;
};
const getHandler = (handler) =>{

}

class Names extends React.Component {

  render() {
    let list = PokeList.sortbyAlphabet;
    return (
      <div style={{ paddingTop: "7vh" }}>
        <Link to="/pokemon/name">Sort by Pokemon Name</Link>{" "}
        <Link to="/pokemon/number">Sort by Pokemon Number</Link>
        <ul style={{ listStyle: "none" }}>
          {list.map(name => {
            return (
              <li>
                <Link to={`/pokemon/name/${name}`} id={`${name}`} onClick={getHandler}  >{name}</Link>
              </li>
            );
          })}
        </ul>

      </div>
    );
  }
}

export default {
  Names,
  getHandler
  }
