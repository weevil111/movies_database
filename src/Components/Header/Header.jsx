import React, { Component } from 'react';
import "./Header.css"

class Header extends Component {
  state = {  }
  render() { 
    return ( <div className="header">
      <div className="logo">
        <img src="logo.svg" alt="" />
      </div>
      <div className="search-btn">
        <input className="search-movies" type="text" placeholder="Search"/>
      </div>
    </div>  );
  }
}
 
export default Header;