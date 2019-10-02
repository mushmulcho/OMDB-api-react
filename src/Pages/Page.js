import React, {Component} from 'react'

class Page extends Component {
    constructor(props){
        super(props);
        
        this.showInfo = this.showInfo.bind(this);
    }

    showInfo(){
        let allInfo ='';
        console.log(this.props.movieInfo)
        for(let info in this.props.movieInfo){
  
            allInfo += this.props.movieInfo[info] + '\r '
        }
        return allInfo;
    }
    test(info) {
        if(!info.Response)
            return (<div></div>);

        return(
            <div className="movie-page-box" key={info.imdbID}>
                <div className="title-overview">
                    <h1>{info.Title}</h1>
                    <div>
                        {info.Runtime} | {info.Type}
                    </div>
                </div>
                <div className="body-poster">
                    <div className="movie-poster">
                        <img className="image-big" src={info.Poster}/>
                    </div>
                    <div className="body-overview">
                        <h5>
                            {info.Plot}
                        </h5>
                        <div className="podcast">
                            <h6>Director : {info.Director}</h6>
                            <h6>Writer : {info.Writer}</h6>
                            <h6>Actors : {info.Actors}</h6>
                            <h6>Genre : {info.Genre}</h6>
                        </div>
                        
                    </div>
                </div>
                <div className="footer-overview">
                    <h6>Language : {info.Language}</h6>
                    <h6>Country : {info.Country}</h6>
                    <h6>Awards : {info.Awards}</h6>
                    <h6>Metascore : {info.Metascore}</h6>
                    <h6>imdbRating : {info.imdbRating}</h6>
                    <h6>imdbVotes : {info.imdbVotes}</h6>

                </div>
            </div>
        )
    }
    render(){
        return this.test(this.props.movieInfo)
    }
}
export default Page