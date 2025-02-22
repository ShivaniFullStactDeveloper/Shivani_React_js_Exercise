import './CoinDashboard.css';
import React from 'react';
import CoinPanel from '../RJ_coin_game/CoinPanel';


export default class CoinDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            
        };
    }

    onCoinClick=(coin)=>{
        if(coin === "ONE"){
            this.setState({total: (this.state.total += 1)});
        }else if(coin === "TWO"){
            this.setState({total: (this.state.total += 2)});
        }else if(coin === "FIVE"){
            this.setState({total: (this.state.total += 5)});
        }else if(coin === "TEN"){
            this.setState({total: (this.state.total += 10)});
        }else{
            this.setState({total: (this.state.total += 20)});
        }
    }

    render(){
        return (
            <div className="DashBoard">
                {/* heading */}
                <h1>COIN GAME</h1>
                {/* total count coins */}
                <div className='counter'>Total Coins : {this.state.total} </div>
                {/* panel component */}
                <CoinPanel onCoinClick={this.onCoinClick}/>
            </div>
        )
    }
}