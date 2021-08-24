import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./Header.css"

class Header extends Component {
  state = {
    searchKeyword: ""
  }
  handleOnChange = (e) => {
    let value = e.target.value;
    this.setState({
      searchKeyword: value
    })
  }
  
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.setState({
        searchKeyword: ""
      })
      this.props.searchMovie(this.state.searchKeyword);
      this.props.history.push("/")
    }
  }

  render() {
    return (<div className="header">
      <div className="logo">
        <Link to="/">
          <img src="/movies_database/logo.svg" alt="" />
        </Link>
      </div>
      <div className="search-btn">
        <input
          className="search-movies"
          onChange={this.handleOnChange}
          onKeyPress={this.handleKeyPress}
          type="text"
          placeholder="Search"
          value={this.state.searchKeyword}
          />
      </div>
      <div className="header-links">
        <div className="header-link">
          <Link to="/">Home</Link>
        </div>
        <div className="header-link">
          <Link to={{pathname:"/trending", state: "movie"}} replace>Movies</Link>
        </div>
        <div className="header-link">
          <Link to={{pathname:"/trending", state:"tv"}} replace>TV Shows</Link>
        </div>
      </div>
    </div>);
  }
}

export default withRouter(Header);