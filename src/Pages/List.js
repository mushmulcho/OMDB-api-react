import React, {Component} from 'react';

class List extends Component{
    constructor(props){
        super(props);

    }

    render(){
        let moviesList = this.props.data.map( (movie) => {
            console.log('movie', movie)
            return (
                <div className="movieBox" key={movie.Title} id={movie.Title} onClick={this.props.onMovieClick}>
                    <div className="small title">{movie.Title}</div>
                    <div className="small year">Year : {movie.Year}</div>
                    <div className="small type">Type : {movie.Type}</div>
                    <div><img className="image-small" src={movie.Poster}/></div>
                </div>
            )
        })
        return moviesList;
    }
}
export default List;