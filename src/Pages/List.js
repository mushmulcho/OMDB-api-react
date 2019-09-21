import React, {Component} from 'react';

class List extends Component{
    constructor(props){
        super(props);

    }

    render(){
        let moviesList = this.props.data.map( (movie) => {
            return (
                <div className="movieBox" key={movie.Title} id={movie.Title} onClick={this.props.onMovieClick}>
                  <div className="movieBox-header">{movie.Title}</div>
                    <img className="image small" src={movie.Poster}/>
                </div>
            )
        })
        return moviesList;
    }
}
export default List;