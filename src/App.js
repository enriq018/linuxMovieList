// import React, { Component } from 'react';
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList.js';
import MovieListItem from './MovieListItem.js'
import Search from './Search.js'



class App extends React.Component {
  constructor(props){
    super(props);


    this.state = {
      films : this.props.films,
      searchText : ''
    }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);

  }

  handleChange(event){
    this.setState({searchText: event.target.value})
    console.log(this.state.searchText)
  }


  handleSubmit(event){
    this.setState({})

  }

  render() {
    return (
      <div className="App">
      <h1> MovieList </h1>
      <Search submit = {this.props.handleSubmit} result = {this.handleChange}/>
      <MovieList films={this.state.films}/>
      </div>
    );
  }
}

export default App;
