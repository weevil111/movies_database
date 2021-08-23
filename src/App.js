import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Movies from './Components/Movies/Movies';
import axios from 'axios';
import "./App.css"

class App extends Component {
  state = {
    moviesData: [],
    currentMovie: "avengers"
  }

  async componentDidMount() {
    // API call
    this.searchMovie("avengers");
  }

  searchMovie = async ( searchKeyword ) => {
    let data = await axios.get(`${process.env.REACT_APP_URL}/search/movie`, {
      params: {
        api_key: process.env.REACT_APP_KEY,
        page: 1,
        query: searchKeyword
      }
    });
    let moviesData = data.data.results;
    this.setState({
      moviesData,
      currentMovie: searchKeyword
    })
  }
  

  render() {
    return (
      <div className="App">
        <Header searchMovie={this.searchMovie}></Header>
        <Movies movies={this.state.moviesData}></Movies>
      </div>);
  }
}

export default App;