import React from 'react';
import './Panel.css';

export default class Card extends React.Component {
    render() {
  
        return (
            <div>
                <div className='inner-container'>
                    <img className='product-img' src={this.props.item.image} alt={this.props.item.name} />
                    <div>
                        <h4>{this.props.item.name}</h4>
                        <p className='info'>{this.props.item.description}</p>
                        <p><span style={{color:" #ffa600", fontWeight:'bold'}}> ₹{this.props.item.price}</span></p>
                    </div>
                    {!this.props.isCartView &&  (   // Hide button when in cart view
                        <button 
                            className='bay-button' 
                            onClick={() => this.props.addToCart(this.props.item)} 
                        >
                            Add to Cart 
                        </button>
                    )}
                </div>
            </div>
        );
    }
}
