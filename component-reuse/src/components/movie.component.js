import React, { Component } from 'react';
import Table from './common/table.component';
import Rating from './rating.component';
class Movies extends Component {
    state = { 
        movies:[
            {rank:1, title:"The Message", imdb_rating:'9.2', your_rating:true, action:''},
            {rank:2, title:"Three idiots", imdb_rating:'9.1', your_rating:false, action:''},
            {rank:3, title:"Iron Man", imdb_rating:'9.0', your_rating:false, action:''},
            {rank:4, title:"Robot", imdb_rating:'8.0', your_rating:true, action:''},
            {rank:5, title:"Dui Musafir", imdb_rating:'8.9', your_rating:false, action:''},
            {rank:6, title:"Hawa", imdb_rating:'8.8', your_rating:false, action:''},
        ]
     } 
    render() {
        const columns=[
            {label:"Rank", path:'rank', content: item => <td>{item}</td>},
            {label:"Title", path:'title', content: item => <td>{item}</td>},
            {label:"IMDB Rating", path:'imdb_rating', content: item => <td>{item}</td>},
            {label:"Your Rating", path:'your_rating', content: item => <td><Rating isRated={item}/></td>},
            {label:"Action", path:'action', content: item => <td>{item}</td>}
        ] 
        return (
            <Table columns={columns} info={this.state.movies} />
        );
    }
}
 
export default Movies;