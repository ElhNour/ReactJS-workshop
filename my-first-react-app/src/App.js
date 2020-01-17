import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Debates from './components/debates/Debates' ;
class App extends Component {
  render() {
    let title="WTM Algiers Debates"
    return (
      <div className="app">
        <Header title={title}></Header> 
        <Debates></Debates>
        <Footer></Footer>
      </div>
    );
  }
};

export default App
