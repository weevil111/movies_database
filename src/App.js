import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Movies from './Components/Movies/Movies';
import axios from 'axios';
import "./App.css"
import Pagination from './Components/Pagination/Pagination';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Trending from './Components/Trending/Trending';
import MoviePage from './Components/MoviePage/MoviePage';

class App extends Component {
  state = {
    moviesData: [],
    currentMovie: "avengers",
    pages: [],
    currentPage: 1
  }

  async componentDidMount() {
    // API call
    this.searchMovie("avengers");
  }

  searchMovie = async (searchKeyword, page = 1) => {
    let data = await axios.get(`${process.env.REACT_APP_URL}/search/movie`, {
      params: {
        api_key: process.env.REACT_APP_KEY,
        page,
        query: searchKeyword
      }
    });
    let moviesData = data.data.results;
    let pagesCount = data.data.total_pages;
    let currentPage = data.data.page;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    this.setState({
      moviesData,
      currentMovie: searchKeyword,
      pages,
      currentPage
    })
  }

  previousPage = async () => {
    if (this.state.currentPage <= 1) {
      return;
    }
    this.searchMovie(this.state.currentMovie, this.state.currentPage - 1);
  }
  nextPage = async () => {
    if (this.state.currentPage >= this.state.pages.length) {
      return;
    }
    this.searchMovie(this.state.currentMovie, this.state.currentPage + 1);
  }
  setPage = async (pagesCount) => {
    this.searchMovie(this.state.currentMovie, pagesCount)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header searchMovie={this.searchMovie}></Header>
          <Route path="/" exact>
            {this.state.moviesData.length ? (<>
              <Movies movies={this.state.moviesData}></Movies>
              <Pagination
                pages={this.state.pages}
                currentPage={this.state.currentPage}
                nextPage={this.nextPage}
                previousPage={this.previousPage}
                setPage={this.setPage}
              ></Pagination>
            </>
            ) : (
              <h1 className="not-found">Oops... No movies found</h1>
            )}
          </Route>
          <Route path="/trending" exact>
            <Trending></Trending>
          </Route>
          <Route path="/moviepage" component={MoviePage}></Route>
        </div>
      </Router>);
  }
}

export default App;