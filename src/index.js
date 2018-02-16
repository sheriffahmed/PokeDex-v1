import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import Main from "./Body";
import Home from "./Home";
import Pokemon from "./pokePage";
import PokeNameList from "./pokeNameList";
import PokeNumList from "./PokeNumberList";
const axios = require("axios");

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
      <Link to={`/${prev}`}>Back</Link>
    </div>
  );
};

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.list = [];
    this.state = {
      imgURL: "",
      selectDog: "",
      breeds: [],
      searchInput: "",
      pokemonParam: ""
    };
  }
  // renderPokename = () => {
  //   const { name } = props.match.params.pokemon;

  //   return console.log(`name is:`, name), <SinglePokemon prev="pokemon/name" />;
  // };

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

  getSelectedDog = () => {
    axios
      .get(`https://dog.ceo/api/breed/${this.state.selectDog}/images/random`)
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

  captureProps = (incomingProps) =>{

    this.setState({
      pokemonParam: [incomingProps.match.params.pokemon]
    })
    return(
      <SinglePokemon
        name={incomingProps.match.params.pokemon}
        prev="pokemon/name"
      />
    )
  }

  componentWillMount() {
    // this.fetchData();
    // this.getPokemonSelect();
    // this.pokemonList();
  }

  // fetchData = async () => {
  //   const response = await fetch('https://pokeapi.co/api/v2/pokemon/2/');
  //   const json = await response.json();
  //   this.setState({ data: json });
  //   console.warn(json.sprites.front_default)
  //   console.warn(json.species.name)
  // };

  componentDidMount() {
    this.getRandomImage();
    // this.getPokemonSelect();
    this.getSelectedDog();
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
            <Route exact path="/pokemon/name" component={PokeNameList} />
            <Route path="/pokemon/number" render={PokeNumList} />
            <Route
              path="/pokemon/name/:pokemon"
              render={props => {
                // return(this.captureProps(props))
              //   // let {pokemonParam} = this.state
              //   // let pp = pokemonParam
              //   // if(pp === '' || pp !== props.match.params.pokemon){
              //   //   this.setState({
              //   //   pokemonParam: [props.match.params.pokemon]
              //   // })
              //   // }
              //   // console.log(props.match.params.pokemon)
                return (
                  <SinglePokemon
                    name={props.match.params.pokemon}
                    prev="pokemon/name"
                  />
                ); 
              // >
              // {" "}
              // <SinglePokemon /> 
              }
              } />
            
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
