import CoinCard from '../RJ_coin_game/CoinCard';
import './CoinPanel.css';
import React from 'react';

export default class CoinPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // coin count variable
            coinCounterOne: 0,
            coinCounterTwo: 0,
            coinCounterFive: 0,
            coinCounterTen: 0,
            coinCounterTwenty: 0,
        }
    }

    // Increament counter
    increaseCounter = (coin) =>{
        if(coin === "ONE"){
            this.setState({coinCounterOne: (this.state.coinCounterOne + 1)})
        }else if(coin === "TWO"){
            this.setState({coinCounterTwo: (this.state.coinCounterTwo + 1)})
        }else if(coin === "FIVE"){
            this.setState({coinCounterFive: (this.state.coinCounterFive + 1)})
        }else if(coin === "TEN"){
            this.setState({coinCounterTen: (this.state.coinCounterTen + 1)})
        }else{
            this.setState({coinCounterTwenty: (this.state.coinCounterTwenty + 1)})
        }
    }

 render(){
        return (
            <div className="coin-panel">

                {/* Coin one */}
                <CoinCard coinImage="one coin.png" coinText={"ONE"}
                onCoinClick={this.props.onCoinClick}
                increaseCounter={this.increaseCounter}
                coinCounter={this.state.coinCounterOne}/>  
                
                {/* Coin two */}
                <CoinCard coinImage="two coin.png" coinText={"TWO"}
                onCoinClick={this.props.onCoinClick}
                increaseCounter={this.increaseCounter}
                coinCounter={this.state.coinCounterTwo}/> 
                
                {/* Coin five */}
                <CoinCard coinImage="five coin.png" coinText={"FIVE"}
                onCoinClick={this.props.onCoinClick}
                increaseCounter={this.increaseCounter}
                coinCounter={this.state.coinCounterFive}/> 
               
                {/* Coin ten */}
                <CoinCard coinImage="ten coin.png" coinText={"TEN"}
                onCoinClick={this.props.onCoinClick}
                increaseCounter={this.increaseCounter}
                coinCounter={this.state.coinCounterTen}/> 
              
                {/* Coin twenty */}
                <CoinCard coinImage="twenty coin.png" coinText={"TWENTY"}
                onCoinClick={this.props.onCoinClick}
                increaseCounter={this.increaseCounter}
                coinCounter={this.state.coinCounterTwenty}/>    
            </div>
        )
    }
}