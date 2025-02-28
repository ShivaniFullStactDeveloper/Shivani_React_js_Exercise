import './RatingButton.css';
import React from 'react';

export default class RatingButton extends React.Component {

    render(){
        return (
            <div >
                <button className="rating-button"><span> ⭐ </span> Rate</button>
            </div>
        )
    }
}
