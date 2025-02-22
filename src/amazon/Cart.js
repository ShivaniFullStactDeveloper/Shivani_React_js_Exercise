import React from 'react';
import './Cart.css';
import cartlogo from '../assets/images/shopping trolly Background Removed.png'

class Cart extends React.Component {
    render() {
        return (
            <div className="cart" onClick={this.props.toggleCart}>
                 {/* Click event to toggle cart */}
                <img className='cart-logo' src={cartlogo} />
                
{/*  */}
{this.props.cartItems.length > 0 && (
                    <span className="cart-count" style={{color:"white"}}>{this.props.cartItems.length}</span>
                
                )}
                
            </div>

        );
    };
}
export default Cart;
