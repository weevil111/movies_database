import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    if (e.key == "Enter") {
      this.props.searchMovie(this.state.searchKeyword);
    }
  }

  render() {
    return (<div className="header">
      <div className="logo">
        <img src="logo.svg" alt="" />
      </div>
      <div className="search-btn">
        <input
          className="search-movies"
          onChange={this.handleOnChange}
          onKeyPress={this.handleKeyPress}
          type="text"
          placeholder="Search" />
      </div>
      <div className="header-links">
        <div className="header-link">
          <Link to="/">Home</Link>
        </div>
        <div className="header-link">
          <Link to="/fav">Favorites</Link>
        </div>
      </div>
    </div>);
  }
}

export default Header;