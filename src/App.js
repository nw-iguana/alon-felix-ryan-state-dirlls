import React, { Component } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld.js';
import Bomb from './components/Bomb.js';
import RouletteGun from './components/RouletteGun';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <br/>
        <hr />
        <Bomb />
        <br />
        <hr />
        <RouletteGun bulletInChamber={8}/>
      </div>
    );
  }
}

export default App;
