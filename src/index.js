import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Main from "./Body";
import Home from "./Home";
import Pokemon from "./pokePage";
import PokeNumList from "./PokeNumberList";
import PokeList from "./pokeLists";
import axios from "axios";

class App extends React.PureComponent {
  constructor() {
    super();
    this.list = [];
    this.state = {
      selectDog: "",
      searchInput: "",
      pokemonParam: "",
      pokeWeight: ""
    };
  }
  renderPokename = () => {
    this.setState({
      pokeWeight: "loading..."
    });
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + this.state.pokemonParam + "/")
      .then(res => {
        this.setState({
          pokeWeight: [res.data.weight]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  pokeOnClick = e => {
    this.setState({
      pokemonParam: [e.target.id.toLowerCase()]
    });
    this.renderPokename();
  };

  componentDidMount() {
    this.renderPokename();
  }

  componentWillReceiveProps() {
    this.renderPokename();
  }

  render() {
    console.log(this.handleProps);
  
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">Home</Link>
            {"  "}
            <Link to="/pokemon">Pokemon</Link>
            {"  "}
            <input type="text" /> <button>Search PokeDex</button>
          </nav>
          <Switch>
            <Route
              path="/pokemon/name/:pokemon"
              render={props => {
                return (
                  <SinglePokemon
                    name={this.state.pokemonParam}
                    weight={this.state.pokeWeight}
                    prev="pokemon/name"
                  />
                );
              }}
            />

            <Route path="/pokemon/number/:pokemon" />
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemon" component={Pokemon} />
            <Route
              exact
              path="/pokemon/name"
              render={() => {
                return <PokeNameList handler={this.pokeOnClick} />;
              }}
            />
            <Route path="/pokemon/number" render={PokeNumList} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const PokeNameList = ({ handler }) => {
  let list = PokeList.sortbyAlphabet;
  return (
    <div style={{ paddingTop: "7vh" }}>
      <Link to="/pokemon/name">Sort by Pokemon Name</Link>{" "}
      <Link to="/pokemon/number">Sort by Pokemon Number</Link>
      <ul style={{ listStyle: "none" }}>
        {list.map(name => {
          return (
            <li>
              <Link
                to={`/pokemon/name/${name}`}
                id={`${name}`}
                onClick={handler}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


const SinglePokemon = ({
  name,
  id,
  height,
  weight,
  abilities,
  sprites,
  stats,
  types,
  prev
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={sprites} alt={`loading ${name}`} />
      <p>Weight: {weight}</p>
      <Link to={`/${prev}`}>Back</Link>
    </div>
  );
};

render(<App />, document.getElementById("root"));
