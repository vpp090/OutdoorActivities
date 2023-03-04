import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeadBar from './HeadBar';


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
    <HeadBar />
  );
}

export default App;
