import React from 'react';
import HeadBar from './HeadBar';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';


function App() {

  const rootStyle = {
     rootWidth:{
      width: '100%'
     }
  }
  return (
    <Container fluid style={rootStyle.rootWidth}>
      <HeadBar />
      <Outlet />
    </Container>
    
   
  );
}

export default App;
