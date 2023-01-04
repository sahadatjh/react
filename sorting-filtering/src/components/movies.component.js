import React, { Component } from 'react';
import Table from './table.component';
import getMovies from '../services/get-movies.service';
import _ from 'lodash';
import Pagination from './pagination.component';

export default class Movies extends Component {

  state={
    movies:[],
    sortColumn:{path:'id',order:'asc'},
    pageCount:10,
    activePage:2
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
    const sortedMovies = _.orderBy(movies, [sortColumn.path],[sortColumn.order]);
    return sortedMovies;
  }

  handlePageClick = (activePage) => {
    this.setState({...this.state, activePage});
  }

  paginateMovies = (movies) => {
    const {activePage, pageCount}=this.state;
    const start = (activePage-1)*pageCount;
    const paginetedMovies = movies.slice(start, start+pageCount);
    return paginetedMovies;
  }
 

  render() {
    const paginateMovies = this.paginateMovies(this.state.movies);
    const movies = this.sortMovies(paginateMovies);

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
          <Pagination totalItems={this.state.movies.length} pageCount={this.state.pageCount} activePage={this.state.activePage} ClickedPage={this.handlePageClick}/>
        </div>
    )
  }
}
