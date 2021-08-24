import axios from 'axios';
import React, { Component } from 'react';
class MoviePage extends Component {
  state = { 
    movie: {}
   }

  async componentDidMount(){
    const id = this.props.location.state;
    let response = await axios.get(`${process.env.REACT_APP_URL}/movie/${id}`, {
      params: {
        api_key: process.env.REACT_APP_KEY
      }
    });
    let movie = response.data;
    movie.poster_path = `${process.env.REACT_APP_IMAGE_URL}/${movie.poster_path}`;
    this.setState({
      movie
    })
  }

  render() { 
    return ( <img src={this.state.movie.poster_path} alt="" /> );
  }
}
 
export default MoviePage;