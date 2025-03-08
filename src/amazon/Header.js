import './Header.css';
import Cart from '../amazon/Cart';
import React from 'react';
import amazonLogo from '../assets/images/Amazon-Logo-White-PNG-Image.png'

class Header extends React.Component {
    render(){
    return (
        <header>
        <div className="header">
            {/* amazon logo */}
            <img className='amazon-logo' src={amazonLogo}/>
            {/* search bar */}
            <div className="search-bar">
                   <input type="text" className="input" placeholder="Search for products" />
                    {/* <button className="search-btn">🔍</button> */}
                </div>
            <Cart cartItems={this.props.cartArray} toggleCart={this.props.toggleCart} />
        </div>
        <h1 className="page-title" style={{textAlign:"center"}}>CPU Component</h1>
        </header>
    );
};
}
export default Header;