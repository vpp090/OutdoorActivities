import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [offers, setOffers] = useState([]); 

  useEffect(() => {
     axios.get('http://localhost:5000/api/offers')
          .then(response => 
              {setOffers(response.data);
     })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {offers.map((offer: any)=> (
            <li key={offer.id}>
              {offer.title}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
