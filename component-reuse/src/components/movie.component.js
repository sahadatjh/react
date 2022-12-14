import React, { Component } from 'react';
import Table from './common/table.component';
import Rating from './rating.component';
class Movies extends Component {
    state = { 
        movies:[
            {rank:1, title:"The Message", imdb_rating:'9.2', your_rating:true, action:'X'},
            {rank:2, title:"Three idiots", imdb_rating:'9.1', your_rating:false, action:'X'},
            {rank:3, title:"Iron Man", imdb_rating:'9.0', your_rating:false, action:'X'},
            {rank:4, title:"Robot", imdb_rating:'8.0', your_rating:true, action:'X'},
            {rank:5, title:"Dui Musafir", imdb_rating:'8.9', your_rating:false, action:'X'},
            {rank:6, title:"Hawa", imdb_rating:'8.8', your_rating:false, action:'X'},
        ]
    } 

    handleToggleRatting = (movieRank) => {
        const movies = [...this.state.movies];
        const movie = movies.find( movie => movie.rank === movieRank );
        movie.your_rating = !(movie.your_rating);
        this.setState({ movies });
    }

    handleRemove = (movieRank) => {
        const movies = [...this.state.movies];
        const UpdateMovies = movies.filter( (movie) => movie.rank !== movieRank );
        this.setState({ movies : UpdateMovies});
    }

    render() {
        const columns=[
            {label:"Rank", path:'rank', content: (movie, key) => <td>{movie[key]}</td>},
            {label:"Title", path:'title', content: (movie, key) => <td>{movie[key]}</td>},
            {label:"IMDB Rating", path:'imdb_rating', content: (movie, key) => <td>{movie[key]}</td>},
            {label:"Your Rating", path:'your_rating', content: (movie, key) => <td><Rating key={movie.rank} isRated={movie[key]} handleToggleRatting={this.handleToggleRatting} rank={movie.rank} /></td>},
            {label:"Action", path:'action', content: (movie, key) => <td><button className='btn btn-danger btn-sm' >{movie[key]}</button></td>}
        ] 
        return (
            <Table columns={columns} info={this.state.movies} />
        );
    }
}
 
export default Movies;