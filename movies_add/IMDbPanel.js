import React from "react";
import './IMDbPanel.css'
import MovieForm from "../movies_add/MovieForm";

export default class IMDbPanel extends React.Component {



    render() {
        return (

            <div class="panel">
                <img
                    src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT6xCAepdKLZnAHtJKY8_doB9bEeieqHgRRfvARvTjwt2oz1bE7TrqyHcKZrtUyyDt5iTHWU8e4oztWFHbpE0gqUgsjh1jDJr_bk93XzLx_nUmfeu1WoeL5&usqp=CAE"
                    alt="The Shawshank Redemption"
                    className="movie-image"
                />
                <div className="movie-details">
                    {/* name */}
                    <h2>1. The Shawshank Redemption</h2>
                    {/* release date */}
                    <p className="movie-info">1994 · 2h 22m · 15</p>
                    {/* duration */}
                    <p className="movie-info">1994 · 2h 22m · 15</p>
                    <div className="movie-rating">
                        ⭐ <span className="rating">9.3</span> (3M) · <a href="#" class="rate-link">Rate</a>
                    </div>
                </div>
                <button className="info-btn">ℹ️</button>
            </div>
            );
    };
}