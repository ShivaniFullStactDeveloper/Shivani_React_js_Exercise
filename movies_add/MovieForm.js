import React from "react";
import "./MovieForm.css";

export default class MovieForm extends React.Component {

    render(){
        return (
  
    <form className="movie-form">
        <h2>Movie Details</h2>
        <label for="movieName">Movie Name</label>
        <input className="movie-input" type="text" id="movieName" name="movieName"  />
        {/*image  */}
        <label for="movieImage">Movie Image (URL)</label>
        <input className="movie-input" type="url" id="movieImage" name="movieImage" />
        {/* reliase date */}
        <label>Release Date</label>
        <input className="movie-input" type="date" id="movieReleaseDate" name="movieReleaseDate" />
        {/* duration */}
        <label>Duration</label>
        <input className="movie-input" type="number" id="movieDuration" name="movieDuration" />
        {/* submit button */}
        <button className="submit-button" type="submit">Submit</button>
            </form>
        )
    }
}
