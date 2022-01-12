import React from 'react';
import MainSec from './MainSec.jsx';
import LeftPanel from './LeftPanel.jsx';

export default function Home() {
  return (
    <div className="container" >
          <section className="secondflex"> 
            <LeftPanel /> 
            <MainSec isDef={false}/>
          </section>
    </div>
  )
}
