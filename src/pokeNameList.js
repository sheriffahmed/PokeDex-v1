import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import PokeList from "./pokeLists";
import SinglePokemon from "./singlePokemon";

const RenderSingle = props => {
  const { name } = props.match.params.pokemon;
  return <SinglePokemon name={name} prev="pokemon/name" />;
};

class Names extends React.Component {
  //  namelist = () => {
  //   let list = PokeList.sortbyAlphabet
  //   return(
  //     <ul style={{listStyle: 'none'}}>
  //   {list.map( name =>{
  //     return(
  //       <li>
  //       <Link to={`/pokemon/name/${name}`}>{name}</Link>
  //       </li>
  //   )
  //   })}
  //   </ul>
  //   )}
  render() {
    let list = PokeList.sortbyAlphabet;
    return (
      <div>
        <ul style={{ listStyle: "none" }}>
          {list.map(name => {
            return (
              <li>
                <Link to={`/pokemon/name/${name}`}>{name}</Link>
              </li>
            );
          })}
        </ul>
        {/* <Switch>
  <Route exact path={"/pokemon/name"} render={this.namelist}  />
  <Route path='/pokemon/name/:pokemon' render={this.RenderSingle} />

  </Switch> . */}
      </div>
    );
  }
}

export default Names;
