import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeadBar from './HeadBar';
import HomeComp from '../../features/home/homecomp';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';


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
    <>
      <HeadBar />
      <Outlet />
    </>
   
  );
}

export default App;
