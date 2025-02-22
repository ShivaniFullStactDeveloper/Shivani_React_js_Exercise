import React from "react";
import "./MovieForm.css";

export default class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: "",
            movieImage: "",
            movieReleaseDate: "",
            movieDuration: "",
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        // Send movie data to parent component (IMDB.js)
        this.props.addMovieList(this.state)
           

        // Clear form after submission
        this.setState({
            movieName: "",
            movieImage: "",
            movieReleaseDate: "",
            movieDuration: "",
        });
    };


    render() {
        return (

            <form className="movie-form" onSubmit={this.handleSubmit}>
                <h2 className="headeng">Movie Details</h2>
                {/* Movie name */}
                <label className="label" htmlFor="movieName">Movie Name</label>
                <input
                    className="movie-input"
                    type="text"
                    id="movieName"
                    name="movieName"
                    value={this.state.movieName}
                    onChange={this.handleChange}
                    placeholder="Enter Movie Name"
                />
                {/*image  */}
                <label className="label" htmlFor="movieImage">Movie Image (URL)</label>
                <input
                    className="movie-input"
                    type="url"
                    id="movieImage"
                    name="movieImage"
                    value={this.state.movieImage}
                    onChange={this.handleChange}
                     placeholder="Enter Image URL"
                />
                {/* reliase date */}
                <label className="label" htmlFor="movieReleaseDate">Release Date</label>
                <input
                    className="movie-input"
                    type="date"
                    id="movieReleaseDate"
                    name="movieReleaseDate"
                    value={this.state.movieReleaseDate}
                    onChange={this.handleChange}
                    placeholder="Enter Release Date" />
                   
                {/* duration */}
                <label className="label" htmlFor="movieDuration">Duration (in minutes)</label>
                <input
                    className="movie-input"
                    type="number"
                    id="movieDuration"
                    name="movieDuration"
                    value={this.state.movieDuration}
                    onChange={this.handleChange}
                     placeholder="Enter Movie Duration"
                />
                {/* submit button */}
                <button className="submit-button" type="submit">Submit</button>
            </form>
        )
    }
}
