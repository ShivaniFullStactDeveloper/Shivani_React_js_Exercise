import React from "react";
import IMDbHeader from "../movies_add/IMDbHeader";
import IMDbPanel from "../movies_add/IMDbPanel";
import MovieForm from "./MovieForm";


export default class IMDB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            formShow:false,
            // variabe
            movieName: "",
            movieImage: "",
            movieDuration: "",
        }
    }
// show hide fnction
    openForm=()=>{
        this.setState({formShow: !this.state.formShow})
    }

    addList =()=>{
        this.setState({
            movieName: name,
            movieImage: image,
            movieDuration: duration
          });
    }

    render() {
        return (
            <div>
                    <IMDbHeader openForm={this.openForm}/>
                    {/* <IMDbPanel formShow={this.state.formShow} openForm={this.openForm}/> */}
                    {this.state.formShow ? (<MovieForm addList={this.addList}/>) : 
                (<IMDbPanel/>)}
                    </div>
                )
    }
}