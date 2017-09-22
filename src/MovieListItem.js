import React from 'react';
import './App.css';


var MovieListItem = (props) => (
	<div className = 'item'>
	{props.film.title}
	</div>
)

export default MovieListItem;