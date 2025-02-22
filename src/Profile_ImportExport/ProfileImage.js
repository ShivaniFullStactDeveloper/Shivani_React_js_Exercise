import React from "react";
import './ProfileImage.css';

export default class ProfileImage extends React.Component {
    render(){
        return(
            <div className="profile-div">
                <img src={"https://static.thenounproject.com/png/4595376-200.png"} className="image"/>
            </div>
        )
    }
}