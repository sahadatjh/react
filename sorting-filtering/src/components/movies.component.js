import React, { Component } from 'react';
import _ from 'lodash';
import Table from './table.component';
import Pagination from './pagination.component';
import getMovies from '../services/get-movies.service';
import getGenres from '../services/get-genres.service';
import Filter from './common/filtering.component';

export default class Movies extends Component {

  state={
    movies:[],
    sortColumn:{path:'id',order:'asc'},
    pageCount:10,
    activePage:1,
    generes:[],
    selectedGenres:"All Generes"
  }

  componentDidMount(){
    const movies = getMovies();
    const generes = ["All Generes", ...getGenres()];
    this.setState({...this.state, movies,generes });
  }

  handleSort = (sortColumn) => {
    this.setState({...this.state, sortColumn})
  }

  filterMovies = () => {
    const { movies, selectedGenres } = this.state;
    const filteredMovies = movies.filter(movie=>{
      if(selectedGenres === "All Generes") return true;

      if(movie.genres.includes(selectedGenres)) return true;

      return false;
    });
    return filteredMovies; 
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
 
  handleActiveGenere = (genere) => {
    this.setState({ ...this.state, selectedGenres:genere })
  }

  render() {
    const filteredMoves = this.filterMovies();
    const paginateMovies = this.paginateMovies(filteredMoves);
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
          <div className='row'>
          <h1 className='text-center'>IMDB Top Movies</h1>
            <div className='col-md-2'>
              <Filter items={this.state.generes} selectedItem={this.state.selectedGenres} clickedItem={this.handleActiveGenere} />
            </div>
            <div className='col-md-10'>
              <div className='table-responsive'>
                  <Table movies={movies} columns={columns} onSort={this.handleSort} sortColumn={this.state.sortColumn}/>
              </div>
              <Pagination totalItems={filteredMoves.length} pageCount={this.state.pageCount} activePage={this.state.activePage} ClickedPage={this.handlePageClick}/>
            </div>
          </div>
        </div>
    )
  }
}
