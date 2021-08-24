import axios from 'axios';
import React, { Component } from 'react';
import YouTube from 'react-youtube';
import "./MoviePage.css"
class MoviePage extends Component {
  state = { 
    movie: {},
    trailer: {}
   }

  async componentDidMount(){
    const id = this.props.location.state;
    let movieDetailsResponse = await axios.get(`${process.env.REACT_APP_URL}/movie/${id}`, {
      params: {
        api_key: process.env.REACT_APP_KEY
      }
    });
    
    let movieVideosResponse = await axios.get(`${process.env.REACT_APP_URL}/movie/${id}/videos`,{
      params: {
        api_key: process.env.REACT_APP_KEY,
        language: 'en-US'
      }
    })

    let trailer = {};
    if(movieVideosResponse.data){
      const allTrailers = movieVideosResponse.data.results.filter(videoObj => {
        return videoObj.site == "YouTube" &&
        videoObj.type == "Trailer"
      });
      if(allTrailers.length > 0){
        trailer = allTrailers[0];
      }
    }
    let movie = movieDetailsResponse.data;
    movie.poster_path = `${process.env.REACT_APP_IMAGE_URL}/${movie.poster_path}`;
    this.setState({
      movie,
      trailer
    })
  }

  render() { 
    let {title, tagline, vote_average, poster_path, overview} = this.state.movie;
    const videoOptions = {
      height: '390',
      width: '640',
      playerVars: {
        // autoplay: 1
      }
    }
    return ( 
      <div className="movie-page">
        <div className="movie-page-poster">
          <img src={poster_path} alt="" />
        </div>
        <div className="movie-page-details">
          <div className="movie-title-info">
            <h1>{title}</h1>
            <span>{tagline}</span>
            <p>{vote_average} IMDB</p>
            <p>{overview}</p>
          </div>
          <div className="movie-trailer">
            <YouTube videoId={this.state.trailer.key} opts={videoOptions}></YouTube>
          </div>
        </div>
      </div>
    );
  }
}
 
export default MoviePage;