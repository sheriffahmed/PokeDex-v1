import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1 style={{ textAlign: 'Center' }}>PokeDex v1: <i>A casual guide to competitive battles</i></h1>
    <p style={{ textAlign: 'left', width: "20em" }}> Explore the digital Encyclopedia of the Pokemon Universe using the search bar above</p>
    <br />
    <p>CODY IS THE BEST OF ALL TIME</p>
    <p style={{ textAlign: 'left', width: "20em" }}>To view Pokemon, please navigate to the Pokemon page by Clicking on the "Pokemon" tab, or click <Link to="/pokemon">here</Link>.</p>
  </div>
);

export default Home;
