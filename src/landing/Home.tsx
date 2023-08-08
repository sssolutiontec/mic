import React from 'react';
import NavBar from '../header/NavBar';
import HeaderMessage from '../header/HeaderMessage';


function Home() {
  return (
    <>
      <HeaderMessage />
      <NavBar />
      <div>
        Wellcome to mic
      </div>
    </>
  );
}

export default Home;
