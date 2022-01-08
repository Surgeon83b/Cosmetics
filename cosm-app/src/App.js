import React, { useState, useEffect } from 'react';
import './App.css';
import './Cosm.css';
import MyNavPanel from './Components/MyNavPanel.jsx';
import MainSec from './Components/MainSec.jsx';
import LeftPanel from './Components/LeftPanel.jsx';

function App() {
  return (
    <>
      <div className="App">
        <div className="container" >
          <MyNavPanel />
          <section className="secondflex"> 
            <LeftPanel /> 
            <MainSec />    
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
