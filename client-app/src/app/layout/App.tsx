import React from 'react';
import HeadBar from './HeadBar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <HeadBar />
      <Outlet />
    </>
   
  );
}

export default App;
