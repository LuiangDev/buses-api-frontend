import React from 'react';
import BusList from './components/BusList';
import BusForm from './components/BusForm';

function App() {
  return (
    <div className="App">
      <h1>API de Buses - Frontend</h1>
      <br />
      <BusForm />
      <br />
      <BusList />
    </div>
  );
}

export default App;
