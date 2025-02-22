// import React from 'react';
// import Card from '../amazon/Card';
// import './Panel.css';




// class Panel extends React.Component {
//     render(){
//     return (

//         <div className='main-container'>

//             {/* Mapping through the data */}
//             {this.props.productArray.map((product, index) => (
//                 <div className='inner-container'>
//                     <Card
//                         key={product.id}
//                         item={product}
//                          addToCart={this.props.addToCart}/>
//                 </div>

//             ))}
//         </div>

//     );
// }s
// };

// export default Panel;


import React from 'react';
import Card from '../amazon/Card';
import './Panel.css';

class Panel extends React.Component {
    render() {
        // return (
        //     <div className='main-container'>
                
        //         {/* Mapping through the data */}
        //         {this.props.productArray.map((product) => (
        //             <div> {/* Key moved here */}
        //                 <Card item={product} addToCart={this.props.addToCart} />
        //         </div>
        //         ))}
        // </div>
        // );

        return (
            <div className='main-container'>
                {this.props.productArray.length === 0 ? (
                    <p style={{ textAlign: "center" }}>Your cart is empty.</p>
                ) : (
                    this.props.productArray.map((product, index) => (
                        <div key={index}>
                            <Card
                                item={product}
                                addToCart={this.props.isCartView ? null : this.props.addToCart} 
                                isCartView={this.props.isCartView}
                            />
                        </div>
                    ))
                )}
            </div>
        );
    }
}

export default Panel;
