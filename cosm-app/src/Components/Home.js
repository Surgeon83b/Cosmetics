import React from 'react';
import MainSec from './MainSec.jsx';
import LeftPanel from './LeftPanel.jsx';
import '../styles/Home.css';

export default function Home() {
  return (
    <section className="secondflex">
      <LeftPanel />
      <MainSec isDef={false} />
    </section>
  )
}
