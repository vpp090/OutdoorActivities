import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Button, Header, List } from 'semantic-ui-react';

function App() {
  const [offers, setOffers] = useState([]); 

  useEffect(() => {
     axios.get('http://localhost:5000/api/offers')
          .then(response => 
              {
               
                setOffers(response.data);
     })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
        
        <List>
          {offers.map((offer: any)=> (
            <li key={offer.id}>
              {offer.title}
            </li>
          ))}
        </List>
       <Button content='test' />
    </div>
  );
}

export default App;
