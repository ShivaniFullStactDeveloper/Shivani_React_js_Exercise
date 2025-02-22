import React from "react";
import './IMDbPanel.css'
import MovieForm from "../movies_add/MovieForm";

export default class IMDbPanel extends React.Component {



    render() {
        return (
            <div>
                {this.props.movieArray.length === 0 ? (
                    <p>No movies added yet. Click "Add Movie" to get started.</p>
                ) : (
                    this.props.movieArray.map((movie, index) => (
                        <div class="pane-container" key={index}>
                            <img
                                src={movie.movieImage}
                                alt={movie.movieName}
                                className="movie-image"
                            />
                            <div className="movie-details">
                                {/* name */}
                                <h2>{movie.movieName}</h2>
                                {/* release date */}
                                <p className="movie-info">{movie.movieReleaseDate}</p>
                                {/* duration */}
                                <p className="movie-info">{movie.movieDuration} min</p>
                                <div className="movie-rating">
                                    ⭐ <span className="rating">9.3</span> (3M) · <a href="#" class="rate-link">Rate</a>
                                </div>
                            </div>
                            <button className="info-btn">ℹ️</button>
                        </div>
                    ))
                )}
            </div>
        )
    };
}