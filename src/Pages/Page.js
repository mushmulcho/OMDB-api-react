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
    render(){
        let allInfo = [];
        let info = "";
        for(let key in this.props.movieInfo){
            info = this.props.movieInfo[key];
            console.log(info)
            if(typeof info == "number" || typeof info =="string"){
                allInfo.push(
                    <div key={key}>{key} - {info}</div>
                ) 
            }
            
        }
        return allInfo;
    }
}
export default Page