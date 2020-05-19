import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Execício React-Redux</h1>
      <div className="linha">
        <Card title="Card1" red>X</Card>
        <Card title="Card2" green>X</Card>

      </div>
      <div className="linha">
        <Card title="Card3" blue>Y</Card>
        <Card title="Card4" purple>Y</Card>
      </div>
    </div>
  );
}

export default App;
