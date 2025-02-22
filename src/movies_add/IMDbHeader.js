import React from "react";
import "./IMDbHeader.css";
import AddMovie from "../movies_add/AddMovie";

export default class IMDbHeader extends React.Component {
  render(){
  return (
    <nav className="navbar">
      {/* left section */}
      <div className="navbar-left">
        {/* logo */}
        <div className="logo">IMDb</div>
        {/* menu bar */}
        <button className="menu-btn">☰ Menu</button>
      </div>
{/* center part  */}
      <div className="navbar-center">
        {/* dropdown menu */}
        <select className="dropdown">
          <option>All</option>
        </select>
        {/* search bar */}
        <input type="text" placeholder="Search IMDb" className="search-input" />
        {/* search button */}
        <button className="search-btn">🔍</button>
      </div>
{/* right section */}
      <div className="navbar-right">
        <span className="pro-link">IMDbPro</span>
       
       <AddMovie openForm={this.props.openForm}/>
        {/* sing in button */}
        <button className="sign-in-btn">Sign In</button>
        {/* select language dropdown */}
        <select className="language-dropdown">
          <option>EN</option>
          <option>Hindi</option>
          <option>Mar</option>
        </select>
      </div>
    </nav>
  );
}
}