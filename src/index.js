import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import Main from "./Body";
import Home from "./Home";
import Pokemon from "./pokePage";
// import PokeNameList from "./pokeNameList";
import PokeNumList from "./PokeNumberList";
import PokeList from "./pokeLists";
const axios = require("axios");

const PokeNameList = ({handler}) => {
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

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Getparams = ({ match }) => {
  return (
    <div>
      <h1>{match.params.pokemon}</h1>
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
  // console.log(JSON.stringify(match))x
  return (
    <div>
      <h1>{name}</h1>
      <img src={sprites} alt={`loading ${name}`} />
      <p>Weight: {weight ?  weight : 'loading...' }</p>
      <Link to={`/${prev}`}>Back</Link>
    </div>
  );
};

class App extends React.PureComponent {
  constructor() {
    super();
    this.list = [];
    this.state = {
      imgURL: "",
      selectDog: "",
      searchInput: "",
      pokemonParam: "",
      pokeWeight: ""
    };
  }
  renderPokename = () => {
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
    // console.warn(json.sprites.front_default)
    // console.warn(json.species.name)
    // const weight = json.weight;
    // const sprite = json.sprites.front_default;

    
      // <SinglePokemon
      //   name={props.match.params.pokemon}
      //   prev="pokemon/name"
      // />
    
  };
  pokeOnClick = e => {
    
    this.setState({
      pokemonParam: [e.target.id.toLowerCase()]
    });
    this.renderPokename();
  }
  getRandomImage = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        this.setState({
          imgURL: response.data.message
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleProps = () => {
    if (this.state.po) {
    }

    console.log("state", this.state.pokemonParam);
  };


  componentWillMount() {
    // this.getPokemonSelect();
    // this.pokemonList();
    this.renderPokename();
  }

  componentDidMount() {
    // this.getRandomImage();
    // this.getPokemonSelect();
    
  }
  
  componentWillReceiveProps(){
    this.renderPokename();
  }

  render() {
    console.log(this.handleProps);
    const { imgURL } = this.state;
    const styles = {
      img: {
        height: "15em"
      }
    };
    // console.log(this.list)

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
            <Route
              path="/pokemon/name/:pokemon"
              render={ (props) =>{
                return (
                  <SinglePokemon
                    name={this.state.pokemonParam}
                    // sprites={sprite}
                    weight={this.state.pokeWeight}
                    prev="pokemon/name"
                  />
              
                
                // props => {
                // let pokemon = props.match.params.pokemon;

                // return(
                //   <this.RenderPokename pokemon={props.match.params.pokemon} />
                // );
                // async () => {
                //  response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
                //  json = await response.json();

                // return (
                //   <SinglePokemon
                //     name={props.match.params.pokemon}
                //     sprites={json.sprites.front_default}
                //     weight={json.weight}
                //     prev="pokemon/name"
                //   />
                // );

                //  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
                // console.log(`API: `, api)

                // return(this.captureProps(props))
                //   // let {pokemonParam} = this.state
                //   // let pp = pokemonParam
                //   // if(pp === '' || pp !== props.match.params.pokemon){
                //   //   this.setState({
                //   //   pokemonParam: [props.match.params.pokemon]
                //   // })
                //   // }
                //   // console.log(props.match.params.pokemon)
                // return (
                //   <SinglePokemon
                //     name={props.match.params.pokemon}
                //     sprites={sprite}
                //     weight={weight}
                //     prev="pokemon/name"
                //   />
                //   // <SinglePokemon
                //   //   name={props.match.params.pokemon}
                //   //   prev="pokemon/name"
                //   // />
                // );
                // >
                // {" "}
                // <SinglePokemon />
                // }
                )
              }
              }
            />

            <Route path="/pokemon/number/:pokemon" />
          </Switch>
        </div>
      </BrowserRouter>
    );

    // return (
    //   <div>
    //     <p> PokeDex v1: <i>A casual guide to competitive Battling</i></p>

    //     <br />
    //     <div>
    //     <input type="text" />
    //     <button>Search PokeDex</button>
    //     </div>
    //     <div>
    //       <select onChange={this.handlerSelectDog}>
    //         {this.state.breeds.map(el => <option value={el}>{el}</option>)}
    //       </select>
    //       <button onClick={this.getSelectedDog}>This Pokemon!</button> <button>List National Dex</button>
    //     </div>
    //     <div>
    //       <img style={styles.img} alt="" src={imgURL} />
    //     </div>
    //     <p>
    //       <button onClick={this.getRandomImage}> one more! </button>
    //     </p>
    //   </div>
    // )
  }
}

render(<App />, document.getElementById("root"));
