import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../AppContext'
import List from './List'
import Page from './Page'


class ListView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchedMovie: "",
      apikey: "ca0e0bb3",
      list:[],
      data:[],
      movieInfo:{}
    }
    this.addItem = this.addItem.bind(this);
    this.onMovieClick = this.onMovieClick.bind(this);
  }

  addItem(event){
    event.preventDefault();

    let searchedMovie = this.state.searchedMovie;
    const addInput = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");

    if(addInput.value != ""){
      searchedMovie = addInput.value;
      //?s - Movie title to search, result is all movies with that name
      fetch('http://www.omdbapi.com/?s=' + searchedMovie + '&apikey=' + this.state.apikey)
      .then(result => {
          return result.json();
      })
      .then(data => {
          let searchedMovieData = data.Response == "False" ? [] : data.Search;
          this.setState({data:searchedMovieData,searchedMovie:searchedMovie, movieInfo:{}});
          addInput.classList.remove("is-danger");
          form.reset();
        })
    }else{
      addInput.classList.add("is-danger");
    }
  }
  onMovieClick(event){
    event.preventDefault();

    const movieName = event.currentTarget.id;
    //?t - specific Movie title to search for with more information
    fetch('http://www.omdbapi.com/?t=' + movieName + '&apikey=' + this.state.apikey)
    .then(result => {
        return result.json();
    })
    .then(data => {
        let searchedMovieData = data.Response == "False" ? {} : data;
        this.setState({data:[], movieInfo:searchedMovieData})
      })
  }

  render() {
    return (
      <AppContext.Consumer>
        {({ title }) => {
          return (
            <Fragment>
              <div className="cover-container">
                <div>
                  <h1 className="cover-heading">{title}</h1>
                </div>
                <div>{this.state.searchedMovie}</div>
                <div>
                  <section className="section">
                    <form className="form" id="addItemForm">
                      <input
                        type="text"
                        className="input-search"
                        id="addInput"
                        placeholder="Movie name"
                      />
                      <button className="button is-info" onClick={this.addItem}>
                        Search
                      </button>
                    </form>
                  </section>
                </div>
              </div>
              <div className="movie-container">
                <div>
                  <List data={this.state.data} onMovieClick = {this.onMovieClick}/>
                </div>
                <div>
                  <Page movieInfo={this.state.movieInfo}/>
                </div>    
              </div>
            </Fragment>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default ListView