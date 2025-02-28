import React from "react";
import "./DynamicImageState.css";

export default class DynamicImageState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruit: "apple", 
        };
    }

    fruitImages = {
        apple: "https://freshsensations.com.au/cdn/shop/products/Apple_Red_Delicious.png?v=1555678920",
        banana: "https://media.istockphoto.com/id/619046500/photo/bananas.jpg?s=612x612&w=0&k=20&c=p5-v1iKwhOhw5cFjfx83qgaZcOBSVpUuicZi4VIGF2Y=",
        orange: "https://onlinetarkari.com/wp-content/uploads/2020/06/orange-600x600-500x500-1.jpg",
    };

    handleFruitChange = (event) => {
       if (event == null) {
        if (this.state.fruit === "apple") {
            this.setState({ fruit: "banana" });
        }
        else if (this.state.fruit === "banana") {
            this.setState({ fruit: "orange" });
        }
        else {
            this.setState({ fruit: "apple" });
        }
       }
       else{
        this.setState({ fruit: event.target.value });
       }
    };

    render() {
        return (
            <div className="main-contain">
                <h1 style={{color:"black"}}>Select a fruit</h1>
                <select className="select-fruit" value={this.state.fruit} onChange={this.handleFruitChange}>
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="orange">Orange</option>
                </select>
                <h2>Selected fruit is : {this.state.fruit}</h2>
                <img 
                    src={this.fruitImages[this.state.fruit]} 
                    alt={this.state.fruit} 
                    className="fruit-image"
                    onClick={()=>this.handleFruitChange(null)}
                />
            </div>
        );
    }
}