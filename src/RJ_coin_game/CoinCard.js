import "./CoinCard.css";
import React from "react";

export default class CoinCard extends React.Component {
  render() {
    return (
      <div
        className="coin-card"
        onClick={() => {
          this.props.onCoinClick(this.props.coinText);
          this.props.increaseCounter(this.props.coinText);
        }}
      >
        {/* Coin Image */}
        <img className="coin-image" src={this.props.coinImage} alt="Coin" />

        {/* Coin Text */}
        <p className="coin-text">{this.props.coinText}</p>

        {/* Coin Count (only if greater than 0) */}
        {this.props.coinCounter ? (
          <p className="count">Count: {this.props.coinCounter}</p>
        ) : null}
      </div>
    );
  }
}
