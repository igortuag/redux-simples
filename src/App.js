import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Intervalo from './components/Intervalo';

function App() {
  return (
    <div className="App">
      <h1>Execício React-Redux</h1>
      <div className="linha">
        <Intervalo>X</Intervalo>

      </div>
      <div className="linha">
        <Card title="Card2" green>X</Card>
        <Card title="Card3" blue>Y</Card>
        <Card title="Card4" purple>Y</Card>
      </div>
    </div>
  );
}

export default App;
