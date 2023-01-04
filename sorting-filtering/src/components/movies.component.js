import React, { Component } from 'react';
import Table from './table.component';
import getMovies from '../services/get-movies.service';
import _ from 'lodash';
import Pagination from './pagination.component';

export default class Movies extends Component {

  state={
    movies:[],
    sortColumn:{path:'id',order:'asc'}
  }

  componentDidMount(){
    const movies = getMovies();
    this.setState({ movies });
  }

  handleSort = (sortColumn) => {
    this.setState({...this.state, sortColumn})
  }

  sortMovies = (movies) => {
    const { sortColumn } = this.state;
    const sortedMovies = _.orderBy(this.state.movies, [sortColumn.path],[sortColumn.order]);
    return sortedMovies;
  }

  render() {
    const movies = this.sortMovies(this.state.movies);

    const columns = [
        { label:"ID", path:'id', sorting: true, content: ( movie, key ) => <td>{movie[key]}</td> },
        { label:"Poster", path:'posterUrl', content: ( movie, key ) => <td><img src={movie[key]} style={{ height:'40px' }}/></td> },
        { label:"Title", path:'title',sorting: true, content: ( movie, key ) => <td>{movie[key]}</td> },
        { label:"Year", path:'year', sorting: true, content: ( movie, key ) => <td>{movie[key]}</td> },
        { label:"Derectors", path:'director', sorting: true, content: ( movie, key ) => <td>{movie[key]}</td> },
        { label:"Actores", path:'actors', sorting: true, content: ( movie, key ) => <td>{movie[key]}</td> }
    ]

    return (
        <div className='container my-2'>
          <div className='table-responsive'>
            <Table movies={movies} columns={columns} onSort={this.handleSort} sortColumn={this.state.sortColumn}/>
          </div>
          <Pagination/>
        </div>
    )
  }
}
