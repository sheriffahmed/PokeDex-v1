import React from "react";
import { Link, Switch, Route } from "react-router-dom";
// import PokeLists from "./pokeLists";
import PokeNameList from "./pokeNameList";
import PokeNumList from "./PokeNumberList";
import SinglePokemon from "./singlePokemon";
class Pokemon extends React.Component {
  renderPokename = props => {
    const { name } = props.match.params.pokemon;
    return <SinglePokemon name={name} prev="pokemon/name" />;
  };
  RenderPokeRoute= () =>{
    return(
      <div style={{ paddingTop: "7vh" }}>
        <Link to="/pokemon/name">Sort by Pokemon Name</Link>{" "}
        <Link to="/pokemon/number">Sort by Pokemon Number</Link>
        </div>
    )
  }
  render() {
    return (
      <div>
      <this.RenderPokeRoute />
      {/* <div style={{ paddingTop: "7vh" }}>
        <Switch>
          <Route  path="/pokemon" render={this.renderPokeRoute} />
          <Route path="/pokemon/name" component={PokeNameList} />
          <Route path="/pokemon/number" render={PokeNumList} />
          <Route path="/pokemon/name/:pokemon" render={this.renderPokename}><SinglePokemon prev="pokemon/name" /> </Route> 
         <Route path="/pokemon/number/:pokemon" />
        </Switch>
      </div> */}
      </div>
     
      
    );
  }
}

export default Pokemon;
