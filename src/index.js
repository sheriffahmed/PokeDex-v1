import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { BrowserRouter, Link, Switch, Route} from "react-router-dom";
import SinglePokemon from "./singlePokemon";
import Main from "./Body";
import Home from './Home'
import Pokemon from "./pokePage"
const axios = require("axios");

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  constructor() {
    super();
    this.list = []
    this.state = {
      imgURL: "",
      selectDog: "",
      breeds: [],
      searchInput: ''
    }
  }
  renderPokename = props => {
    const { name } = props.match.params.pokemon;
  
    return console.log(`name is:`,name), <SinglePokemon name={name} prev="pokemon/name" />;
  };


  // getPokemonSelect = async () => {

  //   for (var i = 1; i <= 8; i++) {
  //     const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i + '/');
  //     const json = await response.json();


  //     // fetch(`http://pokeapi.co/api/v2/pokemon/4/`,{ method: 'GET',
  //     //   mode: 'cors'})
  //     // .then(response => {
  //     console.log("response is: " + json)
  //     // return response.json();


  //     // })
  //     // .then(obj =>{
  //     this.list.push(json.name)

  //     // })
  //     // .catch(err => {
  //     // console.log(err)
  //     // })
  //   }
  //   this.setState({
  //     breeds: this.list
  //     // this.setState({
  //     //   breeds: response.data.message
  //     // })


  //   })
  // }

  getRandomImage = () => {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        this.setState({
          imgURL: response.data.message
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  getSelectedDog = () => {
    axios
      .get(`https://dog.ceo/api/breed/${this.state.selectDog}/images/random`)
      .then(response => {
        this.setState({
          imgURL: response.data.message
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handlerSelectDog = e => {
    this.setState({
      selectDog: e.target.value
    })
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
    const { imgURL } = this.state;
    const styles = {
      img: {
        height: "15em"
      }
    }
    console.log(this.list)

    return(
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">Home</Link>
            {"  "}
            <Link to="/pokemon">Pokemon</Link>

            {"  "}<input type="text" /> <button>Search PokeDex</button>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pokemon" component={Pokemon} />
          </Switch>
        </div>
      
      </BrowserRouter>

      
    )
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

render(<App />, document.getElementById('root'));
