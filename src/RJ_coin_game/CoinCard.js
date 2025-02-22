import './CoinCard.css';
import React from 'react';

export default class CoinCard extends React.Component {
    
    render(){
        return (
            <div className="coin-card" onClick={()=>{
                this.props.onCoinClick(this.props.coinText)
                this.props.increaseCounter(this.props.coinText)
            }}>
                {/* coin image  */}
                <img className='coin-image'  
                src={this.props.coinImage}/>
                <text>{this.props.coinText}</text>
                {/* coin count */}
                {this.props.coinCounter ?
                <text className='count'>Count : {this.props.coinCounter}</text>
                : null }
            </div>
        )
    }
}