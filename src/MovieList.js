import React from 'react';
import MovieListItem from './MovieListItem.js';

var MovieList = (props) => (
  <div>
  {props.films.map((el,index) => < MovieListItem film = {el} key = {index}/>)}
  </div>
)
export default MovieList;