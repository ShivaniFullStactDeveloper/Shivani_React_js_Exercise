import './ShowStar.css'
import React from 'react';

export default class ShowStar extends React.Component {
    constructor(props) {    
        super(props);
        this.state = {
            // show: false,
        }
    }

    render(){
        if(! this.props.switchPanelStar){
            return true
        }
        return (
            <div className="star">star</div>
        )
    }
}