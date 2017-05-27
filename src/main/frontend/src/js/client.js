import React from 'react';
import ReactDOM from 'react-dom';

//import Layout from "./components/Layout";
class Layout extends React.Component {
  constructor(){
    super();
    this.name = "Will";
  }

  getVal(val) {
    return 'Will is ' + val;
  }
  render() {
    //return <h1> It works! {this.getVal(3+2)}</h1>;
    return <h1> It works {this.name} ! </h1>;
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
