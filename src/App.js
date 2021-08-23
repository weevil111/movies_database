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
    let data = await axios.get(`${process.env.REACT_APP_URL}/search/movie`, {
      params: {
        api_key: process.env.REACT_APP_KEY,
        page: 1,
        query: this.state.currentMovie
      }
    });
    let moviesData = data.data.results;
    this.setState({
      moviesData
    })
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Movies movies={this.state.moviesData}></Movies>
      </div>);
  }
}

export default App;