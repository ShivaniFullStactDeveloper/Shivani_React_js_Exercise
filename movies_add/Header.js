import './Header.css';
import React from 'react';
import Cart from '../movies_add/Cart'

export default class Header extends React.Component {

    render(){
        return (
            <header>
        <div className="header">
            {/* IMDB logo */}
            <img className='IMDB-logo' src="https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo.png"/>
            {/* search bar */}
            {/* <div className="search-bar"> */}
                   <input type="text" className="input" placeholder="Search for products" />
                   
                {/* </div> */}
            <Cart onClick={this.props.componentDidMount}/>
        </div>
      
        </header>
        )
    }
}


// import React from "react";
// import "./Header.css";
// import FormComponent from "./FormComponent"; // Import the form component

// export default class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
     
//     };
//   }


//   render() {
//     return (
//       <div>
//         <header className="header">
//           <div className="logo">
//             <img
//               style={{ height: "50px", width: "150px", float: "left" }}
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png"
//               alt="IMDB Logo"
//             />
//           </div>

//           <button className="add-movie-btn" onClick={this.toggleForm}>
//             ADD Movies+
//           </button>
//         </header>

//         {/* {/ Show the form when showForm is true /} */}
//         {this.state.showForm && <FormComponent />}
//       </div>
//     );
//   }
// }
