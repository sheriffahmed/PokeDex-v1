import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import PokeLists from "./pokeLists";
import PokeNameList from "./pokeNameList";
import PokeNumList from "./PokeNumberList";
import SinglePokemon from "./singlePokemon";
class Pokemon extends React.Component {
  renderPokename = props => {
    const { name } = props.match.params.pokemon;
    return <SinglePokemon name={name} prev="pokemon/name" />;
  };
  renderPokeRoute= () =>{
    return(
      <div>
        <Link to="/pokemon/name">Sort by Pokemon Name</Link>{" "}
        <Link to="/pokemon/number">Sort by Pokemon Number</Link>
        </div>
    )
  }
  render() {
    return (
      <div style={{ paddingTop: "7vh" }}>
        <Switch>
          <Route exact path="/pokemon" render={this.renderPokeRoute} />
          <Route exact path="/pokemon/name" component={PokeNameList} />
          <Route path="/pokemon/number" render={PokeNumList} />
        <Route path="/pokemon/name/:pokemon" render={this.renderPokename} /> 
         <Route path="/pokemon/number/:pokemon" />
        </Switch>
      </div>
    );
  }
}

export default Pokemon;
