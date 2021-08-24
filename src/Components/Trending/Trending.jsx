import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Movies from '../Movies/Movies';

class Trending extends Component {
  state = { 
    moviesData: [],
    type: "movie"
   }

  async componentDidMount(){
    let type = "movie";
    if(this.props.location.state){
      type = this.props.location.state;
    }
    this.fetchTrending(type);
  }
  
  componentDidUpdate(){
    let type = "movie";
    if(this.props.location.state){
      type = this.props.location.state;
    }
    this.fetchTrending(type);
  }

  async fetchTrending(type){
    let response = await axios.get(`${process.env.REACT_APP_URL}/trending/${type}/week`, {
      params: {
        api_key: process.env.REACT_APP_KEY
      }
    });
    let moviesData = response.data.results;
    this.setState({
      moviesData
    })
  }

  render() { 
    return ( <Movies movies={this.state.moviesData}>What's popping</Movies> );
  }
}
 
export default withRouter(Trending);