import React from 'react';
import './AddMovie.css';


class AddMovie extends React.Component {
    render() {
        return (
            <div className="cart" >
                 {/* form show button */}
        <button onClick={this.props.openForm} className="watchlist-btn">⭐Add Movie</button>

            </div>

        );
    };
}
export default AddMovie;
