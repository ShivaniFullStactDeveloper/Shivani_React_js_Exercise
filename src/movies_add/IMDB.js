import React from "react";
import IMDbHeader from "../movies_add/IMDbHeader";
import IMDbPanel from "../movies_add/IMDbPanel";
import MovieForm from "./MovieForm";


export default class IMDB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            formShow: false,  //control which panel is show

            movieArray: [],

        };
    }
    // show hide fnction
    openForm = () => {
        this.setState({ formShow: !this.state.formShow })
    }

    addMovieList = (movie) => {
        this.setState(() => ({
            movieArray: [...this.state.movieArray, movie],
            formShow: false,
        })
        );
    }

    render() {
        return (
            <div>
                <IMDbHeader openForm={this.openForm} />
                {/* <IMDbPanel formShow={this.state.formShow} openForm={this.openForm}/> */}
                {this.state.formShow ?(
                     <MovieForm addMovieList={this.addMovieList} />
                    ) : (
                     <IMDbPanel movieArray={this.state.movieArray} openForm={this.openForm}/>
                    )}
            </div>
        )
    }
}