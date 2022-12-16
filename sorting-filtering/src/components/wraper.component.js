import React, { Component } from 'react';
import Table from './table.component';
import getMovies from '../services/get-movies.service';

export default class Wraper extends Component {

  state={
    movies:[]
  }

  componentDidMount(){
    const movies = getMovies();
    this.setState({ movies });
  }

  render() {

    const columns = [
        { label:"ID", path:'id', content: ( movie, key ) => <td>{movie[key]}</td> },
        { label:"Poster", path:'posterUrl', content: ( movie, key ) => <td><img src={movie[key]} style={{ height:'40px' }}/></td> },
        { label:"Title", path:'title', content: ( movie, key ) => <td>{movie[key]}</td> },
        { label:"Year", path:'year', content: ( movie, key ) => <td>{movie[key]}</td> },
        { label:"Derectors", path:'director', content: ( movie, key ) => <td>{movie[key]}</td> },
        { label:"Actores", path:'actors', content: ( movie, key ) => <td>{movie[key]}</td> }
    ]

    return (
        <div className='container my-2'>
            <Table movies={this.state.movies} columns={columns}/>
        </div>
    )
  }
}
